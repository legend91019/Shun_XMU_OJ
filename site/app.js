const DATA = window.XMUOJ_SITE_DATA;
const state = {
  bankId: "jiandao",
  problemId: "",
  query: "",
};

const $ = (selector) => document.querySelector(selector);
const app = $("#app");
const problemList = $("#problemList");
const bankSwitch = $("#bankSwitch");
const sidebarMeta = $("#sidebarMeta");
const searchInput = $("#searchInput");
const toast = $("#toast");

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const normalize = (value) => String(value ?? "").toLowerCase();
const decodeEntities = (value) => {
  const element = document.createElement("textarea");
  element.innerHTML = String(value ?? "");
  return element.value;
};

function getBank(id = state.bankId) {
  return DATA.banks.find((bank) => bank.id === id) ?? DATA.banks[0];
}

function getProblem(bank = getBank(), id = state.problemId) {
  return bank.problems.find((problem) => problem.id === id) ?? bank.problems[0];
}

function totalProblems() {
  return DATA.banks.reduce((sum, bank) => sum + bank.problems.length, 0);
}

function totalLines() {
  return DATA.banks.reduce(
    (sum, bank) => sum + bank.problems.reduce((part, problem) => part + problem.lineCount, 0),
    0,
  );
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1700);
}

async function copyText(text, label = "代码") {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.append(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    showToast(`${label} 已复制`);
  } catch {
    showToast("复制失败，请手动选中代码");
  }
}

const KEYWORDS = new Set([
  "using",
  "namespace",
  "int",
  "long",
  "double",
  "float",
  "char",
  "bool",
  "void",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "class",
  "struct",
  "public",
  "private",
  "const",
  "auto",
  "vector",
  "string",
  "stack",
  "queue",
  "map",
  "set",
  "priority_queue",
  "cin",
  "cout",
  "endl",
  "printf",
  "scanf",
]);

function wrapToken(className, text) {
  return `<span class="${className}">${escapeHtml(text)}</span>`;
}

function highlight(source) {
  let output = "";
  let i = 0;

  while (i < source.length) {
    const two = source.slice(i, i + 2);

    if (source.startsWith("#include", i)) {
      output += wrapToken("kw", "#include");
      i += 8;
      continue;
    }

    if (two === "//") {
      const end = source.indexOf("\n", i);
      const next = end === -1 ? source.length : end;
      output += wrapToken("com", source.slice(i, next));
      i = next;
      continue;
    }

    if (two === "/*") {
      const end = source.indexOf("*/", i + 2);
      const next = end === -1 ? source.length : end + 2;
      output += wrapToken("com", source.slice(i, next));
      i = next;
      continue;
    }

    if (source[i] === '"' || source[i] === "'") {
      const quote = source[i];
      let j = i + 1;
      while (j < source.length) {
        if (source[j] === "\\") {
          j += 2;
          continue;
        }
        if (source[j] === quote) {
          j += 1;
          break;
        }
        j += 1;
      }
      output += wrapToken("str", source.slice(i, j));
      i = j;
      continue;
    }

    const number = source.slice(i).match(/^\d+(?:\.\d+)?/);
    if (number) {
      output += wrapToken("num", number[0]);
      i += number[0].length;
      continue;
    }

    const word = source.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (word) {
      const token = word[0];
      output += KEYWORDS.has(token) ? wrapToken("kw", token) : escapeHtml(token);
      i += token.length;
      continue;
    }

    output += escapeHtml(source[i]);
    i += 1;
  }

  return output;
}

function routeTo(hash) {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts[0] === "bank" && parts[1]) {
    state.bankId = parts[1];
    state.problemId = parts[2] ? `${parts[1]}-${parts[2]}` : "";
  } else {
    state.problemId = "";
  }
}

function updateHash(bankId, problemCode = "") {
  const next = problemCode ? `#/bank/${bankId}/${problemCode}` : `#/bank/${bankId}`;
  if (window.location.hash !== next) window.location.hash = next;
  else render();
}

function problemMatches(problem, query) {
  if (!query) return true;
  const haystack = normalize(
    [
      problem.code,
      problem.title,
      problem.file,
      problem.language,
      problem.source,
      Object.values(problem.meta ?? {}).join(" "),
    ].join(" "),
  );
  return haystack.includes(normalize(query));
}

function renderBankSwitch() {
  bankSwitch.innerHTML = DATA.banks
    .map(
      (bank) => `
        <button class="bank-tab ${bank.id === state.bankId ? "is-active" : ""}" type="button" data-bank="${bank.id}">
          ${escapeHtml(bank.shortName)}
        </button>
      `,
    )
    .join("");
}

function renderSidebar() {
  const bank = getBank();
  const visible = bank.problems.filter((problem) => problemMatches(problem, state.query));
  renderBankSwitch();
  sidebarMeta.innerHTML = `
    <span>${escapeHtml(bank.contest)} · ${bank.problems.length} 题</span>
    <span>当前筛选 ${visible.length} 题 · 作者 ${escapeHtml(DATA.author)}</span>
  `;
  problemList.innerHTML =
    visible
      .map(
        (problem) => `
          <a class="problem-link ${problem.id === state.problemId ? "is-active" : ""}" href="#/bank/${bank.id}/${problem.code}">
            <span class="problem-code">${escapeHtml(problem.code)}</span>
            <span class="problem-title">${escapeHtml(problem.title)}</span>
          </a>
        `,
      )
      .join("") || '<div class="empty">没有搜到，换个关键词试试。</div>';
}

function metaItems(problem) {
  const meta = problem.meta ?? {};
  const items = [
    problem.language,
    `${problem.lineCount} 行`,
    problem.file,
    meta.ojId ? `OJ ${meta.ojId}` : "",
    meta.timeLimit ? meta.timeLimit : "",
    meta.memoryLimit ? meta.memoryLimit : "",
  ].filter(Boolean);
  return items.map((item) => `<span class="meta-chip">${escapeHtml(item)}</span>`).join("");
}

