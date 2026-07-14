from __future__ import annotations

import json
import re
from copy import deepcopy
from pathlib import Path


ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"

FINAL_EXAM_CODES = [f"JD{i:03d}" for i in range(1, 51)]

FINAL_EXAM_NOTES = {
    "JD001": ("读入两个整数直接相加输出，考最基础的输入输出。", "基础题最重要的是别多输出提示文字。"),
    "JD002": ("读入两个整数求乘积，并按指定前缀格式输出。", "有固定格式时空格和等号位置要完全一致。"),
    "JD003": ("按公式 A*B-C*D 计算差值，考表达式顺序。", "复杂一点的算式先写清括号，避免运算顺序看错。"),
    "JD004": ("读入商品数量和单价求总价，用浮点数保留两位。", "金额题要记得 fixed 和 setprecision。"),
    "JD005": ("用圆面积公式 pi*r*r 计算并保留四位小数。", "常量 pi 要按题目给定值，不要随手换精度。"),
    "JD006": ("按权重计算两项成绩的加权平均。", "加权平均的分母是权重之和，不是科目数量。"),
    "JD007": ("读入工号、天数、日薪，输出工资两行格式。", "多行输出题要逐行对齐样例。"),
    "JD008": ("用路程除以耗油量求每升可跑公里数。", "浮点除法别写成整数除法。"),
    "JD009": ("套用球体体积公式计算并格式化输出。", "公式里 4/3 要写成 4.0/3.0。"),
    "JD010": ("比较三个数，输出其中最大值。", "多次 max 或条件判断都可以，关键是覆盖三个数。"),
    "JD011": ("用两点距离公式 sqrt(dx*dx+dy*dy) 求距离。", "几何题注意读入是浮点数。"),
    "JD012": ("根据三个参数分别计算三角形、圆、梯形、正方形和长方形面积。", "一题多输出时每一行的小数位都要统一。"),
    "JD013": ("把总秒数拆成小时、分钟、秒。", "取整和取余配合使用，单位转换会很稳。"),
    "JD014": ("从大面额到小面额贪心拆分纸币数量。", "贪心换钱题每次更新剩余金额。"),
    "JD015": ("判断两个整数是否互为倍数。", "取模前要注意题目是否可能出现 0。"),
    "JD016": ("先判断三边能否成三角形，能则求周长，否则求梯形面积。", "三角形成立条件是任意两边之和大于第三边。"),
    "JD017": ("根据开始和结束小时计算跨天持续时间。", "相等时通常表示满 24 小时，要按题意特判。"),
    "JD018": ("把三个整数排序后输出。", "排序题直接用数组和 sort 最不容易漏情况。"),
    "JD019": ("按商品编号查单价，再乘数量求总价。", "用数组存价格比一堆 if 更清晰。"),
    "JD020": ("用区间判断把数值归类。", "边界开闭要严格照题目写。"),
    "JD021": ("根据坐标判断象限、坐标轴或原点。", "先判断轴和原点，再判断象限。"),
    "JD022": ("比较两数大小并输出对应关系。", "分支题先覆盖相等情况会更清楚。"),
    "JD023": ("按条件判断成绩或数值所属等级。", "连续区间题适合从小到大逐段判断。"),
    "JD024": ("根据输入编号或条件查表输出结果。", "查表题把规则写成数组能减少重复代码。"),
    "JD025": ("用循环累加满足条件的数。", "循环题先确定起点、终点和是否包含端点。"),
    "JD026": ("统计一组数据中符合条件的个数。", "计数变量初始化为 0，满足条件就加一。"),
    "JD027": ("循环读入多项数据并求和或平均。", "平均值要用浮点数保存，最后再格式化。"),
    "JD028": ("按题目规则枚举并输出一段序列。", "输出序列时注意每个数之间的空格。"),
    "JD029": ("用循环寻找最大或最小值。", "最值变量可以先用第一个输入初始化。"),
    "JD030": ("处理多组输入并逐组输出答案。", "多组数据题不要只读一次。"),
    "JD031": ("用嵌套循环生成题目要求的图形或表格。", "外层控制行，内层控制列，格式会更稳。"),
    "JD032": ("按固定次数循环计算累计结果。", "每轮更新变量前先想清楚旧值是否还要用。"),
    "JD033": ("用数组保存数据，再按要求遍历处理。", "数组下标从 0 还是 1 开始要统一。"),
    "JD034": ("读入数组后统计指定性质的元素。", "遍历数组时把判断条件写成单独 if 更直观。"),
    "JD035": ("对数组元素进行查找或替换。", "找到目标后是否继续查找，要看题目要求。"),
    "JD036": ("对一组数排序或按顺序输出。", "能用 sort 的排序题就别手写复杂逻辑。"),
    "JD037": ("用二维数组保存矩阵并按行列处理。", "矩阵题先确认行数和列数的循环边界。"),
    "JD038": ("计算矩阵指定区域或对角线的结果。", "对角线题核心是行列下标之间的关系。"),
    "JD039": ("按题意遍历矩阵并输出转换后的内容。", "输出矩阵时每行末尾格式要单独处理。"),
    "JD040": ("用字符串读入并逐字符判断。", "字符题可以直接遍历 string。"),
    "JD041": ("统计字符串中某类字符的数量。", "数字、字母判断可以用范围比较或 cctype。"),
    "JD042": ("对字符串做大小写或字符替换。", "字符转换时只改满足条件的字符。"),
    "JD043": ("查找字符串中的目标字符或子串。", "string::find 能让查找题很简洁。"),
    "JD044": ("按规则拼接或重排字符串。", "字符串构造题用新字符串收集答案更安全。"),
    "JD045": ("逐词处理输入文本，输出符合要求的词。", "读词和读整行的区别要看题目有没有空格。"),
    "JD046": ("模拟题目给定过程，按步骤更新状态。", "模拟题不要跳步，把状态变量命名清楚。"),
    "JD047": ("用简单递推或循环求出第 n 项。", "递推题先写初值，再写转移。"),
    "JD048": ("用函数封装重复计算逻辑。", "函数题重点是参数和返回值类型匹配。"),
    "JD049": ("用条件和循环综合处理输入数据。", "综合题先拆成读入、计算、输出三段。"),
    "JD050": ("按题目规则完成基础数据处理并输出结果。", "最后一遍对照样例检查格式最有效。"),
}


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


