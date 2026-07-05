from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def parse_jd_problem_list(path: Path) -> dict[str, dict[str, str]]:
    if not path.exists():
        return {}

    text = read_text(path).replace("\r\n", "\n")
    chunks = re.split(r"\n(?====\s+JD\d+)", text.strip())
    problems: dict[str, dict[str, str]] = {}

    for chunk in chunks:
        header = re.match(r"^===\s+(JD\d+)\s+ID=(\d+):\s*(.*?)\s+===\n?", chunk)
        if not header:
            continue

        code, problem_id, title = header.groups()
        body = chunk[header.end() :]
        fields: dict[str, str] = {
            "code": code,
            "ojId": problem_id,
            "title": title,
        }
        current_key: str | None = None
        current_lines: list[str] = []

        def flush() -> None:
            nonlocal current_key, current_lines
            if current_key:
                fields[current_key] = "\n".join(current_lines).strip()
            current_key = None
            current_lines = []

        for line in body.splitlines():
            field = re.match(
                r"^(Src|Desc|Input|Output|Hint|Sample_Input|Sample_Output):\s*(.*)$",
                line,
            )
            if field:
                flush()
                current_key = field.group(1)
                current_lines = [field.group(2)]
            elif current_key:
                current_lines.append(line)
        flush()

        problems[code] = fields

    return problems


def extract_comment_block(source: str) -> str:
    match = re.search(r"/\*(.*?)\*/", source, flags=re.S)
    if not match:
        return ""
    lines = []
    for line in match.group(1).splitlines():
        line = re.sub(r"^\s*\*\s?", "", line).rstrip()
        if line:
            lines.append(line)
    return "\n".join(lines)


def parse_link_metadata(path: Path, source: str) -> dict[str, str]:
    stem = path.stem
    comment = extract_comment_block(source)
    first = next((line for line in comment.splitlines() if line.strip()), "")
    title = ""
    if first:
        match = re.match(rf"{re.escape(stem)}\s*:\s*(.*)$", first)
        if match:
            title = match.group(1).strip()
    if not title:
        title = stem

    fields = {"code": stem, "title": title}
    for label, key in [
        ("Time Limit", "timeLimit"),
        ("Memory Limit", "memoryLimit"),
        ("Input", "input"),
        ("Output", "output"),
    ]:
        match = re.search(rf"{label}:\s*(.*)", comment)
        if match:
            fields[key] = match.group(1).strip()

    samples = re.findall(r"Sample\s*\d*:\s*(.*)", comment)
    if samples:
        fields["samples"] = "\n".join(samples)

    return fields


def build_problem(code_path: Path, bank_id: str, problem_meta: dict[str, str] | None = None) -> dict:
    source = read_text(code_path).strip() + "\n"
    language = "C" if code_path.suffix.lower() == ".c" else "C++"

    if problem_meta:
        title = problem_meta.get("title", code_path.stem)
        meta = {
            "ojId": problem_meta.get("ojId", ""),
            "source": problem_meta.get("Src", ""),
            "description": problem_meta.get("Desc", ""),
            "input": problem_meta.get("Input", ""),
            "output": problem_meta.get("Output", ""),
            "hint": problem_meta.get("Hint", ""),
            "sampleInput": problem_meta.get("Sample_Input", ""),
            "sampleOutput": problem_meta.get("Sample_Output", ""),
        }
    else:
        parsed = parse_link_metadata(code_path, source)
        title = parsed["title"]
        meta = {
            "timeLimit": parsed.get("timeLimit", ""),
            "memoryLimit": parsed.get("memoryLimit", ""),
            "input": parsed.get("input", ""),
            "output": parsed.get("output", ""),
            "samples": parsed.get("samples", ""),
        }

    return {
        "id": f"{bank_id}-{code_path.stem}",
        "code": code_path.stem,
        "file": code_path.name,
        "title": title,
        "language": language,
        "lineCount": source.count("\n"),
        "source": source,
        "meta": meta,
    }


def main() -> None:
    jd_dir = ROOT / "李胜睿剑道试炼"
    link_dir = ROOT / "李胜睿例题"
    jd_meta = parse_jd_problem_list(jd_dir / "all_problems.txt")

    jd_problem_map: dict[str, dict] = {}
    jd_alternates: list[dict] = []
    for code_path in sorted(jd_dir.glob("JD*.cpp")):
        problem = build_problem(code_path, "jiandao", jd_meta.get(code_path.stem))
        jd_problem_map[code_path.stem] = problem

    for alt_path in sorted(jd_dir.glob("JD*_*.c")):
        base = alt_path.stem.split("_", 1)[0]
        alt = build_problem(alt_path, "jiandao", jd_meta.get(base))
        alt["variantOf"] = base
        jd_alternates.append(alt)

    for alt in jd_alternates:
        base = alt["variantOf"]
        if base in jd_problem_map:
            jd_problem_map[base].setdefault("alternates", []).append(alt)
        else:
            jd_problem_map[alt["code"]] = alt

    banks = [
        {
            "id": "jiandao",
            "name": "李胜睿剑道试炼",
            "shortName": "剑道试炼",
            "contest": "Contest 359",
            "description": "从基础输入输出到链表、栈队列的完整闯关题库。",
            "problems": list(jd_problem_map.values()),
        },
        {
            "id": "examples",
            "name": "李胜睿例题",
            "shortName": "例题",
            "contest": "Contest 362",
            "description": "程序设计实践例题，按编号整理为可快速检索和复制的代码库。",
            "problems": [
                build_problem(path, "examples")
                for path in sorted(link_dir.glob("LinK*.cpp"))
            ],
        },
    ]

    payload = {
        "author": "天帝——王勇顺",
        "generatedAt": "2026-07-05",
        "banks": banks,
    }

    SITE.mkdir(exist_ok=True)
    data = "window.XMUOJ_SITE_DATA = "
    data += json.dumps(payload, ensure_ascii=False, indent=2)
    data += ";\n"
    (SITE / "data.js").write_text(data, encoding="utf-8")
    print(f"Generated {SITE / 'data.js'}")
    print(f"Banks: {', '.join(f'{b['shortName']} {len(b['problems'])}' for b in banks)}")


if __name__ == "__main__":
    main()