function statementBlock(problem) {
  const meta = problem.meta ?? {};
  const rows = [
    ["思路", meta.idea],
    ["总结", meta.summary],
    ["来源", meta.source],
    ["题意", meta.description],
    ["输入", meta.input],
    ["输出", meta.output],
    ["样例输入", meta.sampleInput],
    ["样例输出", meta.sampleOutput],
    ["样例", meta.samples],
    ["提示", meta.hint],
  ].filter(([, value]) => value);

  if (!rows.length) return "";

  return `
    <section class="statement">
      <h2>题解速览</h2>
      <dl>
        ${rows
          .map(
            ([label, value]) => `
              <div>
                <dt>${escapeHtml(label)}</dt>
                <dd>${escapeHtml(decodeEntities(value))}</dd>
              </div>
            `,
          )
          .join("")}
      </dl>
    </section>
  `;
}

function codePanel(problem, title = "参考代码") {
  return `
    <section class="code-panel" data-code-id="${escapeHtml(problem.id)}">
      <div class="code-head">
        <strong>${escapeHtml(title)} · ${escapeHtml(problem.file)}</strong>
        <div class="code-tools">
          <button class="copy-button" type="button" data-copy="${escapeHtml(problem.id)}">复制代码</button>
          <button class="ghost-button" type="button" data-select="${escapeHtml(problem.id)}">全选</button>
        </div>
      </div>
      <div class="code-scroll">
        <pre tabindex="0"><code>${highlight(problem.source)}</code></pre>
      </div>
    </section>
  `;
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-title">
        <span class="eyebrow">XMUOJ ARCHIVE · ${escapeHtml(DATA.author)}</span>
        <h1>剑道试炼、期末检验与例题，一站式复制提交。</h1>
        <p class="lead">参考同学题解站的题库组织方式，升级成更适合刷题的工作台：左侧快速定位，右侧直接看题意、思路、总结、样例和高亮代码，每份代码都能一键复制。</p>
      </div>
      <div class="stats">
        <div class="stat"><strong>${totalProblems()}</strong><span>已整理题目</span></div>
        ${DATA.banks
          .map((bank) => `<div class="stat"><strong>${bank.problems.length}</strong><span>${escapeHtml(bank.shortName)}</span></div>`)
          .join("")}
        <div class="stat"><strong>${totalLines()}</strong><span>代码总行数</span></div>
      </div>
      <div class="bank-grid">
        ${DATA.banks
          .map(
            (bank) => `
              <a class="bank-card" href="#/bank/${bank.id}">
                <span class="pill">${escapeHtml(bank.contest)}</span>
                <h2>${escapeHtml(bank.name)}</h2>
                <p>${escapeHtml(bank.description)}</p>
                <div class="bank-card-footer">
                  <strong>${bank.problems.length} 道题</strong>
                  <span>进入题库 →</span>
                </div>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProblem() {
  const bank = getBank();
  const visible = bank.problems.filter((problem) => problemMatches(problem, state.query));
  const problem = getProblem(bank, state.problemId) ?? visible[0];
  if (!problem) {
    app.innerHTML = '<div class="empty">没有可展示的题目。</div>';
    return;
  }

  state.problemId = problem.id;
  app.innerHTML = `
    <article class="problem-view">
      <header class="problem-head">
        <div class="problem-title-row">
          <div>
            <span class="eyebrow">${escapeHtml(bank.name)} · ${escapeHtml(DATA.author)}</span>
            <h1>${escapeHtml(problem.code)} · ${escapeHtml(problem.title)}</h1>
          </div>
          <div class="toolbar">
            <button class="copy-button" type="button" data-copy="${escapeHtml(problem.id)}">复制代码</button>
            <a class="ghost-button" href="#/bank/${bank.id}">题库首页</a>
          </div>
        </div>
        <div class="meta-row">${metaItems(problem)}</div>
      </header>
      ${statementBlock(problem)}
      ${codePanel(problem)}
      ${
        problem.alternates?.length
          ? `<section class="alt-grid">${problem.alternates
              .map((alt) => codePanel(alt, "备用写法"))
              .join("")}</section>`
          : ""
      }
    </article>
  `;
}

function render() {
  routeTo(window.location.hash);
  renderSidebar();
  if (!window.location.hash || window.location.hash === "#/") {
    renderHome();
  } else {
    renderProblem();
    renderSidebar();
  }
}

function findProblemById(id) {
  for (const bank of DATA.banks) {
    const problem = bank.problems.find((item) => item.id === id);
    if (problem) return problem;
    for (const item of bank.problems) {
      const alt = item.alternates?.find((entry) => entry.id === id);
      if (alt) return alt;
    }
  }
  return null;
}

document.addEventListener("click", (event) => {
  const bankButton = event.target.closest("[data-bank]");
  if (bankButton) {
    updateHash(bankButton.dataset.bank);
    return;
  }

  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    const problem = findProblemById(copyButton.dataset.copy);
    if (problem) copyText(problem.source, problem.file);
    return;
  }

  const selectButton = event.target.closest("[data-select]");
  if (selectButton) {
    const panel = selectButton.closest(".code-panel");
    const pre = panel?.querySelector("pre");
    if (pre) {
      const range = document.createRange();
      range.selectNodeContents(pre);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      showToast("已选中代码");
    }
  }
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderSidebar();
});

$("#themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("xmuoj-theme", next);
});

window.addEventListener("hashchange", render);
document.documentElement.dataset.theme = localStorage.getItem("xmuoj-theme") || "";
render();