def clone_for_final_exam(problem: dict) -> dict:
    cloned = deepcopy(problem)
    cloned["id"] = f"final_exam-{cloned['code']}"
    idea, summary = FINAL_EXAM_NOTES[cloned["code"]]
    cloned.setdefault("meta", {})
    cloned["meta"]["idea"] = (
        f"{idea} 解题时先把输入数据按题目顺序读完整，再把核心公式、判断条件或循环过程单独写清楚，"
        "最后对照样例检查输出格式和小数位。"
    )
    cloned["meta"]["summary"] = summary
    return cloned


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

    final_exam_problems = [
        clone_for_final_exam(jd_problem_map[code])
        for code in FINAL_EXAM_CODES
        if code in jd_problem_map
    ]

    banks = [
        {
            "id": "jiandao",
            "name": "李胜睿剑道试炼",
            "shortName": "剑道试炼",
            "contest": "Contest 357",
            "description": "从基础输入输出到图论、动态规划的完整闯关题库，保留原题解目录与代码复制体验。",
            "problems": list(jd_problem_map.values()),
        },
        {
            "id": "final_exam",
            "name": "李胜睿期末检验",
            "shortName": "期末检验",
            "contest": "Final Review",
            "description": "精选 50 道期末复习题，每题补充一句思路和一句总结，适合快速回看考点与常见坑。",
            "problems": final_exam_problems,
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
        "generatedAt": "2026-07-14",
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
