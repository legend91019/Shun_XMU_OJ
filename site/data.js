window.XMUOJ_SITE_DATA = {
  "author": "天帝——王勇顺",
  "generatedAt": "2026-07-05",
  "banks": [
    {
      "id": "jiandao",
      "name": "李胜睿剑道试炼",
      "shortName": "剑道试炼",
      "contest": "Contest 359",
      "description": "从基础输入输出到链表、栈队列的完整闯关题库。",
      "problems": [
        {
          "id": "jiandao-JD001",
          "code": "JD001",
          "file": "JD001.cpp",
          "title": "铁令求和",
          "language": "C++",
          "lineCount": 8,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6929",
            "source": "AcWing 1 | JD001 | 第1章 持剑叩门",
            "description": "李少白第一次来到剑道宗山门前。梁嘉峰递给他两枚铁令，上面各刻着一个数。「加起来，报给我。」",
            "input": "一行，两个整数A和B，用空格隔开。",
            "output": "一个整数，即A+B的结果。",
            "hint": "读入两个整数，输出它们的和。最基础的输入输出练习。原题链接",
            "sampleInput": "",
            "sampleOutput": ""
          }
        },
        {
          "id": "jiandao-JD002",
          "code": "JD002",
          "file": "JD002.cpp",
          "title": "铁令相乘",
          "language": "C++",
          "lineCount": 8,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << \"PROD = \" << a * b << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6930",
            "source": "AcWing 605 | JD002 | 第1章 持剑叩门",
            "description": "梁嘉峰又递来两枚铁令。这一次他竖起两根手指——乘起来。",
            "input": "一行，两个整数A和B，用空格隔开。",
            "output": "输出 `PROD = ` 后跟A×B的结果。",
            "hint": "读入两个整数，输出乘积。注意输出格式带前缀。原题链接",
            "sampleInput": "3 9",
            "sampleOutput": "PROD = 27"
          }
        },
        {
          "id": "jiandao-JD003",
          "code": "JD003",
          "file": "JD003.cpp",
          "title": "四令求差",
          "language": "C++",
          "lineCount": 8,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c, d;\n    cin >> a >> b >> c >> d;\n    cout << \"DIFFERENCE = \" << a * b - c * d << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6931",
            "source": "AcWing 608 | JD003 | 第1章 持剑叩门",
            "description": "练功房桌上摆着四枚铁令。梁嘉峰说：「A和B相乘，C和D相乘，把两个积的差报给我。」",
            "input": "一行，四个整数A、B、C、D，用空格隔开。",
            "output": "输出 `DIFFERENCE = ` 后跟A×B − C×D的结果。",
            "hint": "先乘后减，注意运算顺序和输出格式。原题链接",
            "sampleInput": "5 6 7 8",
            "sampleOutput": "DIFFERENCE = -26"
          }
        },
        {
          "id": "jiandao-JD004",
          "code": "JD004",
          "file": "JD004.cpp",
          "title": "集市算账",
          "language": "C++",
          "lineCount": 10,
          "source": "#include <iostream>\n#include <cstdio>\nusing namespace std;\nint main() {\n    int id, qty;\n    double price;\n    cin >> id >> qty >> price;\n    printf(\"TOTAL = %.2f\\n\", qty * price);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6932",
            "source": "AcWing 611 | JD004 | 第1章 持剑叩门",
            "description": "宗门集市上，赵晴儿帮账房算一笔账。已知商品编号、购买数量和单价，算出总价。",
            "input": "一行，三个数：商品编号（整数）、购买数量（整数）、单价（浮点数）。",
            "output": "输出 TOTAL = 后跟总价（数量×单价），保留两位小数。",
            "hint": "总价 = 件数₁×单价₁ + 件数₂×单价₂。原题链接",
            "sampleInput": "12 1 5.30",
            "sampleOutput": "TOTAL = 5.30"
          }
        },
        {
          "id": "jiandao-JD005",
          "code": "JD005",
          "file": "JD005.cpp",
          "title": "比武台",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\n#include <cstdio>\nusing namespace std;\nint main() {\n    double r;\n    cin >> r;\n    printf(\"A=%.4f\\n\", 3.14159 * r * r);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6933",
            "source": "AcWing 604 | JD005 | 第1章 持剑叩门",
            "description": "山门内是一片圆形的比武台。赵晴儿指着地面：「半径是r，算算它的面积。」π取3.14159。",
            "input": "一个浮点数r，表示半径。",
            "output": "输出 `A=` 后跟面积，保留4位小数。",
            "hint": "面积 = 3.14159 × r × r，注意浮点数运算和格式化输出。原题链接",
            "sampleInput": "2.00",
            "sampleOutput": "A=12.5664"
          }
        },
        {
          "id": "jiandao-JD006",
          "code": "JD006",
          "file": "JD006.cpp",
          "title": "剑术考核",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\n#include <cstdio>\nusing namespace std;\nint main() {\n    double a, b;\n    cin >> a >> b;\n    printf(\"Average = %.5f\\n\", (a * 3.5 + b * 7.5) / 11);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6934",
            "source": "AcWing 606 | JD006 | 第1章 持剑叩门",
            "description": "入门考核有两项：剑术和心法。剑术权重3.5，心法权重7.5。赵晴儿拿到成绩后要算加权平均分。",
            "input": "两行，每行一个浮点数，分别表示剑术成绩A和心法成绩B。",
            "output": "输出 `Average = ` 后跟加权平均分，保留5位小数。",
            "hint": "加权平均 = (A×3.5 + B×7.5) / 11。分母是权重之和，不是2。原题链接",
            "sampleInput": "9.7\n5.3",
            "sampleOutput": "Average = 6.70000"
          }
        },
        {
          "id": "jiandao-JD007",
          "code": "JD007",
          "file": "JD007.cpp",
          "title": "月底发饷",
          "language": "C++",
          "lineCount": 11,
          "source": "#include <iostream>\n#include <cstdio>\nusing namespace std;\nint main() {\n    int num, days;\n    double wage;\n    cin >> num >> days >> wage;\n    printf(\"NUMBER = %d\\n\", num);\n    printf(\"SALARY = U$ %.2f\\n\", days * wage);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6935",
            "source": "AcWing 609 | JD007 | 第1章 持剑叩门",
            "description": "月底发饷，李少白帮账房核算一名弟子的工钱。已知工号、出工天数和每日工钱。",
            "input": "第一行一个整数，表示工号。第二行两个数：出工天数（整数）和每日工钱（浮点数）。",
            "output": "第一行输出工号。第二行输出 `SALARY = U$ ` 后跟实发金额，保留两位小数。",
            "hint": "实发金额 = 出工天数 × 每日工钱。原题链接",
            "sampleInput": "25\n100 5.50",
            "sampleOutput": "NUMBER = 25\nSALARY = U$ 550.00"
          }
        },
        {
          "id": "jiandao-JD008",
          "code": "JD008",
          "file": "JD008.cpp",
          "title": "马匹脚力",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\n#include <cstdio>\nusing namespace std;\nint main() {\n    double s, l;\n    cin >> s >> l;\n    printf(\"%.3f km/l\\n\", s / l);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6936",
            "source": "AcWing 615 | JD008 | 第1章 持剑叩门",
            "description": "李少白骑马送信，跑了S公里，马匹消耗了L升草料汁。他想知道每升草料汁能支撑跑多少公里。",
            "input": "一行，两个浮点数，分别表示路程（km）和草料消耗（L）。",
            "output": "输出每升草料汁能跑的公里数，保留3位小数，后跟 km/l。",
            "hint": "消耗率 = 草料 / 路程，注意浮点数除法。原题链接",
            "sampleInput": "500 35.0",
            "sampleOutput": "14.286 km/l"
          }
        },
        {
          "id": "jiandao-JD009",
          "code": "JD009",
          "file": "JD009.cpp",
          "title": "铁球体积",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\n#include <cstdio>\nusing namespace std;\nint main() {\n    double r;\n    cin >> r;\n    printf(\"VOLUME = %.3f\\n\", (4.0 / 3.0) * 3.14159 * r * r * r);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6937",
            "source": "AcWing 612 | JD009 | 第1章 持剑叩门",
            "description": "兵器库里有一颗实心铁球。李少白量出半径r，想算出它的体积。V = (4/3)πr³，π取3.14159。",
            "input": "一个浮点数r，表示铁球的半径。",
            "output": "输出 `VOLUME = ` 后跟体积，保留3位小数。",
            "hint": "体积 = (4.0/3.0) × 3.14159 × r³，注意用浮点数除法。原题链接",
            "sampleInput": "3",
            "sampleOutput": "VOLUME = 113.097"
          }
        },
        {
          "id": "jiandao-JD010",
          "code": "JD010",
          "file": "JD010.cpp",
          "title": "三令比大",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    cout << \"Max = \" << max({a, b, c}) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6938",
            "source": "AcWing 614 | JD010 | 第1章 持剑叩门",
            "description": "梁嘉峰在墙上刻了三个数，转头说：「最大的那个，报给我。」",
            "input": "一行，三个整数A、B、C，用空格隔开。",
            "output": "输出 `Max = ` 后跟三个数中的最大值。",
            "hint": "用条件判断两两比较，或直接用max函数。原题链接",
            "sampleInput": "7 14 106",
            "sampleOutput": "Max = 106"
          }
        },
        {
          "id": "jiandao-JD011",
          "code": "JD011",
          "file": "JD011.cpp",
          "title": "哨塔测距",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <cstdio>\n#include <cmath>\nusing namespace std;\nint main() {\n    double x1, y1, x2, y2;\n    scanf(\"%lf %lf %lf %lf\", &x1, &y1, &x2, &y2);\n    printf(\"%.4f\\n\", sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1)));\n    return 0;\n}\n",
          "meta": {
            "ojId": "6939",
            "source": "AcWing 616 | JD011 | 第1章 持剑叩门",
            "description": "赵晴儿在沙盘上标了两个哨塔的坐标(x1,y1)和(x2,y2)。她说：「算算它们之间的直线距离。」",
            "input": "一行，四个浮点数x1, y1, x2, y2，用空格隔开。",
            "output": "输出两点间的距离，保留两位小数。",
            "hint": "使用距离公式，需要引入数学库以使用sqrt函数。原题链接",
            "sampleInput": "1.0 7.0 5.0 9.0",
            "sampleOutput": "4.4721"
          }
        },
        {
          "id": "jiandao-JD012",
          "code": "JD012",
          "file": "JD012.cpp",
          "title": "圆盘开孔",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    double a, b, c, pi = 3.14159;\n    scanf(\"%lf %lf %lf\", &a, &b, &c);\n    printf(\"TRIANGULO: %.3f\\n\", a * c / 2);\n    printf(\"CIRCULO: %.3f\\n\", pi * c * c);\n    printf(\"TRAPEZIO: %.3f\\n\", (a + b) * c / 2);\n    printf(\"QUADRADO: %.3f\\n\", b * b);\n    printf(\"RETANGULO: %.3f\\n\", a * b);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6940",
            "source": "AcWing 613 | JD012 | 第1章 持剑叩门",
            "description": "赵晴儿在沙盘上画了五个图形，每个图形都用A、B、C三个数来定义。她让李少白算出每个图形的面积：三角形（底A高C）、圆形（半径C）、梯形（上底A下底B高C）、正方形（边长B）、长方形（长A宽B）。π取3.14159，结果保留3位小数。",
            "input": "一行，三个浮点数A、B、C。",
            "output": "五行，分别输出 TRIANGULO（三角形）、CIRCULO（圆形）、TRAPEZIO（梯形）、QUADRADO（正方形）、RETANGULO（长方形）的面积，各保留3位小数。格式为 `名称: 面积`。",
            "hint": "注意输出格式：名称与面积之间有一个空格。π取3.14159。使用 printf(&quot;%.3f&quot;) 或 cout &lt;&lt; fixed &lt;&lt; setprecision(3) 保留3位小数。原题链接",
            "sampleInput": "3.0 4.0 5.2",
            "sampleOutput": "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000"
          }
        },
        {
          "id": "jiandao-JD013",
          "code": "JD013",
          "file": "JD013.cpp",
          "title": "水钟报时",
          "language": "C++",
          "lineCount": 8,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    cout << n / 3600 << \":\" << (n % 3600) / 60 << \":\" << n % 60 << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6941",
            "source": "AcWing 654 | JD013 | 第1章 持剑叩门",
            "description": "宗门的水钟记录的是总秒数，但掌门要求用「时:分:秒」的格式汇报。赵晴儿让李少白帮忙转换。",
            "input": "一个整数N，表示总秒数。",
            "output": "输出 `H:M:S` 格式的时间。",
            "hint": "时 = 秒 ÷ 3600，分 = 余数 ÷ 60，秒 = 最终余数。原题链接",
            "sampleInput": "556",
            "sampleOutput": "0:9:16"
          }
        },
        {
          "id": "jiandao-JD014",
          "code": "JD014",
          "file": "JD014.cpp",
          "title": "钱庄换银",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, denom[] = {100, 50, 20, 10, 5, 2, 1};\n    cin >> n;\n    cout << n << endl;\n    for (int d : denom) {\n        cout << n / d << \" nota(s) de R$ \" << d << \",00\" << endl;\n        n %= d;\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6942",
            "source": "AcWing 653 | JD014 | 第1章 持剑叩门",
            "description": "李少白去镇上钱庄换碎银。掌柜说：「你要换多少文？我用100、50、20、10、5、2、1面额的铜钱给你。」需要知道每种面额各要几枚。",
            "input": "一个整数N，表示要换的文数。",
            "output": "第一行输出总金额N。接下来7行，按面额从大到小，每行输出 `X nota(s) de R$ Y,00`，其中X是张数，Y是面额。",
            "hint": "贪心策略：从大到小依次整除，记录每种面额的枚数。原题链接",
            "sampleInput": "576",
            "sampleOutput": "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00"
          }
        },
        {
          "id": "jiandao-JD015",
          "code": "JD015",
          "file": "JD015.cpp",
          "title": "石碑之谜",
          "language": "C++",
          "lineCount": 11,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (a % b == 0 || b % a == 0)\n        cout << \"Yes\" << endl;\n    else\n        cout << \"No\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6943",
            "source": "AcWing 665 | JD015 | 第2章 歧路逢生",
            "description": "山门前有两条路，路边各立一块石碑。赵晴儿指着石碑上的两个数说：「如果其中一个数能被另一个整除，这两块碑就是一对——走左边这条路。否则走右边。」给定两个整数A和B，判断它们是否互为倍数关系（即A能被B整除，或B能被A整除）。",
            "input": "一行，两个整数A和B。",
            "output": "互为倍数输出 `Yes`，否则输出 `No`。",
            "hint": "原题链接判断 A%B==0 或 B%A==0，只要有一个成立就是倍数关系，输出Yes；否则输出No。",
            "sampleInput": "6 24",
            "sampleOutput": "Yes"
          }
        },
        {
          "id": "jiandao-JD016",
          "code": "JD016",
          "file": "JD016.cpp",
          "title": "三根木棍",
          "language": "C++",
          "lineCount": 11,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    double a, b, c;\n    scanf(\"%lf %lf %lf\", &a, &b, &c);\n    if (a + b > c && a + c > b && b + c > a)\n        printf(\"Perimeter = %.1f\\n\", a + b + c);\n    else\n        printf(\"Area = %.1f\\n\", (a + b) * c / 2);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6944",
            "source": "AcWing 664 | JD016 | 第2章 歧路逢生",
            "description": "赵晴儿从柴堆里抽出三根木棍，量了量长度，让李少白判断它们能不能拼成一个三角形。如果能，算出周长；如果不能，算出以A、B为上下底、C为高的梯形面积，公式为 (A+B)×C÷2。",
            "input": "一行，三个浮点数A、B、C。",
            "output": "能拼成三角形输出 `Perimeter = X.X`（周长），拼不成输出 `Area = X.X`（梯形面积）。",
            "hint": "原题链接三角形成立条件：任意两边之和大于第三边。如果成立，周长=A+B+C；如果不成立，梯形面积=(A+B)*C/2。注意保留1位小数。",
            "sampleInput": "6.0 4.0 2.0",
            "sampleOutput": "Area = 10.0"
          }
        },
        {
          "id": "jiandao-JD017",
          "code": "JD017",
          "file": "JD017.cpp",
          "title": "比武时辰",
          "language": "C++",
          "lineCount": 10,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (b > a) cout << b - a << endl;\n    else if (a == b) cout << 24 << endl;\n    else cout << 24 - a + b << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6945",
            "source": "AcWing 667 | JD017 | 第2章 歧路逢生",
            "description": "李少白和师弟在练武场比武。他们从A时开始，到B时结束（只看整点，不看分钟）。如果B&gt;A，比武持续了B-A小时；如果B≤A，说明比武过了零点，持续了24-A+B小时；如果A=B，说明刚好持续了一整天（24小时）。",
            "input": "一行，两个整数A和B（0≤A,B≤23）。",
            "output": "输出一个整数，表示比武持续的小时数。",
            "hint": "原题链接用条件判断：如果B&gt;A，输出B-A；如果B==A，输出24；否则输出24-A+B。",
            "sampleInput": "0 15",
            "sampleOutput": "15"
          }
        },
        {
          "id": "jiandao-JD018",
          "code": "JD018",
          "file": "JD018.cpp",
          "title": "三石排序",
          "language": "C++",
          "lineCount": 10,
          "source": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int a[3];\n    cin >> a[0] >> a[1] >> a[2];\n    sort(a, a + 3);\n    cout << a[0] << \" \" << a[1] << \" \" << a[2] << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6946",
            "source": "AcWing 663 | JD018 | 第2章 歧路逢生",
            "description": "梁嘉峰在地上放了三块石头，上面各刻着一个数。他说：「从小到大排好，报给我。」",
            "input": "一行，三个整数，用空格隔开。",
            "output": "三个数从小到大输出，空格隔开。",
            "hint": "用条件判断两两比较确定顺序，或存入数组排序。原题链接",
            "sampleInput": "7 21 -14",
            "sampleOutput": "-14 7 21"
          }
        },
        {
          "id": "jiandao-JD019",
          "code": "JD019",
          "file": "JD019.cpp",
          "title": "杂货铺",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    double prices[] = {0, 4.00, 4.50, 5.00, 2.00, 1.50};\n    int x, y;\n    scanf(\"%d %d\", &x, &y);\n    printf(\"Total: R$ %.2f\\n\", prices[x] * y);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6947",
            "source": "AcWing 660 | JD019 | 第2章 歧路逢生",
            "description": "山脚杂货铺有5种干粮，编号1到5，单价分别是4.00、4.50、5.00、2.00、1.50文。赵晴儿报了干粮编号和要买的数量，掌柜让她自己算总价。",
            "input": "一行，两个整数：干粮编号X和数量Y。",
            "output": "输出 `Total: R$ ` 后跟总价，保留两位小数。",
            "hint": "用数组或条件判断存储5种单价，查表后乘以数量。原题链接",
            "sampleInput": "3 2",
            "sampleOutput": "Total: R$ 10.00"
          }
        },
        {
          "id": "jiandao-JD020",
          "code": "JD020",
          "file": "JD020.cpp",
          "title": "内力分级",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    double x;\n    cin >> x;\n    if (x < 0 || x > 100) cout << \"Out of interval\" << endl;\n    else if (x <= 25) cout << \"Interval [0,25]\" << endl;\n    else if (x <= 50) cout << \"Interval (25,50]\" << endl;\n    else if (x <= 75) cout << \"Interval (50,75]\" << endl;\n    else cout << \"Interval (75,100]\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6948",
            "source": "AcWing 659 | JD020 | 第2章 歧路逢生",
            "description": "宗门把弟子的内力值分成四个等级：[0,25]是入门，(25,50]是初级，(50,75]是中级，(75,100]是高级。超出100则不在评级范围内。李少白测出一名弟子的内力值，需要判断他属于哪个等级。",
            "input": "一个浮点数，表示内力值。",
            "output": "输出对应区间的名称，或 `Out of interval`（超出范围）。",
            "hint": "用 if-elif-else 逐一判断落在哪个区间。原题链接",
            "sampleInput": "95.29",
            "sampleOutput": "Interval (75,100]"
          }
        },
        {
          "id": "jiandao-JD021",
          "code": "JD021",
          "file": "JD021.cpp",
          "title": "沙盘点位",
          "language": "C++",
          "lineCount": 14,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    double x, y;\n    cin >> x >> y;\n    if (x == 0 && y == 0) cout << \"Origem\" << endl;\n    else if (x == 0) cout << \"Eixo Y\" << endl;\n    else if (y == 0) cout << \"Eixo X\" << endl;\n    else if (x > 0 && y > 0) cout << \"Q1\" << endl;\n    else if (x < 0 && y > 0) cout << \"Q2\" << endl;\n    else if (x < 0 && y < 0) cout << \"Q3\" << endl;\n    else cout << \"Q4\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6949",
            "source": "AcWing 662 | JD021 | 第2章 歧路逢生",
            "description": "赵晴儿在沙盘上标了一个点P(x, y)，让李少白判断它落在第几象限，还是在坐标轴上，还是在原点。",
            "input": "一行，两个浮点数x和y。",
            "output": "输出 Q1（第一象限）、Q2（第二）、Q3（第三）、Q4（第四）、Eixo X（X轴上）、Eixo Y（Y轴上）或 Origem（原点）。",
            "hint": "先判断是否在原点或坐标轴上（x==0 或 y==0），再判断象限。原题链接",
            "sampleInput": "4.5 -2.2",
            "sampleOutput": "Q4"
          }
        },
        {
          "id": "jiandao-JD022",
          "code": "JD022",
          "file": "JD022.cpp",
          "title": "跨夜比武",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c, d;\n    cin >> a >> b >> c >> d;\n    int start = a * 60 + b;\n    int end = c * 60 + d;\n    int diff = end - start;\n    if (diff <= 0) diff += 24 * 60;\n    cout << diff / 60 << \":\" << diff % 60 << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6950",
            "source": "AcWing 668 | JD022 | 第2章 歧路逢生",
            "description": "李少白和师弟比武，开始时间是A时B分，结束时间是C时D分。比武可能跨了零点。请算出比武持续了多久。",
            "input": "一行，四个整数A、B、C、D，分别表示开始的时、分和结束的时、分。",
            "output": "输出比武持续时间，格式为 `H:M`。",
            "hint": "全部转为分钟做差。如果结果≤0，加上24×60。原题链接",
            "sampleInput": "8 56 7 37",
            "sampleOutput": "22:41"
          }
        },
        {
          "id": "jiandao-JD023",
          "code": "JD023",
          "file": "JD023.cpp",
          "title": "账房调薪",
          "language": "C++",
          "lineCount": 17,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    double s;\n    scanf(\"%lf\", &s);\n    int p;\n    if (s <= 400) p = 15;\n    else if (s <= 800) p = 12;\n    else if (s <= 1200) p = 10;\n    else if (s <= 2000) p = 7;\n    else p = 4;\n    double inc = s * p / 100;\n    printf(\"New salary: %.2f\\n\", s + inc);\n    printf(\"Increase: %.2f\\n\", inc);\n    printf(\"Percentage: %d %%\\n\", p);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6951",
            "source": "AcWing 669 | JD023 | 第2章 歧路逢生",
            "description": "宗门账房年底调薪，按原月钱所在区间确定涨幅：0~400涨15%，400.01~800涨12%，800.01~1200涨10%，1200.01~2000涨7%，2000以上涨4%。涨幅是按整个工资乘以对应百分比，不是分段累进。李少白拿到一名弟子的原月钱，请算出新月钱、涨了多少和涨幅百分比。",
            "input": "一个浮点数，表示原月钱。",
            "output": "三行：新月钱、涨了多少、涨幅百分比（整数带%号），金额保留两位小数。",
            "hint": "用 if-elif 判断原月钱落在哪个区间，确定涨幅百分比p。涨额 = 原月钱 × p/100，新月钱 = 原月钱 + 涨额。注意400属于0~400区间（涨15%），400.01才属于400~800区间。原题链接",
            "sampleInput": "400.00",
            "sampleOutput": "New salary: 460.00\nIncrease: 60.00\nPercentage: 15 %"
          }
        },
        {
          "id": "jiandao-JD024",
          "code": "JD024",
          "file": "JD024.cpp",
          "title": "五关考验",
          "language": "C++",
          "lineCount": 11,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c, d;\n    cin >> a >> b >> c >> d;\n    if (b > a && d > a && c + d > a + b && c > 0 && a % 2 == 0)\n        cout << \"Accepted\" << endl;\n    else\n        cout << \"Not accepted\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6952",
            "source": "AcWing 657 | JD024 | 第2章 歧路逢生",
            "description": "梁嘉峰考李少白：「给你四个数A、B、C、D，同时满足以下五个条件才算过关：B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。」",
            "input": "一行，四个整数A、B、C、D。",
            "output": "满足所有条件输出 `Accepted`，否则输出 `Not accepted`。",
            "hint": "用逻辑与（&&/and）连接五个条件，全部为真才通过。原题链接",
            "sampleInput": "-87 14 68 33",
            "sampleOutput": "Not accepted"
          }
        },
        {
          "id": "jiandao-JD025",
          "code": "JD025",
          "file": "JD025.cpp",
          "title": "信鸽传信",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int d;\n    cin >> d;\n    if (d == 61) cout << \"Brasilia\" << endl;\n    else if (d == 71) cout << \"Salvador\" << endl;\n    else if (d == 11) cout << \"Sao Paulo\" << endl;\n    else if (d == 21) cout << \"Rio de Janeiro\" << endl;\n    else if (d == 32) cout << \"Juiz de Fora\" << endl;\n    else if (d == 19) cout << \"Campinas\" << endl;\n    else if (d == 27) cout << \"Vitoria\" << endl;\n    else if (d == 31) cout << \"Belo Horizonte\" << endl;\n    else cout << \"DDD nao cadastrado\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6953",
            "source": "AcWing 671 | JD025 | 第2章 歧路逢生",
            "description": "宗门各分舵之间用信鸽传信，每个分舵有一个编号（DDD码）。李少白拿到一个编号，需要查出它对应哪个分舵：61=Brasilia，71=Salvador，11=Sao Paulo，21=Rio de Janeiro，32=Juiz de Fora，19=Campinas，27=Vitoria，31=Belo Horizonte，其他编号则输出&quot;DDD nao cadastrado&quot;。",
            "input": "一个整数。",
            "output": "输出对应分舵名称，或 `DDD nao cadastrado`。",
            "hint": "用 if-elif 链逐一比对，或用字典/映射表查找。原题链接",
            "sampleInput": "11",
            "sampleOutput": "Sao Paulo"
          }
        },
        {
          "id": "jiandao-JD026",
          "code": "JD026",
          "file": "JD026.cpp",
          "title": "木棍辨形",
          "language": "C++",
          "lineCount": 17,
          "source": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nint main() {\n    double s[3];\n    scanf(\"%lf %lf %lf\", &s[0], &s[1], &s[2]);\n    sort(s, s + 3);\n    double a = s[0], b = s[1], c = s[2];\n    if (a + b <= c) { puts(\"Not a triangle\"); return 0; }\n    double a2 = a*a, b2 = b*b, c2 = c*c;\n    if (c2 == a2 + b2) puts(\"Right\");\n    else if (c2 < a2 + b2) puts(\"Acute\");\n    else puts(\"Obtuse\");\n    if (a == b && b == c) puts(\"Equilateral\");\n    else if (a == b || b == c) puts(\"Isosceles\");\n    return 0;\n}\n",
          "meta": {
            "ojId": "6954",
            "source": "AcWing 666 | JD026 | 第2章 歧路逢生",
            "description": "梁嘉峰递来三根木棍：「先判断能不能拼成三角形。能的话，再判断是直角、锐角还是钝角三角形，以及是否等边或等腰。」判断依据：最长边的平方与另外两边平方和的关系。",
            "input": "一行，三个浮点数，表示三边长度。",
            "output": "不能构成三角形输出 Not a triangle；能构成则按以下规则输出（每种满足的条件输出一行）：先判断角度类型：输出 Right（直角）、Acute（锐角）或 Obtuse（钝角）之一。再判断边长类型：若三边相等输出 Equilateral（等边），若恰好两边相等输出 Isosceles（等腰），否则不输出。注意：一个三角形可能同时属于多个类型，同一类型的判断用 if 而不是 elif 才能多行输出。",
            "hint": "先验证两边之和大于第三边。若不能构成三角形则直接输出 Not a triangle 并结束。能构成三角形时，角度类型和边长类型分别用独立的 if 判断（不要用 elif 串起来），以确保等边/等腰三角形能输出两行。边长已从小到大排列，第三个数即最长边。原题链接",
            "sampleInput": "5.0 5.0 5.0",
            "sampleOutput": "Acute\nEquilateral"
          }
        },
        {
          "id": "jiandao-JD027",
          "code": "JD027",
          "file": "JD027.cpp",
          "title": "怪兽辨识",
          "language": "C++",
          "lineCount": 24,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    string a, b, c;\n    cin >> a >> b >> c;\n    if (a == \"vertebrate\") {\n        if (b == \"bird\") {\n            if (c == \"carnivore\") cout << \"eagle\" << endl;\n            else cout << \"dove\" << endl;\n        } else {\n            if (c == \"omnivore\") cout << \"man\" << endl;\n            else cout << \"cow\" << endl;\n        }\n    } else {\n        if (b == \"insect\") {\n            if (c == \"hematophagous\") cout << \"flea\" << endl;\n            else cout << \"caterpillar\" << endl;\n        } else {\n            if (c == \"hematophagous\") cout << \"leech\" << endl;\n            else cout << \"earthworm\" << endl;\n        }\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6955",
            "source": "AcWing 670 | JD027 | 第2章 歧路逢生",
            "description": "迷踪林外遇到一只怪兽。赵晴儿观察了三层特征来判断它的种类：第一层：有脊椎（vertebrate）还是无脊椎（invertebrate）；第二层：鸟类（bird）、哺乳类（mammal）、昆虫（insect）还是环节动物（annelid）；第三层：食性——食肉（carnivore）、食草（herbivore）、杂食（omnivore）、吸血（hematophagous）。以下是怪兽分类图谱：Level 1         Level 2        Level 3           Animal\n---------------------------------------------------------\n                +-- bird ------ carnivore ------- eagle（鹰）\n                |             +-- herbivore ------ dove（鸽）\nvertebrate -----+\n                |             +-- omnivore ------- man（人）\n                +-- mammal ----+\n                              +-- herbivore ------ cow（牛）\n\n                +-- insect ---- hematophagous ---- flea（跳蚤）\n                |             +-- herbivore ------ caterpillar（毛虫）\ninvertebrate ---+\n                |             +-- hematophagous ---- leech（水蛭）\n                +-- annelid --+\n                              +-- omnivore ------- earthworm（蚯蚓）\n根据输入的三层特征单词，输出对应的动物英文名称。",
            "input": "三行，每行一个字符串，分别表示三层分类特征。",
            "output": "输出对应的动物名称。",
            "hint": "三层嵌套 if-else：先判断第一层，再判断第二层，最后判断第三层。原题链接",
            "sampleInput": "vertebrate\nbird\ncarnivore",
            "sampleOutput": "eagle"
          }
        },
        {
          "id": "jiandao-JD028",
          "code": "JD028",
          "file": "JD028.cpp",
          "title": "田赋计算",
          "language": "C++",
          "lineCount": 15,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    double s;\n    scanf(\"%lf\", &s);\n    if (s <= 2000) puts(\"Isento\");\n    else {\n        double tax = 0;\n        if (s > 4500) { tax += (s - 4500) * 0.28; s = 4500; }\n        if (s > 3000) { tax += (s - 3000) * 0.18; s = 3000; }\n        if (s > 2000) { tax += (s - 2000) * 0.08; }\n        printf(\"R$ %.2f\\n\", tax);\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6956",
            "source": "AcWing 672 | JD028 | 第2章 歧路逢生",
            "description": "李少白入了宗门，开始交田赋。税率分档：2000以下免税，2000.01~3000部分征8%，3000.01~4500部分征18%，4500以上部分征28%。注意是分段计税——只有超出部分按对应税率算。",
            "input": "一个浮点数，表示月收入。",
            "output": "输出 `R$ X.XX`。免税则输出 `Isento`。",
            "hint": "分段计算：1000×8% + 2×18% = 80.36。每段只对超出部分征税。原题链接",
            "sampleInput": "3002.00",
            "sampleOutput": "R$ 80.36"
          }
        },
        {
          "id": "jiandao-JD029",
          "code": "JD029",
          "file": "JD029.cpp",
          "title": "石砖偶数",
          "language": "C++",
          "lineCount": 7,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 2; i <= 100; i += 2)\n        cout << i << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6957",
            "source": "AcWing ??? | JD029 | 第3章 千回百转",
            "description": "千层塔第一层。墙上刻着一排编号从1到100的石砖。赵晴儿说：「把所有偶数编号的石砖挑出来，每行报一个。」",
            "input": "无输入。",
            "output": "输出全部偶数，每个偶数占一行。",
            "hint": "原题链接for循环从2开始，步长为2，到100结束。",
            "sampleInput": "No input",
            "sampleOutput": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100"
          }
        },
        {
          "id": "jiandao-JD030",
          "code": "JD030",
          "file": "JD030.cpp",
          "title": "奇数石砖",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int x;\n    cin >> x;\n    for (int i = 1; i <= x; i += 2)\n        cout << i << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6958",
            "source": "AcWing ??? | JD030 | 第3章 千回百转",
            "description": "千层塔第二层。墙上有一排编号从1到X的石砖。梁嘉峰指着石砖说：「把所有奇数编号的报出来。」",
            "input": "一个正整数X。",
            "output": "每行一个奇数，从1到X（含）。",
            "hint": "原题链接for循环从1开始，步长为2，到X结束。如果X是偶数，最后一个奇数是X-1。",
            "sampleInput": "8",
            "sampleOutput": "1\n3\n5\n7"
          }
        },
        {
          "id": "jiandao-JD031",
          "code": "JD031",
          "file": "JD031.cpp",
          "title": "反复之门",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int x;\n    bool first = true;\n    while (cin >> x && x != 0) {\n        if (!first) cout << endl;\n        first = false;\n        for (int i = 1; i <= x; i++) {\n            if (i > 1) cout << \" \";\n            cout << i;\n        }\n    }\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6959",
            "source": "AcWing ??? | JD031 | 第3章 千回百转",
            "description": "千层塔的某一层有一扇不断重复的门。每次门前出现一个数X：如果X不为0，就从1数到X；如果X为0，修炼结束。",
            "input": "若干行，每行一个整数X。以0结束。",
            "output": "对每个非零的X，输出1到X，每行一个数。每组之间空一行。",
            "hint": "原题链接外层while循环读入X，遇到0停止。内层for循环从1到X输出。",
            "sampleInput": "5\n10\n3\n0",
            "sampleOutput": "1 2 3 4 5\n1 2 3 4 5 6 7 8 9 10\n1 2 3"
          }
        },
        {
          "id": "jiandao-JD032",
          "code": "JD032",
          "file": "JD032.cpp",
          "title": "六奇连珠",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int x;\n    cin >> x;\n    if (x % 2 == 0) x++;\n    else x += 2;\n    for (int i = 0; i < 6; i++) {\n        cout << x << endl;\n        x += 2;\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6960",
            "source": "AcWing ??? | JD032 | 第3章 千回百转",
            "description": "梁嘉峰递给李少白一个数X：「从X之后开始，找出6个连续的奇数，一个一个报给我。」",
            "input": "一个整数X。",
            "output": "从X之后开始的6个连续奇数，每行一个。",
            "hint": "原题链接如果X是奇数，从X+2开始；如果X是偶数，从X+1开始。循环6次，每次加2。",
            "sampleInput": "8",
            "sampleOutput": "9\n11\n13\n15\n17\n19"
          }
        },
        {
          "id": "jiandao-JD033",
          "code": "JD033",
          "file": "JD033.cpp",
          "title": "正数清点",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int cnt = 0;\n    for (int i = 0; i < 6; i++) {\n        double x;\n        cin >> x;\n        if (x > 0) cnt++;\n    }\n    cout << cnt << \" positive numbers\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6961",
            "source": "AcWing ??? | JD033 | 第3章 千回百转",
            "description": "赵晴儿递给李少白6个测量数据，有的是正数有的是负数。她问：「这里面有几个正数？」",
            "input": "6行，每行一个浮点数。",
            "output": "输出正数的个数，格式为 `X valores positivos`。",
            "hint": "原题链接循环读入6个数，用if判断是否&gt;0，计数器累加。",
            "sampleInput": "7\n-5\n6\n-3.4\n4.6\n12",
            "sampleOutput": "4 positive numbers"
          }
        },
        {
          "id": "jiandao-JD034",
          "code": "JD034",
          "file": "JD034.cpp",
          "title": "余数寻踪",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= 10000; i++)\n        if (i % n == 2) cout << i << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6962",
            "source": "AcWing ??? | JD034 | 第3章 千回百转",
            "description": "梁嘉峰写下了一个数N：「从1到10000，把所有除以N余数为2的数报给我。」",
            "input": "一个整数N（N&gt;2）。",
            "output": "每行一个数，从1到10000中除以N余2的数。",
            "hint": "原题链接for循环从1到10000，if i%N==2则输出。",
            "sampleInput": "13",
            "sampleOutput": "2\n15\n28\n41\n54\n..."
          }
        },
        {
          "id": "jiandao-JD035",
          "code": "JD035",
          "file": "JD035.cpp",
          "title": "区间计数",
          "language": "C++",
          "lineCount": 14,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, x, in = 0, out = 0;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cin >> x;\n        if (x >= 10 && x <= 20) in++;\n        else out++;\n    }\n    cout << in << \" in\" << endl;\n    cout << out << \" out\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6963",
            "source": "AcWing ??? | JD035 | 第3章 千回百转",
            "description": "赵晴儿递给李少白N个测量数据，让他数一数有多少个落在[10,20]这个区间内。",
            "input": "第一行一个整数N。第二行N个整数。",
            "output": "第一行输出 X in，X为区间内个数。第二行输出 Y out，Y为区间外个数。",
            "hint": "原题链接循环读入，判断是否 10≤X≤20，计数器累加。",
            "sampleInput": "5\n5 12 18 25 10",
            "sampleOutput": "3 in\n2 out"
          }
        },
        {
          "id": "jiandao-JD036",
          "code": "JD036",
          "file": "JD036.cpp",
          "title": "奇数求和",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int x, y;\n    cin >> x >> y;\n    if (x > y) swap(x, y);\n    int sum = 0;\n    for (int i = x + 1; i < y; i++)\n        if (i % 2 != 0) sum += i;\n    cout << sum << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6964",
            "source": "AcWing ??? | JD036 | 第3章 千回百转",
            "description": "梁嘉峰在墙上刻了两个数X和Y，让李少白算出X和Y之间（不含X和Y）所有奇数的和。",
            "input": "一行，两个整数X和Y（X",
            "output": "输出X和Y之间所有奇数的和。",
            "hint": "原题链接从X+1到Y-1循环，判断每个数是否为奇数，是则累加。",
            "sampleInput": "6 -5",
            "sampleOutput": "5"
          }
        },
        {
          "id": "jiandao-JD037",
          "code": "JD037",
          "file": "JD037.cpp",
          "title": "数链连珠",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, n;\n    cin >> a;\n    while (cin >> n && n <= 0);\n    int sum = 0;\n    for (int i = 0; i < n; i++)\n        sum += a + i;\n    cout << sum << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6965",
            "source": "AcWing ??? | JD037 | 第3章 千回百转",
            "description": "梁嘉峰写下了一个起始整数A，又在第二行写了一串数。第二行里第一个正数就是N。请算出从A开始的N个连续整数的和。",
            "input": "第一行：整数A。第二行：若干整数，第一个大于0的数才是N。",
            "output": "从A开始N个连续整数之和。",
            "hint": "原题链接A固定，第二行跳过负数和零找N。从A开始循环N次累加。",
            "sampleInput": "3\n-5 0 -3 4 -1",
            "sampleOutput": "18"
          }
        },
        {
          "id": "jiandao-JD038",
          "code": "JD038",
          "file": "JD038.cpp",
          "title": "石中之王",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, x, mx, pos = 1;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        cin >> x;\n        if (i == 1 || x > mx) { mx = x; pos = i; }\n    }\n    cout << mx << endl << pos << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6966",
            "source": "AcWing ??? | JD038 | 第3章 千回百转",
            "description": "练功场上摆了一排石块，每块上面刻着一个数。赵晴儿让李少白找到最大的数，并说出它是第几块（从1开始计数）。",
            "input": "第一行一个整数N，表示石块数量。第二行N个整数。",
            "output": "输出最大值和它的位置，格式见样例。",
            "hint": "原题链接遍历时同时记录最大值和位置。",
            "sampleInput": "5\n3 2 5 1 4",
            "sampleOutput": "5\n3"
          }
        },
        {
          "id": "jiandao-JD039",
          "code": "JD039",
          "file": "JD039.cpp",
          "title": "约数寻踪",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++)\n        if (n % i == 0) cout << i << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6967",
            "source": "AcWing ??? | JD039 | 第3章 千回百转",
            "description": "赵晴儿在沙盘上写下一个数N：「找出它的所有约数，从小到大列出来。」",
            "input": "一个正整数N。",
            "output": "每行一个约数，从小到大。",
            "hint": "原题链接从1到N循环，如果N%i==0则i是约数。",
            "sampleInput": "6",
            "sampleOutput": "1\n2\n3\n6"
          }
        },
        {
          "id": "jiandao-JD040",
          "code": "JD040",
          "file": "JD040.cpp",
          "title": "九九归真",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, i;\n    cin >> n;\n    for (i = 1; i <= 10; i++)\n        cout << i << \" x \" << n << \" = \" << i * n << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6968",
            "source": "AcWing ??? | JD040 | 第3章 千回百转",
            "description": "赵晴儿教李少白背乘法口诀。她写下一个数N，让李少白从1乘到10，按格式列出N的乘法表：「i x N = i*N」。",
            "input": "一个整数N。",
            "output": "10行，格式为 `i x N = i*N`。",
            "hint": "原题链接for循环从1到10，每次输出i x N = i*N。",
            "sampleInput": "140",
            "sampleOutput": "1 x 140 = 140\n2 x 140 = 280\n3 x 140 = 420\n4 x 140 = 560\n5 x 140 = 700\n6 x 140 = 840\n7 x 140 = 980\n8 x 140 = 1120\n9 x 140 = 1260\n10 x 140 = 1400"
          }
        },
        {
          "id": "jiandao-JD041",
          "code": "JD041",
          "file": "JD041.cpp",
          "title": "千层阵列",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nint main() {\n    int n, m;\n    scanf(\"%d %d\", &n, &m);\n    int x = 1;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < m; j++) {\n            if (j == m - 1) printf(\"SWORD\");\n            else printf(\"%d\", x);\n            if (j < m - 1) printf(\" \");\n            x++;\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6969",
            "source": "AcWing ??? | JD041 | 第3章 千回百转",
            "description": "千层塔的一面墙上刻着N行M列的数字阵列，每行从1开始递增，但每逢第M个位置不写数字，写SWORD。赵晴儿让李少白按这个规律把整个阵列报出来。",
            "input": "一行，两个整数N和M。",
            "output": "N行，每行M个值，最后一个用SWORD代替，值之间用空格隔开。",
            "hint": "原题链接嵌套循环，外层控制行，内层控制列。每行第M个位置输出SWORD。",
            "sampleInput": "7 4",
            "sampleOutput": "1 2 3 SWORD\n5 6 7 SWORD\n9 10 11 SWORD\n13 14 15 SWORD\n17 18 19 SWORD\n21 22 23 SWORD\n25 26 27 SWORD"
          }
        },
        {
          "id": "jiandao-JD042",
          "code": "JD042",
          "file": "JD042.cpp",
          "title": "兵刃统计",
          "language": "C++",
          "lineCount": 22,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    int n, swords = 0, blades = 0, spears = 0, total = 0;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int cnt; char type;\n        scanf(\"%d %c\", &cnt, &type);\n        total += cnt;\n        if (type == 'C') swords += cnt;\n        else if (type == 'R') blades += cnt;\n        else if (type == 'F') spears += cnt;\n    }\n    printf(\"Total: %d weapons\\n\", total);\n    printf(\"Total swords: %d\\n\", swords);\n    printf(\"Total blades: %d\\n\", blades);\n    printf(\"Total spears: %d\\n\", spears);\n    printf(\"Percentage of swords: %.2f %%\\n\", 100.0 * swords / total);\n    printf(\"Percentage of blades: %.2f %%\\n\", 100.0 * blades / total);\n    printf(\"Percentage of spears: %.2f %%\\n\", 100.0 * spears / total);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6970",
            "source": "AcWing ??? | JD042 | 第3章 千回百转",
            "description": "演武场上，弟子们正在操练。李少白走过一排兵器架，记录了N次观察：每次看到一件兵器，C代表剑，R代表刀，F代表枪。赵晴儿让他统计每种兵器出现了多少把，以及各自的占比。",
            "input": "第一行一个整数N。接下来N行，每行一个整数（数量）和一个字符（C/R/F），分别表示某次看到的兵器数量和类型。",
            "output": "第一行输出 Total: X weapons（总数量）。接下来三行输出每种兵器的总数：Total swords: X、Total blades: X、Total spears: X。最后三行输出各自占比：Percentage of swords: XX.XX % 等，保留两位小数。",
            "hint": "原题链接三个计数器分别累加C、R、F的数量。注意每行先读数量再读类型。总数 = 所有数量之和。占比 = 各类数量 / 总数 × 100%，保留两位小数。",
            "sampleInput": "11\n1 F\n5 C\n4 C\n12 C\n11 F\n15 F\n2 F\n7 C\n1 C\n4 C\n9 F",
            "sampleOutput": "Total: 71 weapons\nTotal swords: 33\nTotal blades: 0\nTotal spears: 38\nPercentage of swords: 46.48 %\nPercentage of blades: 0.00 %\nPercentage of spears: 53.52 %"
          }
        },
        {
          "id": "jiandao-JD043",
          "code": "JD043",
          "file": "JD043.cpp",
          "title": "正剑除邪",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    int x[10];\n    for (int i = 0; i < 10; i++) {\n        scanf(\"%d\", &x[i]);\n        if (x[i] <= 0) x[i] = 1;\n    }\n    for (int i = 0; i < 10; i++)\n        printf(\"X[%d] = %d\\n\", i, x[i]);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6971",
            "source": "JD | JD043 | 第4章 排兵布阵",
            "description": "练功房的石板上有10道剑气留下的痕迹，每道痕迹上刻着一个数。其中有些数带着邪气（负数或零），梁嘉峰让李少白运起纯阳内力，把这些不纯正的数全部净化，替换成1——象征正气归于一元。",
            "input": "一行，10个整数，用空格隔开。",
            "output": "替换后的10个数，每行格式为 `X[i] = 值`。",
            "hint": "原题链接遍历数组，将≤0的元素替换为1。",
            "sampleInput": "-73\n27\n-35\n50\n-67\n86\n39\n-81\n-7\n31",
            "sampleOutput": "X[0] = 1\nX[1] = 27\nX[2] = 1\nX[3] = 50\nX[4] = 1\nX[5] = 86\nX[6] = 39\nX[7] = 1\nX[8] = 1\nX[9] = 31"
          }
        },
        {
          "id": "jiandao-JD044",
          "code": "JD044",
          "file": "JD044.cpp",
          "title": "翻倍剑阵",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    int n[10], v;\n    scanf(\"%d\", &v);\n    n[0] = v;\n    for (int i = 1; i < 10; i++)\n        n[i] = n[i-1] * 2;\n    for (int i = 0; i < 10; i++)\n        printf(\"N[%d] = %d\\n\", i, n[i]);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6972",
            "source": "JD | JD044 | 第4章 排兵布阵",
            "description": "赵晴儿在沙盘上布下一个翻倍剑阵。她说：「以第一个数为起点，后面每个数都是前一个的两倍。内力如此，出剑亦是如此——一重更比一重强。」",
            "input": "一个整数V。",
            "output": "10行，格式为 `N[i] = X`。",
            "hint": "原题链接N[0]=V，循环N[i]=N[i-1]*2。",
            "sampleInput": "6",
            "sampleOutput": "N[0] = 6\nN[1] = 12\nN[2] = 24\nN[3] = 48\nN[4] = 96\nN[5] = 192\nN[6] = 384\nN[7] = 768\nN[8] = 1536\nN[9] = 3072"
          }
        },
        {
          "id": "jiandao-JD045",
          "code": "JD045",
          "file": "JD045.cpp",
          "title": "剑中取精",
          "language": "C++",
          "lineCount": 11,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    double a[100];\n    for (int i = 0; i < 100; i++)\n        scanf(\"%lf\", &a[i]);\n    for (int i = 0; i < 100; i++)\n        if (a[i] <= 10)\n            printf(\"A[%d] = %.1f\\n\", i, a[i]);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6973",
            "source": "JD | JD045 | 第4章 排兵布阵",
            "description": "沙盘上散落着100把长剑，每把剑上刻着一个数，代表剑的品级。赵晴儿让李少白从中挑出品级不超过10的精良之剑，逐一记录。",
            "input": "100个浮点数。",
            "output": "按顺序输出所有≤10的元素，每行格式为 `A[i] = X`（保留一位小数）。",
            "hint": "原题链接遍历数组，if元素≤10则输出。",
            "sampleInput": "79.5\n-35.1\n65.0\n-89.9\n62.2\n-30.0\n-58.1\n-74.0\n85.7\n66.4\n-60.2\n-32.1\n11.4\n34.6\n0.2\n96.3\n-67.9\n70.1\n27.3\n53.4\n63.8\n43.2\n-68.2\n-87.9\n-13.3\n62.1\n-12.0\n66.9\n1.6\n-70.3\n-14.0\n-84.8\n19.6\n-1.9\n43.4\n36.9\n97.2\n-88.6\n52.2\n-21.0\n-54.1\n-17.3\n-11.7\n-8.5\n40.9\n-21.6\n-12.0\n87.8\n-92.9\n45.3\n-70.1\n73.7\n-23.2\n87.3\n-78.6\n38.2\n51.2\n-21.0\n3.9\n88.4\n28.3\n-67.6\n47.1\n-49.1\n73.6\n39.5\n28.0\n-80.1\n-41.4\n43.2\n-4.6\n61.1\n83.2\n65.5\n74.3\n90.1\n-80.2\n39.6\n-7.0\n-34.4\n43.1\n-62.5\n-25.3\n61.0\n68.5\n9.0\n10.3\n45.9\n-98.0\n-34.8\n88.3\n-26.6\n-48.1\n20.5\n-5.4\n-76.7\n79.7\n-90.0\n59.1\n-18.7",
            "sampleOutput": "A[1] = -35.1\nA[3] = -89.9\nA[5] = -30.0\nA[6] = -58.1\nA[7] = -74.0\nA[10] = -60.2\nA[11] = -32.1\nA[14] = 0.2\nA[16] = -67.9\nA[22] = -68.2\nA[23] = -87.9\nA[24] = -13.3\nA[26] = -12.0\nA[28] = 1.6\nA[29] = -70.3\nA[30] = -14.0\nA[31] = -84.8\nA[33] = -1.9\nA[37] = -88.6\nA[39] = -21.0\nA[40] = -54.1\nA[41] = -17.3\nA[42] = -11.7\nA[43] = -8.5\nA[45] = -21.6\nA[46] = -12.0\nA[48] = -92.9\nA[50] = -70.1\nA[52] = -23.2\nA[54] = -78.6\nA[57] = -21.0\nA[58] = 3.9\nA[61] = -67.6\nA[63] = -49.1\nA[67] = -80.1\nA[68] = -41.4\nA[70] = -4.6\nA[76] = -80.2\nA[78] = -7.0\nA[79] = -34.4\nA[81] = -62.5\nA[82] = -25.3\nA[85] = 9.0\nA[88] = -98.0\nA[89] = -34.8\nA[91] = -26.6\nA[92] = -48.1\nA[94] = -5.4\nA[95] = -76.7\nA[97] = -90.0\nA[99] = -18.7"
          }
        },
        {
          "id": "jiandao-JD046",
          "code": "JD046",
          "file": "JD046.cpp",
          "title": "剑阵倒转",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n[20];\n    for (int i = 0; i < 20; i++)\n        scanf(\"%d\", &n[i]);\n    for (int i = 0; i < 10; i++)\n        swap(n[i], n[19 - i]);\n    for (int i = 0; i < 20; i++)\n        printf(\"N[%d] = %d\\n\", i, n[i]);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6974",
            "source": "JD | JD046 | 第4章 排兵布阵",
            "description": "沙盘上的剑阵需要倒转方向——第一把剑和最后一把交换，第二把和倒数第二把交换。梁嘉峰说：「攻守易位，前后颠倒。」",
            "input": "20个整数。",
            "output": "翻转后的20个数，每行格式为 `N[i] = X`。",
            "hint": "原题链接双指针从两端向中间交换。",
            "sampleInput": "-40\n57\n99\n2\n-20\n25\n-67\n-76\n70\n98\n-95\n-92\n-100\n-100\n-55\n48\n-55\n54\n1\n-32",
            "sampleOutput": "N[0] = -32\nN[1] = 1\nN[2] = 54\nN[3] = -55\nN[4] = 48\nN[5] = -55\nN[6] = -100\nN[7] = -100\nN[8] = -92\nN[9] = -95\nN[10] = 98\nN[11] = 70\nN[12] = -76\nN[13] = -67\nN[14] = 25\nN[15] = -20\nN[16] = 2\nN[17] = 99\nN[18] = 57\nN[19] = -40"
          }
        },
        {
          "id": "jiandao-JD047",
          "code": "JD047",
          "file": "JD047.cpp",
          "title": "剑锋所指",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    int n, x, mn, pos = 0;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &x);\n        if (i == 0 || x < mn) { mn = x; pos = i; }\n    }\n    printf(\"Menor valor: %d\\nPosicao: %d\\n\", mn, pos);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6975",
            "source": "JD | JD047 | 第4章 排兵布阵",
            "description": "练功场上一排木桩，每根木桩上刻着一个数。赵晴儿让他找到最矮的那根木桩——剑锋所向，以弱制动。找到最小值并说出它的位置（从0开始计数）。",
            "input": "第一行一个整数N。第二行N个整数。",
            "output": "第一行输出 Menor valor: X，第二行输出 Posicao: P，其中P为最小值的下标（从0开始计数）。若最小值出现多次，输出第一次出现的位置。",
            "hint": "原题链接遍历时记录当前最小值和位置。注意位置从0开始计数。",
            "sampleInput": "10\n1 2 3 4 -5 6 7 8 9 10",
            "sampleOutput": "Menor valor: -5\nPosicao: 4"
          }
        },
        {
          "id": "jiandao-JD048",
          "code": "JD048",
          "file": "JD048.cpp",
          "title": "二气相生",
          "language": "C++",
          "lineCount": 14,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    long long a = 0, b = 1;\n    if (n == 0) { cout << 0 << endl; return 0; }\n    for (int i = 2; i <= n; i++) {\n        long long t = a + b;\n        a = b; b = t;\n    }\n    cout << b << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6976",
            "source": "JD | JD048 | 第4章 排兵布阵",
            "description": "赵晴儿在沙盘上画出两道气旋：「阴阳二气，交替相生。第一气为0，第二气为1，此后每气皆为前二气之和。只用两个变量，算出第N气。」其中F(0)=0，F(1)=1，F(N)=F(N-1)+F(N-2)。",
            "input": "一个整数N。",
            "output": "一个整数，即第N个斐波那契数F(N)。",
            "hint": "原题链接两个变量滚动：a,b = b,a+b。",
            "sampleInput": "4",
            "sampleOutput": "3"
          }
        },
        {
          "id": "jiandao-JD049",
          "code": "JD049",
          "file": "JD049.cpp",
          "title": "斐波剑诀",
          "language": "C++",
          "lineCount": 15,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    long long a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << \" \";\n        cout << a;\n        long long t = a + b;\n        a = b; b = t;\n    }\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6977",
            "source": "JD | JD049 | 第4章 排兵布阵",
            "description": "赵晴儿展开一卷古剑谱，上面记载着斐波那契剑诀：0, 1, 1, 2, 3, 5, 8, 13……「每一式都是前两式的融合。T次问询，每次报出第N式。」",
            "input": "一个整数N。",
            "output": "一行，前N个斐波那契数，空格隔开。",
            "hint": "原题链接预处理斐波那契数组到60，查询时直接取值。",
            "sampleInput": "5",
            "sampleOutput": "0 1 1 2 3"
          }
        },
        {
          "id": "jiandao-JD050",
          "code": "JD050",
          "file": "JD050.cpp",
          "title": "列阵求和",
          "language": "C++",
          "lineCount": 17,
          "source": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int m, n;\n    while (cin >> m >> n) {\n        if (m <= 0 || n <= 0) break;\n        if (m > n) swap(m, n);\n        int sum = 0;\n        for (int i = m; i <= n; i++) {\n            cout << i << \" \";\n            sum += i;\n        }\n        cout << \"Sum=\" << sum << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6978",
            "source": "JD | JD050 | 第4章 排兵布阵",
            "description": "梁嘉峰在沙盘上画了一个数字阵列：「从M到N，全部列出来，再算和。如果M比N大，先交换。」李少白从M一路数到N，把每个数刻在石板上。",
            "input": "若干行，每行两个整数M和N。当M和N均为非正数（≤0）时结束输入。",
            "output": "对每组M和N，从小到大输出M到N之间的所有整数（空格隔开），最后输出 Sum=X（X为这些数的和）。每组输出占一行。",
            "hint": "原题链接若M&gt;N则先交换。注意：结束条件为两个数均≤0（测试用例可能用0 0或-1 -1）。",
            "sampleInput": "5 10\n2 3\n-1 -1",
            "sampleOutput": "5 6 7 8 9 10 Sum=45\n2 3 Sum=5"
          }
        },
        {
          "id": "jiandao-JD051",
          "code": "JD051",
          "file": "JD051.cpp",
          "title": "剑行取道",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    int l; char op;\n    double a[12][12];\n    scanf(\"%d %c\", &l, &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0;\n    for (int j = 0; j < 12; j++)\n        sum += a[l][j];\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / 12);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6979",
            "source": "JD | JD051 | 第4章 排兵布阵",
            "description": "沙盘上一个12×12的剑阵，赵晴儿指着其中一行：「这一行的所有剑，力量之和是多少？或平均力量？」李少白逐格检视。",
            "input": "第一行一个整数L（0~11，表示行号）。第二行一个字符（S或M）。接下来12行，每行12个浮点数。",
            "output": "输出该行的和或平均值，保留一位小数。",
            "hint": "原题链接遍历指定行，根据操作类型求和或求平均。",
            "sampleInput": "1\nM\n94.2 65.35 7.41 -67.85 18.62 -72.49 -5.91 66.06 -20.35 -17.4 12.62 -63.04\n...",
            "sampleOutput": "17.3"
          }
        },
        {
          "id": "jiandao-JD052",
          "code": "JD052",
          "file": "JD052.cpp",
          "title": "剑列纵横",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    int c; char op;\n    double a[12][12];\n    scanf(\"%d %c\", &c, &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0;\n    for (int i = 0; i < 12; i++)\n        sum += a[i][c];\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / 12);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6980",
            "source": "JD | JD052 | 第4章 排兵布阵",
            "description": "赵晴儿又指向剑阵的其中一列：「纵览此列，算其力量。」李少白沿着列的方向逐行检视。",
            "input": "第一行一个整数C（0~11，表示列号）。第二行一个字符（S或M）。接下来12行，每行12个浮点数。",
            "output": "输出该列的和或平均值，保留一位小数。",
            "hint": "原题链接遍历所有行取指定列元素。",
            "sampleInput": "1\nS\n-29.7 94.5 43.8 3.7 68.1 19.9 23.4 -0.3 -85.3 57.3 89.7 36.0\n...",
            "sampleOutput": "199.5"
          }
        },
        {
          "id": "jiandao-JD053",
          "code": "JD053",
          "file": "JD053.cpp",
          "title": "完璧归宗",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <cstdio>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    int p[] = {6, 28, 496, 8128};\n    for (int i = 0; i < 4; i++)\n        if (p[i] <= n) printf(\"%d\\n\", p[i]);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6981",
            "source": "JD | JD053 | 第4章 排兵布阵",
            "description": "赵晴儿在沙盘上写下「完璧」二字：「完璧之数，等于它的所有真因子之和。譬如6=1+2+3。找到不超过N的所有完璧之数，以印证归宗之意。」",
            "input": "一个整数N。",
            "output": "每行输出一个不超过N的完全数（从小到大）。",
            "hint": "原题链接对每个数找所有真因子求和，等于自身则是完全数。注意优化：枚举因子只需到 sqrt(X)，利用约数成对出现的性质。1 不是完全数。",
            "sampleInput": "30",
            "sampleOutput": "6\n28"
          }
        },
        {
          "id": "jiandao-JD054",
          "code": "JD054",
          "file": "JD054.cpp",
          "title": "剑意之质",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 2; i <= n; i++) {\n        bool prime = true;\n        for (int j = 2; j * j <= i; j++)\n            if (i % j == 0) { prime = false; break; }\n        if (prime) cout << i << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6982",
            "source": "JD | JD054 | 第4章 排兵布阵",
            "description": "梁嘉峰在沙盘上点出几枚剑棋：「天下剑法，有些可以拆分化简，有些不可再分，乃剑意之基石。这些不可拆分的棋位——只能被1和自己整除的数——就是剑意之质。排出2到N之间所有的剑意质数。」",
            "input": "一个整数N。",
            "output": "输出2到N之间所有的质数，每行一个。",
            "hint": "原题链接对每个数从2到√n试除。",
            "sampleInput": "10",
            "sampleOutput": "2\n3\n5\n7"
          }
        },
        {
          "id": "jiandao-JD055",
          "code": "JD055",
          "file": "JD055.cpp",
          "title": "上方剑域",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i < j && i + j < 11) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6983",
            "source": "JD | JD055 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第一宫——乾宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护乾宫的剑灵凌空画出一道剑气光幕，说道：「此乃乾宫剑阵之上方剑域。两条对角线将方阵切为上下左右四块。上方区域位于两条对角线的上方交汇处——即行号小于列号（i &lt; j），且行号加列号之和小于 11（i + j &lt; 11）的格子。此处灵力承天位之力，主攻正前方。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出对应区域的和或平均值，保留一位小数。",
            "hint": "原题链接先读操作类型（S求和/M求平均），再判断行号。上方区域即i",
            "sampleInput": "S\n5.0 65.0 82.0 54.0 60.0 96.0 64.0 88.0 81.0 2.0 86.0 29.0\n66.0 16.0 27.0 63.0 1.0 52.0 67.0 76.0 94.0 88.0 65.0 39.0\n48.0 61.0 15.0 22.0 48.0 30.0 57.0 15.0 97.0 18.0 19.0 49.0\n34.0 55.0 10.0 37.0 1.0 3.0 29.0 15.0 42.0 76.0 95.0 5.0\n29.0 92.0 53.0 60.0 44.0 35.0 96.0 64.0 15.0 16.0 35.0 87.0\n42.0 50.0 55.0 17.0 78.0 69.0 2.0 1.0 1.0 4.0 55.0 17.0\n66.0 28.0 22.0 68.0 17.0 94.0 74.0 6.0 65.0 64.0 77.0 84.0\n38.0 50.0 8.0 46.0 39.0 90.0 99.0 89.0 2.0 17.0 40.0 89.0\n65.0 72.0 54.0 60.0 11.0 99.0 37.0 21.0 37.0 9.0 42.0 14.0\n55.0 65.0 62.0 38.0 59.0 35.0 50.0 40.0 71.0 1.0 23.0 23.0\n37.0 17.0 97.0 26.0 15.0 64.0 16.0 79.0 87.0 84.0 96.0 85.0\n12.0 39.0 88.0 87.0 30.0 61.0 7.0 10.0 43.0 87.0 48.0 77.0",
            "sampleOutput": "1594.0"
          }
        },
        {
          "id": "jiandao-JD056",
          "code": "JD056",
          "file": "JD056.cpp",
          "title": "下方剑域",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i > j && i + j > 11) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6984",
            "source": "JD | JD056 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第二宫——坤宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坤宫的剑灵指向光幕下方，说道：「此乃坤宫剑阵之下方剑域。两条对角线将方阵切为上下左右四块。下方区域位于两条对角线的下方交汇处——即行号大于列号（i &gt; j），且行号加列号之和大于 11（i + j &gt; 11）的格子。此处灵力承地脉之气，势沉力猛。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出对应区域的和或平均值，保留一位小数。",
            "hint": "原题链接下方区域即i&gt;j的元素。",
            "sampleInput": "S\n6.0 90.0 70.0 55.0 69.0 69.0 62.0 79.0 7.0 9.0 54.0 43.0\n30.0 75.0 74.0 58.0 99.0 52.0 88.0 51.0 77.0 92.0 77.0 10.0\n89.0 99.0 84.0 60.0 90.0 25.0 95.0 82.0 96.0 5.0 92.0 10.0\n62.0 58.0 33.0 88.0 65.0 78.0 71.0 59.0 81.0 70.0 83.0 32.0\n7.0 50.0 45.0 52.0 18.0 63.0 68.0 58.0 60.0 58.0 45.0 22.0\n2.0 54.0 28.0 91.0 0.0 61.0 49.0 57.0 78.0 35.0 82.0 48.0\n7.0 54.0 36.0 30.0 46.0 48.0 45.0 22.0 18.0 24.0 77.0 17.0\n30.0 66.0 66.0 14.0 11.0 18.0 13.0 67.0 12.0 9.0 1.0 35.0\n7.0 71.0 24.0 6.0 73.0 30.0 26.0 96.0 99.0 28.0 8.0 38.0\n16.0 3.0 75.0 67.0 66.0 27.0 86.0 62.0 48.0 35.0 90.0 57.0\n76.0 4.0 92.0 24.0 53.0 31.0 95.0 52.0 69.0 39.0 16.0 64.0\n9.0 12.0 70.0 38.0 81.0 95.0 85.0 61.0 38.0 93.0 54.0 99.0",
            "sampleOutput": "1694.0"
          }
        },
        {
          "id": "jiandao-JD057",
          "code": "JD057",
          "file": "JD057.cpp",
          "title": "左方剑域",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i > j && i + j < 11) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6985",
            "source": "JD | JD057 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第三宫——震宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护震宫的剑灵指向光幕左侧，说道：「此乃震宫剑阵之左方剑域。两条对角线将方阵切为上下左右四块。左方区域位于两条对角线的左侧交汇处——即行号大于列号（i &gt; j），且行号加列号之和小于 11（i + j &lt; 11）的格子。此处灵力守青龙之位，主防御。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出对应区域的和或平均值，保留一位小数。",
            "hint": "原题链接左方区域即满足j &lt; i && i + j &lt; 11的元素（主对角线下且反对角线上）。",
            "sampleInput": "S\n68.0 59.0 10.0 88.0 95.0 50.0 60.0 8.0 6.0 7.0 5.0 79.0\n18.0 94.0 63.0 2.0 15.0 13.0 39.0 37.0 33.0 27.0 11.0 29.0\n12.0 23.0 6.0 42.0 4.0 63.0 7.0 20.0 11.0 74.0 27.0 5.0\n63.0 67.0 98.0 85.0 10.0 28.0 37.0 10.0 72.0 34.0 65.0 48.0\n34.0 17.0 33.0 49.0 22.0 37.0 20.0 80.0 43.0 4.0 82.0 14.0\n64.0 56.0 8.0 92.0 64.0 58.0 54.0 26.0 30.0 54.0 49.0 5.0\n40.0 69.0 72.0 6.0 8.0 71.0 70.0 98.0 24.0 16.0 91.0 11.0\n15.0 70.0 71.0 53.0 75.0 96.0 97.0 55.0 6.0 20.0 73.0 54.0\n21.0 76.0 55.0 68.0 85.0 84.0 82.0 26.0 76.0 96.0 6.0 87.0\n13.0 66.0 20.0 88.0 29.0 34.0 83.0 93.0 55.0 98.0 53.0 37.0\n77.0 36.0 43.0 10.0 70.0 47.0 57.0 8.0 94.0 48.0 98.0 88.0\n3.0 25.0 3.0 35.0 50.0 22.0 11.0 90.0 18.0 43.0 55.0 96.0",
            "sampleOutput": "1410.0"
          }
        },
        {
          "id": "jiandao-JD058",
          "code": "JD058",
          "file": "JD058.cpp",
          "title": "右方剑域",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i < j && i + j > 11) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6986",
            "source": "JD | JD058 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第四宫——巽宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护巽宫的剑灵指向光幕右侧，说道：「此乃巽宫剑阵之右方剑域。两条对角线将方阵切为上下左右四块。右方区域位于两条对角线的右侧交汇处——即行号小于列号（i &lt; j），且行号加列号之和大于 11（i + j &gt; 11）的格子。此处灵力据白虎之位，主进攻。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出对应区域的和或平均值，保留一位小数。",
            "hint": "原题链接右方区域即满足j &gt; i && i + j &gt; 11的元素（主对角线上且反对角线下）。",
            "sampleInput": "S\n69.0 84.0 98.0 42.0 4.0 23.0 58.0 99.0 32.0 14.0 26.0 40.0\n29.0 6.0 10.0 50.0 60.0 13.0 7.0 59.0 16.0 31.0 23.0 0.0\n0.0 61.0 75.0 80.0 46.0 58.0 45.0 34.0 10.0 61.0 53.0 66.0\n91.0 70.0 21.0 36.0 74.0 50.0 79.0 54.0 11.0 28.0 0.0 75.0\n59.0 75.0 25.0 41.0 49.0 65.0 39.0 21.0 88.0 46.0 39.0 2.0\n77.0 60.0 34.0 66.0 33.0 3.0 48.0 82.0 7.0 32.0 29.0 89.0\n81.0 95.0 33.0 68.0 37.0 25.0 41.0 14.0 77.0 23.0 38.0 44.0\n7.0 86.0 82.0 68.0 47.0 24.0 11.0 33.0 16.0 12.0 87.0 53.0\n63.0 28.0 72.0 61.0 47.0 15.0 24.0 54.0 85.0 15.0 72.0 11.0\n74.0 51.0 80.0 17.0 36.0 26.0 19.0 15.0 32.0 32.0 20.0 18.0\n69.0 23.0 38.0 8.0 8.0 61.0 89.0 28.0 76.0 56.0 18.0 67.0\n0.0 98.0 32.0 39.0 48.0 56.0 89.0 94.0 66.0 49.0 61.0 65.0",
            "sampleOutput": "1203.0"
          }
        },
        {
          "id": "jiandao-JD059",
          "code": "JD059",
          "file": "JD059.cpp",
          "title": "右上剑角",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i < j) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6987",
            "source": "JD | JD059 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第五宫——离宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护离宫的剑灵指向沙盘右上，说道：「此乃离宫剑阵之右上剑角。仅以主对角线为界——右上区域即所有行号小于列号（i &lt; j）的格子，主对角线右上方的那一半。此处为天乾之位，日升之处，剑势腾空而起。尔需计算此角所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出右上半部分的和或平均值，保留一位小数。",
            "hint": "原题链接右上部分即j&gt;i的元素。S求和，M求平均。",
            "sampleInput": "S\n86.0 26.0 52.0 44.0 73.0 60.0 63.0 26.0 54.0 1.0 35.0 0.0\n60.0 49.0 95.0 82.0 59.0 59.0 69.0 19.0 72.0 79.0 82.0 75.0\n86.0 23.0 26.0 13.0 5.0 99.0 13.0 84.0 28.0 26.0 60.0 23.0\n8.0 33.0 66.0 62.0 50.0 31.0 12.0 14.0 14.0 58.0 89.0 63.0\n19.0 52.0 47.0 35.0 96.0 22.0 22.0 28.0 83.0 36.0 30.0 83.0\n20.0 51.0 45.0 44.0 60.0 44.0 81.0 59.0 77.0 90.0 12.0 69.0\n59.0 59.0 40.0 6.0 98.0 29.0 60.0 44.0 68.0 60.0 84.0 31.0\n54.0 52.0 34.0 42.0 71.0 29.0 91.0 33.0 99.0 46.0 26.0 72.0\n22.0 1.0 96.0 41.0 17.0 26.0 65.0 86.0 2.0 93.0 44.0 12.0\n80.0 73.0 61.0 22.0 17.0 65.0 25.0 79.0 51.0 59.0 31.0 13.0\n11.0 83.0 99.0 19.0 0.0 72.0 47.0 57.0 26.0 12.0 87.0 97.0\n59.0 19.0 31.0 59.0 91.0 98.0 70.0 98.0 83.0 12.0 72.0 2.0",
            "sampleOutput": "3319.0"
          }
        },
        {
          "id": "jiandao-JD060",
          "code": "JD060",
          "file": "JD060.cpp",
          "title": "左上剑角",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i + j < 11) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6988",
            "source": "JD | JD060 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第六宫——坎宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坎宫的剑灵指向沙盘左上，说道：「此乃坎宫剑阵之左上剑角。仅以副对角线为界——左上区域即所有行号加列号之和小于 11（i + j &lt; 11）的格子，副对角线左上方的那一半。此处为天坤之位，月落之处，剑气如新月之弧。尔需计算此角所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出对应区域的和或平均值，保留一位小数。",
            "hint": "原题链接左上部分即i+j&lt;11的元素。",
            "sampleInput": "S\n49.0 20.0 80.0 78.0 8.0 14.0 59.0 46.0 32.0 6.0 7.0 97.0\n59.0 80.0 31.0 74.0 20.0 20.0 88.0 27.0 11.0 18.0 28.0 12.0\n97.0 85.0 70.0 33.0 61.0 32.0 10.0 89.0 42.0 82.0 21.0 79.0\n37.0 45.0 54.0 10.0 59.0 56.0 20.0 9.0 44.0 63.0 6.0 6.0\n71.0 77.0 27.0 24.0 74.0 77.0 93.0 91.0 11.0 24.0 24.0 10.0\n42.0 10.0 51.0 19.0 46.0 33.0 80.0 84.0 6.0 40.0 59.0 10.0\n80.0 53.0 90.0 44.0 89.0 6.0 56.0 36.0 27.0 59.0 45.0 58.0\n31.0 25.0 50.0 49.0 7.0 35.0 89.0 46.0 3.0 49.0 59.0 90.0\n78.0 5.0 44.0 49.0 91.0 11.0 10.0 91.0 88.0 80.0 8.0 85.0\n38.0 21.0 19.0 72.0 87.0 64.0 5.0 85.0 82.0 3.0 61.0 74.0\n4.0 55.0 45.0 3.0 55.0 55.0 88.0 33.0 33.0 29.0 89.0 0.0\n3.0 5.0 93.0 60.0 58.0 59.0 74.0 31.0 58.0 68.0 79.0 68.0",
            "sampleOutput": "2981.0"
          }
        },
        {
          "id": "jiandao-JD061",
          "code": "JD061",
          "file": "JD061.cpp",
          "title": "右下剑角",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i + j > 11) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6989",
            "source": "JD | JD061 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第七宫——艮宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护艮宫的剑灵指向沙盘右下，说道：「此乃艮宫剑阵之右下剑角。仅以副对角线为界——右下区域即所有行号加列号之和大于 11（i + j &gt; 11）的格子，副对角线右下方的那一半。此处为地乾之位，日落之处，剑势如残阳下沉。尔需计算此角所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出对应区域的和或平均值，保留一位小数。",
            "hint": "原题链接右下部分即满足i + j &gt; 11的元素（反对角线以下）。",
            "sampleInput": "S\n80.0 49.0 14.0 87.0 99.0 61.0 17.0 39.0 57.0 46.0 63.0 43.0\n79.0 19.0 8.0 27.0 77.0 77.0 97.0 82.0 52.0 14.0 85.0 36.0\n61.0 75.0 96.0 20.0 78.0 6.0 1.0 72.0 15.0 46.0 23.0 98.0\n57.0 87.0 10.0 39.0 94.0 28.0 8.0 22.0 15.0 7.0 43.0 46.0\n50.0 0.0 85.0 21.0 62.0 6.0 73.0 79.0 51.0 82.0 4.0 15.0\n58.0 36.0 69.0 41.0 28.0 30.0 98.0 7.0 73.0 35.0 41.0 72.0\n12.0 72.0 36.0 54.0 11.0 47.0 6.0 38.0 53.0 26.0 55.0 10.0\n76.0 20.0 87.0 0.0 39.0 6.0 17.0 88.0 4.0 56.0 35.0 52.0\n48.0 10.0 75.0 90.0 25.0 7.0 83.0 33.0 74.0 1.0 27.0 39.0\n94.0 54.0 59.0 20.0 26.0 76.0 73.0 3.0 33.0 41.0 77.0 35.0\n43.0 13.0 0.0 56.0 43.0 18.0 60.0 47.0 49.0 58.0 12.0 58.0\n74.0 40.0 93.0 89.0 94.0 20.0 77.0 48.0 88.0 34.0 40.0 14.0",
            "sampleOutput": "2790.0"
          }
        },
        {
          "id": "jiandao-JD062",
          "code": "JD062",
          "file": "JD062.cpp",
          "title": "左下剑角",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    char op; double a[12][12];\n    scanf(\" %c\", &op);\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            scanf(\"%lf\", &a[i][j]);\n    double sum = 0; int cnt = 0;\n    for (int i = 0; i < 12; i++)\n        for (int j = 0; j < 12; j++)\n            if (i > j) { sum += a[i][j]; cnt++; }\n    if (op == 'S') printf(\"%.1f\\n\", sum);\n    else printf(\"%.1f\\n\", sum / cnt);\n    return 0;\n}\n",
          "meta": {
            "ojId": "6990",
            "source": "JD | JD062 | 第5章 十二宫剑阵",
            "description": "李少白来到十二宫剑阵的第六宫——坤宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坤宫的剑灵指向地面，说道：「此乃坤宫剑阵。从西北到东南，一条主对角线将方阵一分为二。对角线之左下方（即行号大于列号的格子），是为地坤之位。此处灵力如初月升空，自下而上，自左而右，渐次铺展。尔需计算此区域所有灵力之和——或取其均值——方可破阵。」具体来说：一个 12×12 的方阵，行号 i 和列号 j 均从 0 到 11（或从 1 到 12）。左下区域定义为所有满足 i &gt; j（行号严格大于列号）的格子，即主对角线以下的部分。如下图所示（绿色区域即为左下区域）：     列0 列1 列2 ...      列11\n行0   \\  .   .   .   .   .\n行1   绿  \\  .   .   .   .\n行2   绿  绿  \\  .   .   .\n ...  绿  绿  绿  \\  .   .\n行11  绿  绿  绿  绿  绿  \\\n第一行输入一个大写字母：S 表示求左下区域所有灵力之和，M 表示求平均值。接下来 12 行，每行 12 个浮点数，表示 12×12 剑阵中每个格子的灵力值。输出所求的和或平均值，保留一位小数。",
            "input": "第一行一个大写字母S或M。接下来12行，每行12个浮点数。",
            "output": "输出对应区域的和或平均值，保留一位小数。",
            "hint": "原题链接左下部分即满足j &lt; i的元素（主对角线以下）。",
            "sampleInput": "S\n43.0 96.0 42.0 21.0 34.0 15.0 13.0 59.0 82.0 4.0 35.0 93.0\n78.0 97.0 91.0 19.0 38.0 91.0 16.0 90.0 38.0 53.0 31.0 73.0\n25.0 37.0 40.0 40.0 34.0 39.0 98.0 77.0 29.0 2.0 84.0 54.0\n33.0 99.0 98.0 87.0 3.0 53.0 16.0 64.0 98.0 12.0 13.0 89.0\n2.0 25.0 65.0 10.0 40.0 8.0 97.0 42.0 32.0 70.0 98.0 95.0\n80.0 95.0 22.0 16.0 14.0 72.0 97.0 32.0 2.0 85.0 88.0 60.0\n86.0 13.0 86.0 92.0 55.0 24.0 2.0 30.0 12.0 25.0 16.0 37.0\n53.0 93.0 3.0 7.0 75.0 12.0 15.0 1.0 8.0 6.0 68.0 17.0\n51.0 14.0 23.0 98.0 99.0 92.0 28.0 91.0 13.0 88.0 91.0 65.0\n5.0 2.0 17.0 17.0 96.0 75.0 6.0 56.0 17.0 38.0 7.0 96.0\n36.0 32.0 46.0 40.0 98.0 1.0 54.0 76.0 9.0 22.0 14.0 61.0\n65.0 26.0 55.0 90.0 61.0 34.0 81.0 28.0 63.0 90.0 47.0 80.0",
            "sampleOutput": "3154.0"
          }
        },
        {
          "id": "jiandao-JD063",
          "code": "JD063",
          "file": "JD063.cpp",
          "title": "方圆初阵",
          "language": "C++",
          "lineCount": 17,
          "source": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n;\n    while (scanf(\"%d\", &n), n) {\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                int v = min({i+1, j+1, n-i, n-j});\n                printf(\"%3d\", v);\n            }\n            printf(\"\\n\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6991",
            "source": "JD | JD063 | 第5章 十二宫剑阵",
            "description": "「此乃方圆剑阵——最外圈剑气最淡，标记为1；往里一圈剑气渐浓，标记为2。」赵晴儿在沙盘上画出一圈圈剑芒，「到剑阵中心，剑气愈凝愈实。每一圈剑芒的强度，就是你离外界最远的那道剑气的距离。」",
            "input": "多行，每行一个整数N。N=0时结束。",
            "output": "每个N输出一个N阶矩阵，每个数字占3个字符宽度。每个矩阵后跟一个空行。",
            "hint": "原题链接每个位置的值 = min(i+1, j+1, N-i, N-j)，即到四条边的最小距离。",
            "sampleInput": "1\n0",
            "sampleOutput": "1"
          }
        },
        {
          "id": "jiandao-JD064",
          "code": "JD064",
          "file": "JD064.cpp",
          "title": "镜像方阵",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <cstdio>\n#include <cstdlib>\nusing namespace std;\nint main() {\n    int n;\n    while (scanf(\"%d\", &n), n) {\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                printf(\"%3d\", abs(i - j) + 1);\n            }\n            printf(\"\\n\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6992",
            "source": "JD | JD064 | 第5章 十二宫剑阵",
            "description": "「此阵以主对角线为镜——镜中剑影，左右互映。」赵晴儿落下第一柄长剑，「主对角线上的剑势最强，为1；往右上和左下方逐次递减，如剑光在水面的倒影越远越淡。」",
            "input": "多行，每行一个整数N。N=0时结束。",
            "output": "每个N输出一个N阶矩阵，每个数字占3个字符宽度。每个矩阵后跟一个空行。",
            "hint": "原题链接M[i][j] = |i-j|+1。对角线为1，离对角线越远数越大。",
            "sampleInput": "1\n0",
            "sampleOutput": "1"
          }
        },
        {
          "id": "jiandao-JD065",
          "code": "JD065",
          "file": "JD065.cpp",
          "title": "倍增方阵",
          "language": "C++",
          "lineCount": 15,
          "source": "#include <cstdio>\nusing namespace std;\nint main() {\n    int n;\n    while (scanf(\"%d\", &n), n) {\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                printf(\"%d \", 1 << (i + j));\n            }\n            printf(\"\\n\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6993",
            "source": "JD | JD065 | 第5章 十二宫剑阵",
            "description": "「此阵每一格，剑气强度皆由剑气原点(0,0)倍增而来。」赵晴儿剑尖轻点沙盘，「位在(i,j)的剑势，强度为2的(i+j)次方。一生二，二生四，剑气倍增如潮水蔓延。」",
            "input": "多行，每行一个整数N（0≤N≤15）。N=0时结束。",
            "output": "每个N输出一个N阶矩阵，每行N个整数用空格隔开。每个矩阵后跟一个空行。",
            "hint": "原题链接M[i][j] = 2^(i+j)。用位运算 1&lt;&lt;(i+j) 或 pow函数。",
            "sampleInput": "3 0",
            "sampleOutput": "1 2 4 \n2 4 8 \n4 8 16"
          }
        },
        {
          "id": "jiandao-JD066",
          "code": "JD066",
          "file": "JD066.cpp",
          "title": "蛇形剑阵",
          "language": "C++",
          "lineCount": 26,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, m;\n    cin >> n >> m;\n    int a[100][100];\n    int top = 0, bottom = n - 1, left = 0, right = m - 1, x = 1;\n    while (top <= bottom && left <= right) {\n        for (int j = left; j <= right; j++) a[top][j] = x++;\n        top++;\n        if (top > bottom) break;\n        for (int i = top; i <= bottom; i++) a[i][right] = x++;\n        right--;\n        if (left > right) break;\n        for (int j = right; j >= left; j--) a[bottom][j] = x++;\n        bottom--;\n        for (int i = bottom; i >= top; i--) a[i][left] = x++;\n        left++;\n    }\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < m; j++)\n            cout << a[i][j] << \" \";\n        cout << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "6994",
            "source": "JD | JD066 | 第5章 十二宫剑阵",
            "description": "「剑阵蜿蜒如蛇，以身引气，气走周身。」赵晴儿在沙盘上画了一个n行m列的剑阵，「从左上角开始，依次填入从1到n×m的剑气。行到尽头便拐弯，似灵蛇折返。」",
            "input": "一行，两个整数n和m。",
            "output": "n行，每行m个整数用空格隔开。输出后跟一个空行。",
            "hint": "原题链接模拟蛇形遍历：右→下→左→上循环。维护四个边界。",
            "sampleInput": "3 3",
            "sampleOutput": "1 2 3 \n8 9 4 \n7 6 5"
          }
        },
        {
          "id": "jiandao-JD067",
          "code": "JD067",
          "file": "JD067.cpp",
          "title": "古卷测长",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    cout << s.length() << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6995",
            "source": "JD | JD067 | 第6章 古卷密文",
            "description": "梁嘉峰递给李少白一卷竹简：「上面刻着一行字，告诉我它有多长。」",
            "input": "一行字符串（长度不超过100），可能包含空格。",
            "output": "输出字符串的实际长度。",
            "hint": "原题链接读入一行字符串（含空格），输出其长度。",
            "sampleInput": "Hello World",
            "sampleOutput": "11"
          }
        },
        {
          "id": "jiandao-JD068",
          "code": "JD068",
          "file": "JD068.cpp",
          "title": "密文留白",
          "language": "C++",
          "lineCount": 10,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    for (int i = 0; i < (int)s.size(); i++)\n        cout << s[i] << \" \";\n    return 0;\n}\n",
          "meta": {
            "ojId": "6996",
            "source": "JD | JD068 | 第6章 古卷密文",
            "description": "古卷上的字太密了，赵晴儿让李少白在每个字符后面加一个空格，方便辨认。",
            "input": "一行字符串（长度不超过100）。",
            "output": "每个字符后加一个空格输出（最后一个字符后也有空格）。",
            "hint": "原题链接遍历字符串，每个字符后输出一个空格。",
            "sampleInput": "abc",
            "sampleOutput": "a b c"
          }
        },
        {
          "id": "jiandao-JD069",
          "code": "JD069",
          "file": "JD069.cpp",
          "title": "墨迹遮字",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; char c;\n    getline(cin, s);\n    cin >> c;\n    for (char ch : s)\n        if (ch == c) cout << '#';\n        else cout << ch;\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6997",
            "source": "JD | JD069 | 第6章 古卷密文",
            "description": "古卷上有些字被墨迹遮住了，需要替换成&#039;#&#039;，露出可辨认的文字。",
            "input": "一行字符串（长度不超过100，全大写）。第二行一个字符，表示要替换的字符。",
            "output": "替换后的字符串。",
            "hint": "原题链接遍历字符串，遇到目标字符输出&#039;#&#039;，否则输出原字符。",
            "sampleInput": "hello\no\nworld\nl\nabc\nx\ntest\ne\nhello\na\nh\ne",
            "sampleOutput": "hell#"
          }
        },
        {
          "id": "jiandao-JD070",
          "code": "JD070",
          "file": "JD070.cpp",
          "title": "经文重构",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string a, b;\n    getline(cin, a);\n    int n = a.size();\n    for (int i = 0; i < n; i++)\n        b += (char)(a[i] + a[(i + 1) % n]);\n    cout << b << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6998",
            "source": "JD | JD070 | 第6章 古卷密文",
            "description": "赵晴儿递给李少白一段经文a，让他按规则重新构造一段经文b：每个位置b[i]的ASCII值等于a[i]和a[i+1]的ASCII值之和。",
            "input": "一行字符串a（长度3~100）。",
            "output": "构造后的字符串b。",
            "hint": "原题链接遍历a，b[i] = chr(ord(a[i]) + ord(a[i+1]))。最后一个用a[-1]和a[0]。",
            "sampleInput": "=-9+=.3'<<-!!'+5.</=+/3672?96,7'<%5 //>$#:)6*(6.(;7>*)>35#5.72#/44;/)0#864\"!51$1=00*:$&'",
            "sampleOutput": "jfdhkaZcxiNBHR`cjklhZbimiqxobc^caZUO^mbG]c_`R^dVcruhSgqhXXceiURchojXYS[njVCVfUUnm`Zd^JMd"
          }
        },
        {
          "id": "jiandao-JD071",
          "code": "JD071",
          "file": "JD071.cpp",
          "title": "密文数符",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    int cnt = 0;\n    for (char c : s)\n        if (c >= '0' && c <= '9') cnt++;\n    cout << cnt << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "6999",
            "source": "JD | JD071 | 第6章 古卷密文",
            "description": "赵晴儿递给李少白一行密文，里面混着文字和数字。她说：「数一数有几个数字字符。」",
            "input": "一行字符（长度不超过100）。",
            "output": "输出其中数字字符（&#039;0&#039;~&#039;9&#039;）的个数。",
            "hint": "原题链接遍历字符串，判断每个字符是否在&#039;0&#039;到&#039;9&#039;之间。",
            "sampleInput": "hello2024world",
            "sampleOutput": "4"
          }
        },
        {
          "id": "jiandao-JD072",
          "code": "JD072",
          "file": "JD072.cpp",
          "title": "拳掌对决",
          "language": "C++",
          "lineCount": 14,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    string a, b;\n    cin >> a >> b;\n    if (a == b) cout << \"Tie\" << endl;\n    else if ((a == \"Rock\" && b == \"Scissors\") ||\n             (a == \"Scissors\" && b == \"Paper\") ||\n             (a == \"Paper\" && b == \"Rock\"))\n        cout << \"Player1\" << endl;\n    else\n        cout << \"Player2\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7000",
            "source": "JD | JD072 | 第6章 古卷密文",
            "description": "李少白和师弟在练功间隙玩猜拳游戏。每人出 Scissors（剪刀）、Rock（石头）或 Paper（布），按照相克规则判断胜负：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock。",
            "input": "一行，两个字符串，分别表示 Player1 和 Player2 出的拳（Scissors、Rock 或 Paper）。",
            "output": "输出结果：Player1 赢输出 Player1，Player2 赢输出 Player2，平局输出 Tie。",
            "hint": "先判断双方是否相等（平局）。否则按相克规则判断：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock，构成一个循环克制链。原题链接",
            "sampleInput": "Scissors Rock",
            "sampleOutput": "Player2"
          }
        },
        {
          "id": "jiandao-JD073",
          "code": "JD073",
          "file": "JD073.cpp",
          "title": "经文加密",
          "language": "C++",
          "lineCount": 20,
          "source": "#include<iostream>\nusing namespace std;//数字不加密！\n\n#include<string>\nint main()\n{\n    string a;\n    getline(cin,a);\n    for(int i=0;a[i]!='\\0';i++)\n    {\n        if(a[i]>='a'&&a[i]<='y'||a[i]>='A'&&a[i]<='Y')\n            a[i]+=1;\n        else if(a[i]=='Z')a[i]='A';\n        else if(a[i]=='z')a[i]='a';\n        //else if(a[i]=='9')a[i]='0';\n\n    }\n    cout<<a<<endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7001",
            "source": "JD | JD073 | 第6章 古卷密文",
            "description": "古卷需要加密保存。加密规则：每个字母后移一位（z→a），每个数字后移一位（9→0），其他字符不变。",
            "input": "一行字符串（长度不超过100）。",
            "output": "加密后的字符串。",
            "hint": "原题链接遍历字符串，对字母、数字分别做+1循环偏移，其他字符原样输出。",
            "sampleInput": "Hello, World!",
            "sampleOutput": "Ifmmp, Xpsme!"
          }
        },
        {
          "id": "jiandao-JD074",
          "code": "JD074",
          "file": "JD074.cpp",
          "title": "古卷替换",
          "language": "C++",
          "lineCount": 21,
          "source": "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string line, a, b;\n    getline(cin, line);\n    getline(cin, a);\n    getline(cin, b);\n    stringstream ss(line);\n    string word, result;\n    bool first = true;\n    while (ss >> word) {\n        if (!first) result += \" \";\n        first = false;\n        if (word == a) result += b;\n        else result += word;\n    }\n    cout << result << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7002",
            "source": "JD | JD074 | 第6章 古卷密文",
            "description": "古卷上的某个词需要全部替换成另一个词。赵晴儿让李少白逐词核对。",
            "input": "三行：第一行原文字符串，第二行要替换的词A，第三行替换成的词B。",
            "output": "替换后的字符串。",
            "hint": "原题链接字符串替换函数，或按空格分割单词逐个比较替换。",
            "sampleInput": "first late system see school still great different year Place far take same\nlife\ngroup",
            "sampleOutput": "first late system see school still great different year Place far take same"
          }
        },
        {
          "id": "jiandao-JD075",
          "code": "JD075",
          "file": "JD075.cpp",
          "title": "寻最长词",
          "language": "C++",
          "lineCount": 15,
          "source": "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    if (s.back() == '.') s.pop_back();\n    stringstream ss(s);\n    string word, best;\n    while (ss >> word)\n        if (word.size() > best.size()) best = word;\n    cout << best << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7003",
            "source": "JD | JD075 | 第6章 古卷密文",
            "description": "赵晴儿指着古卷上的一句话：「找出最长的那个词。」",
            "input": "一行，以&#039;.&#039;结尾的英文句子（长度不超过500）。",
            "output": "最长的单词。",
            "hint": "原题链接按空格分割单词（去掉末尾的&#039;.&#039;），遍历比较长度。",
            "sampleInput": "I am a student of Peking University.",
            "sampleOutput": "University"
          }
        },
        {
          "id": "jiandao-JD076",
          "code": "JD076",
          "file": "JD076.cpp",
          "title": "古卷插字",
          "language": "C++",
          "lineCount": 35,
          "source": "#include<iostream>\nusing namespace std;\n\n#include<string>\n\n#include<cstring>\nint main()\n{\n    string str,substr;\n    getline(cin,str);\n    getline(cin,substr);\n    char max='A' ;\n    int m=0,n=substr.length();\n    int len=str.length();\n    for(int i=0;str[i]!='\\0';i++)\n    {\n        if(str[i]>max)\n        {\n            max=str[i];\n            m=i;\n        }\n    } \\\n    str.resize(len+n); \n    //insert(max+1,substr);\n\n    for(int i=len;i>m;i--)\n    {\n        str[i+n]=str[i];\n    }\n    for(int i=m+1,j=0;substr[j]!='\\0';i++,j++)\n    {\n        str[i]=substr[j];\n    }\n    cout<<str;\n}\n",
          "meta": {
            "ojId": "7004",
            "source": "JD | JD076 | 第6章 古卷密文",
            "description": "梁嘉峰递给李少白两段古卷残篇，要把后一段插到前一段ASCII码最大的字符后面。",
            "input": "两行，第一行一个字符串str，第二行一个字符串substr。",
            "output": "每行输出插入后的字符串。",
            "hint": "原题链接找到str中ASCII码最大的字符（若有多个取最后一个），在其后面插入substr。",
            "sampleInput": "hello\nX",
            "sampleOutput": "helloX"
          }
        },
        {
          "id": "jiandao-JD077",
          "code": "JD077",
          "file": "JD077.cpp",
          "title": "独字寻踪",
          "language": "C++",
          "lineCount": 16,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    int cnt[256] = {};\n    for (char c : s) cnt[(unsigned char)c]++;\n    for (char c : s)\n        if (cnt[(unsigned char)c] == 1) {\n            cout << c << endl;\n            return 0;\n        }\n    cout << \"no\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7005",
            "source": "JD | JD077 | 第6章 古卷密文",
            "description": "古卷上有些字重复出现，有些只出现一次。赵晴儿让李少白找到第一个只出现一次的字符。",
            "input": "一行只包含小写字母的字符串。",
            "output": "第一个只出现一次的字符，或&quot;no&quot;。",
            "hint": "原题链接先统计每个字符出现次数，再从头遍历找第一个次数为1的。",
            "sampleInput": "abaccdeff",
            "sampleOutput": "b"
          }
        },
        {
          "id": "jiandao-JD078",
          "code": "JD078",
          "file": "JD078.cpp",
          "title": "两卷对校",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string a, b;\n    int k;\n    getline(cin, a);\n    getline(cin, a);\n    getline(cin, b);\n    if (a.find(b) != string::npos) cout << \"yes\" << endl;\n    else cout << \"no\" << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7006",
            "source": "JD | JD078 | 第6章 古卷密文",
            "description": "赵晴儿拿着两卷古卷：「看看第二段经文是不是第一段中的一部分——如果是，就算对上了。」",
            "input": "第一行一个整数k（忽略，用于兼容）。第二行字符串a。第三行字符串b。",
            "output": "b是a的子串输出yes，否则输出no。",
            "hint": "原题链接遍历a的每个位置，用strncmp比较是否与b匹配。",
            "sampleInput": "abc\nd",
            "sampleOutput": "no"
          }
        },
        {
          "id": "jiandao-JD079",
          "code": "JD079",
          "file": "JD079.cpp",
          "title": "经文周期",
          "language": "C++",
          "lineCount": 19,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    while (cin >> s && s != \".\") {\n        int n = s.size(), ans = 1;\n        for (int p = 1; p <= n; p++) {\n            if (n % p == 0) {\n                bool ok = true;\n                for (int i = p; i < n; i++)\n                    if (s[i] != s[i % p]) { ok = false; break; }\n                if (ok) { ans = n / p; break; }\n            }\n        }\n        cout << ans << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "7007",
            "source": "JD | JD079 | 第6章 古卷密文",
            "description": "赵晴儿指着一篇重复的经文：「这段文字是某个子串重复几次写成的？找出最小的重复次数。」",
            "input": "一行字符串。",
            "output": "对于每个输入的字符串（遇到&quot;.&quot;为止），输出一行一个整数n，表示该字符串最多由n个子串重复构成。",
            "hint": "原题链接枚举周期p（p是len的因子），检查s[0:p]重复len/p次是否等于原串。",
            "sampleInput": "abcd\naaaa\nababab\n.",
            "sampleOutput": "1\n4\n3"
          }
        },
        {
          "id": "jiandao-JD080",
          "code": "JD080",
          "file": "JD080.cpp",
          "title": "密文跨距",
          "language": "C++",
          "lineCount": 32,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string line, s, s1, s2;\n    getline(cin, line);\n    int c1 = line.find(',');\n    int c2 = line.rfind(',');\n    s = line.substr(0, c1);\n    s1 = line.substr(c1 + 1, c2 - c1 - 1);\n    s2 = line.substr(c2 + 1);\n\n    int s1_end = -1;\n    size_t pos = 0;\n    while ((pos = s.find(s1, pos)) != string::npos) {\n        s1_end = pos + (int)s1.size();\n        pos++;\n    }\n\n    int s2_start = -1;\n    pos = 0;\n    while ((pos = s.find(s2, pos)) != string::npos) {\n        s2_start = pos;\n        pos++;\n    }\n\n    if (s1_end == -1 || s2_start == -1 || s1_end > s2_start)\n        cout << -1 << endl;\n    else\n        cout << s2_start - s1_end << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7008",
            "source": "JD | JD080 | 第6章 古卷密文",
            "description": "梁嘉峰递给李少白一长段密文和两个短码S1、S2：「S1在左，S2在右，不交叉。最大间距是多少？」",
            "input": "一行，三个字符串用逗号隔开：S,S1,S2。",
            "output": "最大跨距。不满足条件输出-1。",
            "hint": "原题链接从左往右找S1最后出现的位置end1，从右往左找S2最后出现的位置start2。如果end1",
            "sampleInput": "abcd123dABdefghjsdef76ki,ab,ef",
            "sampleOutput": "16"
          }
        },
        {
          "id": "jiandao-JD081",
          "code": "JD081",
          "file": "JD081.cpp",
          "title": "初窥阶乘",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <iostream>\nusing namespace std;\nlong long fact(int n) {\n    long long res = 1;\n    for (int i = 2; i <= n; i++) res *= i;\n    return res;\n}\nint main() {\n    int n;\n    cin >> n;\n    cout << fact(n) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7009",
            "source": "JD | JD081 | 第7章 以招创招",
            "description": "李少白在丹房帮赵晴儿炼丹。丹方上写着：&quot;取n味药材，第一味放1份，第二味放2份，第三味放3份……第n味放n份。&quot;赵晴儿问：&quot;n味药材总共需要多少份？&quot;李少白拿出笔从头算：1×2×3×……×n。赵晴儿摇头：&quot;每次都要从头算，太慢了。把它封装成一个函数，以后直接调用。&quot;请帮李少白编写一个函数，计算n的阶乘（n!）。",
            "input": "一个整数n（0 ≤ n ≤ 10）。",
            "output": "输出n的阶乘。",
            "hint": "原题链接函数内用循环累乘，或递归实现。",
            "sampleInput": "3",
            "sampleOutput": "6"
          }
        },
        {
          "id": "jiandao-JD082",
          "code": "JD082",
          "file": "JD082.cpp",
          "title": "比剑取大",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\nusing namespace std;\nint maxx(int x, int y) { return x > y ? x : y; }\nint main() {\n    int x, y;\n    cin >> x >> y;\n    cout << maxx(x, y) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7010",
            "source": "JD | JD082 | 第7章 以招创招",
            "description": "兵器库里，赵晴儿和李少白各自挑了一柄剑。赵晴儿的剑重x斤，李少白的剑重y斤。赵晴儿说：&quot;我们总要比谁的剑更重，每次都手算太麻烦。写一个函数，传入两个数，返回较大的那个。以后比试直接调用就行。&quot;请帮他们实现这个函数。",
            "input": "一行，两个整数x和y。",
            "output": "输出最大值。",
            "hint": "原题链接函数内用 if 比较或三元表达式。",
            "sampleInput": "3 5",
            "sampleOutput": "5"
          }
        },
        {
          "id": "jiandao-JD083",
          "code": "JD083",
          "file": "JD083.cpp",
          "title": "剑气归正",
          "language": "C++",
          "lineCount": 9,
          "source": "#include <iostream>\nusing namespace std;\nint abss(int x) { return x < 0 ? -x : x; }\nint main() {\n    int x;\n    cin >> x;\n    cout << abss(x) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7011",
            "source": "JD | JD083 | 第7章 以招创招",
            "description": "李少白在练剑气外放时，需要计算剑气落点与自己的距离。距离本该是正数，但有时算出的结果是负数——因为方向搞反了。赵晴儿说：&quot;别每次遇到负数就手动取反，写一个函数，不管传入正数还是负数，都返回它的绝对值。&quot;",
            "input": "一个整数x。",
            "output": "输出x的绝对值。",
            "hint": "原题链接if x &lt; 0: return -x, else: return x。",
            "sampleInput": "-5",
            "sampleOutput": "5"
          }
        },
        {
          "id": "jiandao-JD084",
          "code": "JD084",
          "file": "JD084.cpp",
          "title": "双剑互易",
          "language": "C++",
          "lineCount": 10,
          "source": "#include <iostream>\nusing namespace std;\nvoid swapx(int &x, int &y) { int t = x; x = y; y = t; }\nint main() {\n    int x, y;\n    cin >> x >> y;\n    swapx(x, y);\n    cout << x << \" \" << y << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7012",
            "source": "JD | JD084 | 第7章 以招创招",
            "description": "梁嘉峰在教李少白一套双剑术。左右手各持一剑，攻守之间需要不断交换位置。&quot;实战中你不能把剑放到地上再捡起来，&quot;梁嘉峰说，&quot;直接交换。写一个函数，传入两个变量的引用，在函数内部交换它们的值。&quot;李少白提笔写下函数签名，却犯了难——C++里普通参数只传值，改不了外面的变量。",
            "input": "一行，两个整数x和y。",
            "output": "交换后的x和y。",
            "hint": "原题链接C++用引用参数 `void swap(int &x, int &y)`。Python中 a, b = b, a。",
            "sampleInput": "6 26",
            "sampleOutput": "26 6"
          }
        },
        {
          "id": "jiandao-JD085",
          "code": "JD085",
          "file": "JD085.cpp",
          "title": "辗转相除",
          "language": "C++",
          "lineCount": 11,
          "source": "#include <iostream>\nusing namespace std;\nint gcd(int a, int b) {\n    return b == 0 ? a : gcd(b, a % b);\n}\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << gcd(a, b) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7013",
            "source": "JD | JD085 | 第7章 以招创招",
            "description": "赵晴儿在药圃里采了a株紫芝和b株青蒿，要把它们扎成相同大小的药束，每束株数相同且不能有剩余。&quot;这其实就是求a和b的最大公约数，&quot;赵晴儿说，&quot;古人有个妙法叫辗转相除——用大数除以小数取余，再用小数除以余数，反复如此，直到余数为零。最后一个非零余数就是答案。&quot;请帮赵晴儿写一个函数，用辗转相除法求两个正整数的最大公约数。",
            "input": "一行，两个正整数a和b。",
            "output": "输出a和b的最大公约数。",
            "hint": "原题链接辗转相除法：gcd(a,b) = gcd(b, a%b)，当b==0时返回a。",
            "sampleInput": "963 787",
            "sampleOutput": "1"
          }
        },
        {
          "id": "jiandao-JD086",
          "code": "JD086",
          "file": "JD086.cpp",
          "title": "剑阵复制",
          "language": "C++",
          "lineCount": 19,
          "source": "#include <iostream>\nusing namespace std;\nvoid copyx(int a[], int b[], int sz) {\n    for (int i = 0; i < sz; i++) b[i] = a[i];\n}\nint main() {\n    int n, m, sz;\n    cin >> n >> m >> sz;\n    int a[100], b[100];\n    for (int i = 0; i < n; i++) cin >> a[i];\n    for (int i = 0; i < m; i++) cin >> b[i];\n    copyx(a, b, sz);\n    for (int i = 0; i < m; i++) {\n        if (i > 0) cout << \" \";\n        cout << b[i];\n    }\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7014",
            "source": "JD | JD086 | 第7章 以招创招",
            "description": "赵晴儿在沙盘上摆了一个剑阵（数组a），需要原样复制一份到另一个沙盘（数组b）上。&quot;手抄太慢，&quot;赵晴儿说，&quot;写一个函数，把a的前size个元素复制到b对应的位置上。&quot;李少白接过两个沙盘，发现b上原来也有数字，只需覆盖前size个位置，其余保持不变。",
            "input": "第一行两个整数n和size（数组长度和复制个数）。第二行n个整数。",
            "output": "复制后的数组，空格隔开。",
            "hint": "原题链接函数内循环，b[i] = a[i]，复制前size个元素。",
            "sampleInput": "3 5 2\n1 2 3\n4 5 6 7 8",
            "sampleOutput": "1 2 6 7 8"
          }
        },
        {
          "id": "jiandao-JD087",
          "code": "JD087",
          "file": "JD087.cpp",
          "title": "剑阵翻转",
          "language": "C++",
          "lineCount": 19,
          "source": "#include <iostream>\nusing namespace std;\nvoid rev(int a[], int sz) {\n    for (int i = 0; i < sz / 2; i++)\n        swap(a[i], a[sz - 1 - i]);\n}\nint main() {\n    int n, sz;\n    cin >> n >> sz;\n    int a[100];\n    for (int i = 0; i < n; i++) cin >> a[i];\n    rev(a, sz);\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << \" \";\n        cout << a[i];\n    }\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7015",
            "source": "JD | JD087 | 第7章 以招创招",
            "description": "梁嘉峰在沙盘上摆了一排石块，每块上刻着一个数字。他指着前size块说：&quot;剑阵需要反转——把第一个和最后一个交换，第二个和倒数第二个交换，依此类推。后面的石块不动。&quot;请帮李少白写一个函数，将数组的前size个元素原地翻转。",
            "input": "第一行两个整数n和size。第二行n个整数。",
            "output": "翻转前size个元素后的数组，空格隔开。",
            "hint": "原题链接双指针从两端向中间交换，只交换前size个。",
            "sampleInput": "5 3\n1 2 3 4 5",
            "sampleOutput": "3 2 1 4 5"
          }
        },
        {
          "id": "jiandao-JD088",
          "code": "JD088",
          "file": "JD088.cpp",
          "title": "印数成招",
          "language": "C++",
          "lineCount": 17,
          "source": "#include <iostream>\nusing namespace std;\nvoid print(int a[], int sz) {\n    for (int i = 0; i < sz; i++) {\n        if (i > 0) cout << \" \";\n        cout << a[i];\n    }\n    cout << endl;\n}\nint main() {\n    int n, sz;\n    cin >> n >> sz;\n    int a[100];\n    for (int i = 0; i < n; i++) cin >> a[i];\n    print(a, sz);\n    return 0;\n}\n",
          "meta": {
            "ojId": "7016",
            "source": "JD | JD088 | 第7章 以招创招",
            "description": "宗门兵器库盘点时，赵晴儿需要把清单上的前几件兵器名称逐一打印出来。清单上有n件兵器，但她只需要前size件。&quot;每次都手动抄写太蠢了，&quot;赵晴儿说，&quot;写一个函数，传入数组和size，把前size个元素打印出来。&quot;",
            "input": "第一行两个整数n和size（数组长度和待打印个数，size ≤ n）。第二行n个整数。",
            "output": "输出数组的前size个元素，空格隔开，末尾换行。",
            "hint": "原题链接函数内遍历数组前size个元素，空格隔开输出。",
            "sampleInput": "5 3\n1 2 3 4 5",
            "sampleOutput": "1 2 3"
          }
        },
        {
          "id": "jiandao-JD089",
          "code": "JD089",
          "file": "JD089.cpp",
          "title": "印阵成招",
          "language": "C++",
          "lineCount": 28,
          "source": "// 每行末尾有空格\n#include<iostream>\nusing namespace std;\nint main()\n{\n    int a[200][200],row,col;\n    cin>>row>>col;\n    for(int i=0;i<row;i++)\n    {\n        for(int j=0;j<col;j++)\n        {\n            cin>>a[i][j];\n        }\n    }\n    for(int i=0;i<row;i++)\n    {\n        for(int j=0;j<col;j++)\n        {\n            //cout<<\" \";\n\n            cout<<a[i][j]<<\" \";\n        }\n        cout<<endl;\n    }\n    \n\n\n}\n",
          "meta": {
            "ojId": "7017",
            "source": "JD | JD089 | 第7章 以招创招",
            "description": "赵晴儿在沙盘上画了一个row行col列的剑阵图，每个格子标着一个数字。她需要把这个阵图工整地抄录到竹简上。&quot;写一个函数，&quot;赵晴儿说，&quot;传入二维数组和行列数，按格式逐行打印。每行的数字用空格隔开，数字之间用空格隔开。&quot;",
            "input": "第一行两个整数row和col。接下来row行，每行col个整数。",
            "output": "矩阵元素，每行末尾无多余空格。",
            "hint": "原题链接嵌套循环遍历行列，注意行末空格处理。",
            "sampleInput": "3 4\n1 3 4 5\n2 6 9 4\n1 4 7 5",
            "sampleOutput": "1 3 4 5\n2 6 9 4\n1 4 7 5"
          },
          "alternates": [
            {
              "id": "jiandao-JD089_c",
              "code": "JD089_c",
              "file": "JD089_c.c",
              "title": "印阵成招",
              "language": "C",
              "lineCount": 14,
              "source": "#include <stdio.h>\nint main() {\n    int r, c, x, i, j;\n    scanf(\"%d %d\", &r, &c);\n    for (i = 0; i < r; i++) {\n        for (j = 0; j < c; j++) {\n            scanf(\"%d\", &x);\n            if (j > 0) printf(\" \");\n            printf(\"%d\", x);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
              "meta": {
                "ojId": "7017",
                "source": "JD | JD089 | 第7章 以招创招",
                "description": "赵晴儿在沙盘上画了一个row行col列的剑阵图，每个格子标着一个数字。她需要把这个阵图工整地抄录到竹简上。&quot;写一个函数，&quot;赵晴儿说，&quot;传入二维数组和行列数，按格式逐行打印。每行的数字用空格隔开，数字之间用空格隔开。&quot;",
                "input": "第一行两个整数row和col。接下来row行，每行col个整数。",
                "output": "矩阵元素，每行末尾无多余空格。",
                "hint": "原题链接嵌套循环遍历行列，注意行末空格处理。",
                "sampleInput": "3 4\n1 3 4 5\n2 6 9 4\n1 4 7 5",
                "sampleOutput": "1 3 4 5\n2 6 9 4\n1 4 7 5"
              },
              "variantOf": "JD089"
            }
          ]
        },
        {
          "id": "jiandao-JD090",
          "code": "JD090",
          "file": "JD090.cpp",
          "title": "剑阵排序",
          "language": "C++",
          "lineCount": 18,
          "source": "#include <cstdio>\nint a[200];\nint main() {\n    int n, l, r;\n    scanf(\"%d %d %d\", &n, &l, &r);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    for (int i = l; i < r; i++)\n        for (int j = l; j < l + r - i; j++)\n            if (a[j] > a[j+1]) {\n                int t = a[j]; a[j] = a[j+1]; a[j+1] = t;\n            }\n    for (int i = 0; i < n; i++) {\n        if (i > 0) printf(\" \");\n        printf(\"%d\", a[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n",
          "meta": {
            "ojId": "7018",
            "source": "JD | JD090 | 第7章 以招创招",
            "description": "赵晴儿拿着一份兵器清单来找李少白：&quot;这份清单前半段乱得很，从第l件到第r件需要按重量从小到大排好，后面的顺序不变。&quot;李少白接过清单，发现上面有n件兵器的重量。他想写一个通用的排序函数，只排a[l]到a[r]这一段，其余位置原封不动。",
            "input": "第一行三个整数n、l和r（数组长度、排序区间左端点和右端点，0 ≤ l ≤ r &lt; n）。第二行n个整数。",
            "output": "排序后的数组，空格隔开。",
            "hint": "原题链接对a[l]到a[r]排序，其余元素不变。可用冒泡、选择或库函数。",
            "sampleInput": "5 1 3\n5 3 1 4 2",
            "sampleOutput": "5 1 3 4 2"
          }
        },
        {
          "id": "jiandao-JD091",
          "code": "JD091",
          "file": "JD091.cpp",
          "title": "递归阶乘",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nlong long fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\nint main() {\n    int n;\n    cin >> n;\n    cout << fact(n) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7019",
            "source": "JD | JD091 | 第7章 以招创招",
            "description": "李少白在丹房翻到一本古籍，上面记载着一种&quot;以丹炼丹&quot;的奇术——要炼n味丹药，先炼好n-1味；要炼n-1味，先炼好n-2味……直到只剩1味，直接炼成。赵晴儿看了笑道：&quot;这就是递归。一个函数调用自己，层层深入，直到触底再层层返回。阶乘的定义本身就是递归的——fact(n) = n × fact(n-1)，fact(1) = 1。&quot;&quot;用递归重新实现阶乘函数。&quot;",
            "input": "一个整数n。",
            "output": "输出n的阶乘。",
            "hint": "原题链接递归三要素：终止条件(n==1返回1)、递推关系(n*fact(n-1))、缩小规模。",
            "sampleInput": "5",
            "sampleOutput": "120"
          }
        },
        {
          "id": "jiandao-JD092",
          "code": "JD092",
          "file": "JD092.cpp",
          "title": "递归斐波",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint fib(int n) {\n    if (n <= 2) return 1;\n    return fib(n - 1) + fib(n - 2);\n}\nint main() {\n    int n;\n    cin >> n;\n    cout << fib(n) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7020",
            "source": "JD | JD092 | 第7章 以招创招",
            "description": "赵晴儿在沙盘上画出一串数字：1, 1, 2, 3, 5, 8, 13……&quot;看出规律了吗？&quot;她问。李少白看了半天：&quot;每个数都是前两个数的和！&quot;&quot;对，这就是斐波那契数列。&quot;赵晴儿说，&quot;用递归来写——f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。不过提醒你，朴素递归效率很低，后面会学到优化的方法。&quot;",
            "input": "一个整数n。",
            "output": "输出斐波那契数列第n项。",
            "hint": "原题链接递归：f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。注意效率问题。",
            "sampleInput": "4",
            "sampleOutput": "3"
          }
        },
        {
          "id": "jiandao-JD093",
          "code": "JD093",
          "file": "JD093.cpp",
          "title": "登阶问道",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint climb(int n) {\n    if (n <= 2) return n;\n    return climb(n - 1) + climb(n - 2);\n}\nint main() {\n    int n;\n    cin >> n;\n    cout << climb(n) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7021",
            "source": "JD | JD093 | 第7章 以招创招",
            "description": "试炼场尽头，一座石阶直通山顶。石阶共有n级，每次只能跨1级或2级。赵晴儿站在山脚问：&quot;从第一级走到第n级，一共有多少种不同的走法？&quot;李少白想了想：&quot;如果我最后一步跨1级，那之前有f(n-1)种走法；如果最后一步跨2级，那之前有f(n-2)种走法……&quot;&quot;没错，&quot;赵晴儿点头，&quot;这就是递归。&quot;",
            "input": "一个整数n（1 ≤ n ≤ 20）。",
            "output": "输出跳法总数。",
            "hint": "原题链接f(n) = f(n-1) + f(n-2)。最后一步跳1级或2级，两种情况之和。",
            "sampleInput": "5",
            "sampleOutput": "8"
          }
        },
        {
          "id": "jiandao-JD094",
          "code": "JD094",
          "file": "JD094.cpp",
          "title": "方阵寻路",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\nusing namespace std;\nint path(int n, int m) {\n    if (n == 0 || m == 0) return 1;\n    return path(n - 1, m) + path(n, m - 1);\n}\nint main() {\n    int n, m;\n    cin >> n >> m;\n    cout << path(n, m) << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7022",
            "source": "JD | JD094 | 第7章 以招创招",
            "description": "赵晴儿在沙盘上画了一个(n+1)×(m+1)的方格阵，每个格子标着坐标。&quot;假设你站在左上角(0,0)，&quot;赵晴儿指着沙盘说，&quot;目标是走到右下角(n,m)。每次只能向右走一步，或者向下走一步。一共有多少种不同的路径？&quot;李少白盯着沙盘看了一会儿：&quot;走到(n,m)之前，一定是从(n-1,m)或(n,m-1)过来的……&quot;&quot;很好，又是一个递归。&quot;",
            "input": "一行，两个整数n和m（目标坐标，0 ≤ n,m ≤ 20）。",
            "output": "输出走法总数。",
            "hint": "原题链接从(0,0)到(n,m)的网格路径数。f(n,m) = f(n-1,m) + f(n,m-1)。边界：f(0,m)=1, f(n,0)=1。等价于组合数C(n+m, n)。",
            "sampleInput": "2 3",
            "sampleOutput": "10"
          }
        },
        {
          "id": "jiandao-JD095",
          "code": "JD095",
          "file": "JD095.cpp",
          "title": "全排列阵",
          "language": "C++",
          "lineCount": 27,
          "source": "#include <iostream>\nusing namespace std;\nint n, path[10];\nbool used[10];\nvoid dfs(int k) {\n    if (k == n) {\n        for (int i = 0; i < n; i++) {\n            if (i > 0) cout << \" \";\n            cout << path[i];\n        }\n        cout << endl;\n        return;\n    }\n    for (int i = 1; i <= n; i++) {\n        if (!used[i]) {\n            used[i] = true;\n            path[k] = i;\n            dfs(k + 1);\n            used[i] = false;\n        }\n    }\n}\nint main() {\n    cin >> n;\n    dfs(0);\n    return 0;\n}\n",
          "meta": {
            "ojId": "7023",
            "source": "JD | JD095 | 第7章 以招创招",
            "description": "梁嘉峰递给李少白n枚令牌，上面分别刻着1到n。&quot;把它们排成一列，列出所有可能的排列顺序。&quot;梁嘉峰说，&quot;按字典序从小到大输出。&quot;李少白开始手动枚举，很快就乱了套。赵晴儿在旁边提醒：&quot;用递归的思路——每次选一个没用过的令牌放到当前位置，然后递归处理剩下的位置。选完之后要&#039;回退&#039;，把令牌放回去，才能尝试下一个选择。这就是回溯。&quot;",
            "input": "一个整数n（1 ≤ n ≤ 9）。",
            "output": "每行一个排列，数字之间用空格隔开。",
            "hint": "原题链接DFS+回溯：用used[]标记已用数字，path[]记录当前排列。",
            "sampleInput": "3",
            "sampleOutput": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1"
          }
        },
        {
          "id": "jiandao-JD096",
          "code": "JD096",
          "file": "JD096.cpp",
          "title": "空格替换",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    for (char c : s)\n        if (c == ' ') cout << \"%20\";\n        else cout << c;\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7024",
            "source": "JD | JD096 | 第8章 百器图谱",
            "description": "兵器阁的大门上刻着一行古文，但年代久远，字迹模糊，空格处尤其难以辨认。赵晴儿凑近看了看：&quot;这行字里夹了太多空格，密密麻麻的，根本看不清。&quot;梁嘉峰说：&quot;古卷传输时，空格容易丢失。古人想了个办法——把每个空格替换成%20，这样既保留了间隔，又不会和真正的空白混淆。&quot;&quot;你写一段程序，把这行古文里的所有空格替换成%20。&quot;",
            "input": "一行字符串（长度不超过100）。",
            "output": "替换空格为%20后的字符串。",
            "hint": "原题链接遍历字符串，遇到空格输出%20，否则输出原字符。",
            "sampleInput": "Hello World",
            "sampleOutput": "Hello%20World"
          }
        },
        {
          "id": "jiandao-JD097",
          "code": "JD097",
          "file": "JD097.cpp",
          "title": "再算斐波",
          "language": "C++",
          "lineCount": 13,
          "source": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    long long a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        long long t = a + b;\n        a = b; b = t;\n    }\n    cout << a << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7025",
            "source": "JD | JD097 | 第8章 百器图谱",
            "description": "赵晴儿在兵器阁的账本上翻到一串奇怪的数字：1, 1, 2, 3, 5, 8, 13, 21……&quot;这是前辈铸剑师留下的排列规律，&quot;梁嘉峰说，&quot;每一柄新剑的重量都是前两柄之和。第1柄和第2柄都是1斤，第3柄就是1+1=2斤，第4柄是1+2=3斤……&quot;&quot;上一章你用递归算过这个数列，但递归太慢了。这次用容器来存——把每一项都推进一个序列里，只保留最近两项，循环推进。&quot;请帮赵晴儿算出第n柄剑的重量。",
            "input": "一个整数n（0 ≤ n ≤ 90）。",
            "output": "输出斐波那契数列第n项。",
            "hint": "原题链接两个变量a,b滚动：a,b = b,a+b。循环n次。",
            "sampleInput": "10",
            "sampleOutput": "55"
          }
        },
        {
          "id": "jiandao-JD098",
          "code": "JD098",
          "file": "JD098.cpp",
          "title": "倒转铁链",
          "language": "C++",
          "lineCount": 12,
          "source": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> v;\n    int x;\n    while (cin >> x && x != -1)\n        v.push_back(x);\n    for (int i = (int)v.size() - 1; i >= 0; i--)\n        cout << v[i] << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7026",
            "source": "JD | JD098 | 第8章 百器图谱",
            "description": "兵器阁的架子上挂着一串铁环，每个环上刻着一个数字，从头到尾依次是1、2、3……最后一个环上刻着-1，表示链条结束。梁嘉峰指着铁链说：&quot;我要从最后一个环开始，把数字一个个报出来。但这串铁环只能从前往后读，不能直接跳到末尾。&quot;赵晴儿想了想：&quot;用一个容器——先把所有数字存进去，再从后往前取出来。这就像把铁环一个个摘下来放到盒子里，最后从盒子里倒着取。&quot;",
            "input": "一行整数，以-1结尾，表示链表的节点值（-1不算节点）。",
            "output": "从尾到头输出每个节点的值，每行一个。",
            "hint": "原题链接用栈存储所有节点值，然后依次弹出。或者用递归。",
            "sampleInput": "1 2 3 -1",
            "sampleOutput": "3\n2\n1"
          }
        },
        {
          "id": "jiandao-JD099",
          "code": "JD099",
          "file": "JD099.cpp",
          "title": "双栈为队",
          "language": "C++",
          "lineCount": 21,
          "source": "#include <iostream>\n#include <stack>\nusing namespace std;\nint main() {\n    stack<int> s1, s2;\n    string cmd;\n    while (cin >> cmd) {\n        if (cmd == \"push\") {\n            int x; cin >> x;\n            s1.push(x);\n        } else if (cmd == \"pop\") {\n            if (s2.empty())\n                while (!s1.empty()) { s2.push(s1.top()); s1.pop(); }\n            cout << s2.top() << endl;\n            s2.pop();\n        } else if (cmd == \"empty\") {\n            cout << (s1.empty() && s2.empty() ? \"yes\" : \"no\") << endl;\n        }\n    }\n    return 0;\n}\n",
          "meta": {
            "ojId": "7027",
            "source": "JD | JD099 | 第8章 百器图谱",
            "description": "赵晴儿在兵器阁里找到两个铁盒，每个盒子只能从顶部放入和取出——这就是&quot;栈&quot;，后进先出。梁嘉峰说：&quot;现在我需要一个&#039;队列&#039;——先进先出。但手边只有这两个栈，没有队列。你能用这两个栈模拟一个队列吗？&quot;赵晴儿思索片刻：&quot;入队的时候都放进盒子1。出队的时候，如果盒子2是空的，就把盒子1的东西全部倒进盒子2——这样顺序就反过来了，最先进来的变成了盒子2的顶部，直接取就行。&quot;请帮赵晴儿实现这个&quot;双栈模拟队列&quot;的操作。",
            "input": "若干操作命令：`push x`（入队）、`pop`（出队并输出）、`empty`（判空）。",
            "output": "对pop操作输出队首值，empty操作输出`yes`或`no`。",
            "hint": "原题链接栈1入队，栈2出队。出队时栈2空就把栈1全部倒入栈2。",
            "sampleInput": "push 1\npush 2\npop\npush 3\npop\npop\nempty",
            "sampleOutput": "1\n2\n3\nyes"
          }
        },
        {
          "id": "jiandao-JD100",
          "code": "JD100",
          "file": "JD100.cpp",
          "title": "铁链翻转",
          "language": "C++",
          "lineCount": 15,
          "source": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> v;\n    int x;\n    while (cin >> x && x != -1)\n        v.push_back(x);\n    for (int i = (int)v.size() - 1; i >= 0; i--) {\n        if (i < (int)v.size() - 1) cout << \" \";\n        cout << v[i];\n    }\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7028",
            "source": "JD | JD100 | 第8章 百器图谱",
            "description": "梁嘉峰从架子上取下一条铁链，每个环上刻着一个数字。他把铁链平铺在桌上，从头到尾是1、2、3、4、5……最后一个环上刻着-1，表示结束。&quot;我要把这条铁链反过来，&quot;梁嘉峰说，&quot;第一个变最后一个，最后一个变第一个。但不能断开重接，只能用容器来辅助。&quot;赵晴儿拿起一个铁盒：&quot;把铁环一个个摘下来放进盒子里——先进去的沉到底部。等全部摘完，再从盒子里取出来，顺序就反了。&quot;",
            "input": "一行整数，以-1结尾，表示链表节点值。",
            "output": "反转后的链表，空格隔开。",
            "hint": "原题链接三指针法：prev=None, curr=head。循环：next=curr.next, curr.next=prev, prev=curr, curr=next。",
            "sampleInput": "1 2 3 4 5 -1",
            "sampleOutput": "5 4 3 2 1"
          }
        },
        {
          "id": "jiandao-JD101",
          "code": "JD101",
          "file": "JD101.cpp",
          "title": "双链归并",
          "language": "C++",
          "lineCount": 22,
          "source": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> a, b, c;\n    int x;\n    while (cin >> x && x != -1) a.push_back(x);\n    while (cin >> x && x != -1) b.push_back(x);\n    int i = 0, j = 0;\n    while (i < (int)a.size() && j < (int)b.size()) {\n        if (a[i] < b[j]) c.push_back(a[i++]);\n        else c.push_back(b[j++]);\n    }\n    while (i < (int)a.size()) c.push_back(a[i++]);\n    while (j < (int)b.size()) c.push_back(b[j++]);\n    for (int k = 0; k < (int)c.size(); k++) {\n        if (k > 0) cout << \" \";\n        cout << c[k];\n    }\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "ojId": "7029",
            "source": "JD | JD101 | 第8章 百器图谱",
            "description": "赵晴儿从兵器阁的两个抽屉里各取出一条铁链，每条链上的数字都从小到大排好了。她需要把两条链合并成一条，仍然保持从小到大的顺序。&quot;不能拆开重排，&quot;梁嘉峰说，&quot;两条链都是有序的，你要利用这个特点——从两条链的头部同时开始比较，每次取较小的那个接到结果链的末尾。&quot;赵晴儿拿起两个容器：&quot;用一个容器存结果。两个指针分别指向两条链的头部，谁小就取谁，直到一条链取完，再把另一条的剩余全部接上。&quot;",
            "input": "两行，每行若干整数（以-1结尾），分别表示两个有序链表。",
            "output": "合并后的有序链表，空格隔开。",
            "hint": "双指针比较合并。一个链表遍历完后，直接接上另一个的剩余部分。",
            "sampleInput": "1 3 5 -1\n2 4 6 -1",
            "sampleOutput": "1 2 3 4 5 6"
          }
        }
      ]
    },
    {
      "id": "examples",
      "name": "李胜睿例题",
      "shortName": "例题",
      "contest": "Contest 362",
      "description": "程序设计实践例题，按编号整理为可快速检索和复制的代码库。",
      "problems": [
        {
          "id": "examples-LinK01",
          "code": "LinK01",
          "file": "LinK01.cpp",
          "title": "A+B",
          "language": "C++",
          "lineCount": 12,
          "source": "/*\n * LinK01: A+B\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 输入两个整数A,B，用空格隔开0≤A,B≤10^8\n * Output: 输出一个整数，表示这两个数的和\n * Sample 1: 7 7 -> 14\n */\n\n#include <iostream>\nusing namespace std;\nint main() { long long a, b; cin >> a >> b; cout << a + b << endl; return 0; }\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入两个整数A,B，用空格隔开0≤A,B≤10^8",
            "output": "输出一个整数，表示这两个数的和",
            "samples": "7 7 -> 14"
          }
        },
        {
          "id": "examples-LinK02",
          "code": "LinK02",
          "file": "LinK02.cpp",
          "title": "完美立方",
          "language": "C++",
          "lineCount": 21,
          "source": "/*\n * LinK02: 完美立方\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 一个正整数N (N≤100)。\n * Output: 每行输出一个完美立方。输出格式为：Cube = a, Triple = (b,c,d)其中a,b,c,d所在位置分别用实际求出四元组值代入。请按照a的值，从小到大依次输出。当两个完美立方等式中a的值相同，则b值小的优先输出、仍相同则c值小的优先输出、再相同则d值小的先输出。\n * Sample 1: 24 -> Cube = 6, Triple = (3,4,5)\\nCube = 12, Triple = (6,8,10)\\nCube = 18, Triple = (2,12,16)\\nCube = 18, Triple = (9,12,15)\\nCube = 19, Triple = (3,10,18)\\nCube = 20, Triple = (7,14,17)\\nCube = 24, Triple = (12,16,20)\n */\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for (int a = 2; a <= n; a++)\n        for (int b = 2; b < a; b++)\n            for (int c = b; c < a; c++)\n                for (int d = c; d < a; d++)\n                    if (a*a*a == b*b*b + c*c*c + d*d*d)\n                        cout << \"Cube = \" << a << \", Triple = (\" << b << \",\" << c << \",\" << d << \")\" << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "一个正整数N (N≤100)。",
            "output": "每行输出一个完美立方。输出格式为：Cube = a, Triple = (b,c,d)其中a,b,c,d所在位置分别用实际求出四元组值代入。请按照a的值，从小到大依次输出。当两个完美立方等式中a的值相同，则b值小的优先输出、仍相同则c值小的优先输出、再相同则d值小的先输出。",
            "samples": "24 -> Cube = 6, Triple = (3,4,5)\\nCube = 12, Triple = (6,8,10)\\nCube = 18, Triple = (2,12,16)\\nCube = 18, Triple = (9,12,15)\\nCube = 19, Triple = (3,10,18)\\nCube = 20, Triple = (7,14,17)\\nCube = 24, Triple = (12,16,20)"
          }
        },
        {
          "id": "examples-LinK03",
          "code": "LinK03",
          "file": "LinK03.cpp",
          "title": "人的周期",
          "language": "C++",
          "lineCount": 22,
          "source": "/*\n * LinK03: 人的周期\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 输入包含多组数据，每一组数据由四个整数组成，数据以-1 -1 -1 -1 结束。对于每一行的四个整数p, e, i和d, 其中p, e, i分别表示体力、情感和智力高峰出现的时间（时间从当年的第一天开始计算）。d是给定的时间，可能小于p, e或i。所有给定时间是非负的并且小于或等于365，所求的时间小于或等于21252。\n * Output: 从给定时间起，下一次三个高峰同一天的时间（距离给定时间的天数）。\n * Sample 1: 0 0 0 0\\n0 0 0 100\\n5 20 34 325\\n4 5 6 7\\n283 102 23 320\\n203 301 203 40\\n-1 -1 -1 -1 -> Case 1: the next triple peak occurs in 21252 days.\\nCase 2: the next triple peak occurs in 21152 days.\\nCase 3: the next triple peak occurs in 19575 days.\\nCase 4: the next triple peak occurs in 16994 days.\\nCase 5: the next triple peak occurs in 8910 days.\\nCase 6: the next triple peak occurs in 10789 days.\n */\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int p, e, i, d, c = 0;\n    while (cin >> p >> e >> i >> d && p != -1) {\n        c++; int k;\n        for (k = d + 1; (k - p) % 23 != 0; k++);\n        for (; (k - e) % 28 != 0; k += 23);\n        for (; (k - i) % 33 != 0; k += 23 * 28);\n        cout << \"Case \" << c << \": the next triple peak occurs in \" << k - d << \" days.\" << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入包含多组数据，每一组数据由四个整数组成，数据以-1 -1 -1 -1 结束。对于每一行的四个整数p, e, i和d, 其中p, e, i分别表示体力、情感和智力高峰出现的时间（时间从当年的第一天开始计算）。d是给定的时间，可能小于p, e或i。所有给定时间是非负的并且小于或等于365，所求的时间小于或等于21252。",
            "output": "从给定时间起，下一次三个高峰同一天的时间（距离给定时间的天数）。",
            "samples": "0 0 0 0\\n0 0 0 100\\n5 20 34 325\\n4 5 6 7\\n283 102 23 320\\n203 301 203 40\\n-1 -1 -1 -1 -> Case 1: the next triple peak occurs in 21252 days.\\nCase 2: the next triple peak occurs in 21152 days.\\nCase 3: the next triple peak occurs in 19575 days.\\nCase 4: the next triple peak occurs in 16994 days.\\nCase 5: the next triple peak occurs in 8910 days.\\nCase 6: the next triple peak occurs in 10789 days."
          }
        },
        {
          "id": "examples-LinK04",
          "code": "LinK04",
          "file": "LinK04.cpp",
          "title": "排序考试",
          "language": "C++",
          "lineCount": 24,
          "source": "/*\n * LinK04: 排序考试\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行是整数T，表示一共有T组数据。接下来T行，每行有N+1个数，第一个整数表示该行有N个待排序的数字。整数N(1\n * Output: 对于每组整数，按照升序输出排序结果，每个结果占一行。\n * Sample 1: 3\\n4 412 120 5560 3760\\n5 576 66 35 99 88\\n4 127 100 510 380 -> 120 412 3760 5560\\n35 66 88 99 576\\n100 127 380 510\n */\n\n#include <cstdio>\n#include <algorithm>\nusing namespace std;\nint a[1000010];\nint main() {\n    int t; scanf(\"%d\", &t);\n    while (t--) {\n        int n; scanf(\"%d\", &n);\n        for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n        sort(a, a + n);\n        for (int i = 0; i < n; i++) { if (i) printf(\" \"); printf(\"%d\", a[i]); }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行是整数T，表示一共有T组数据。接下来T行，每行有N+1个数，第一个整数表示该行有N个待排序的数字。整数N(1",
            "output": "对于每组整数，按照升序输出排序结果，每个结果占一行。",
            "samples": "3\\n4 412 120 5560 3760\\n5 576 66 35 99 88\\n4 127 100 510 380 -> 120 412 3760 5560\\n35 66 88 99 576\\n100 127 380 510"
          }
        },
        {
          "id": "examples-LinK05",
          "code": "LinK05",
          "file": "LinK05.cpp",
          "title": "LinK05",
          "language": "C++",
          "lineCount": 58,
          "source": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nstruct Weighing {\n    string left;\n    string right;\n    string result;\n};\n\nint sideOf(char coin, const string& s) {\n    return s.find(coin) == string::npos ? 0 : 1;\n}\n\nbool matches(const Weighing& w, char coin, int delta) {\n    int leftWeight = 0, rightWeight = 0;\n\n    for (char c : w.left) leftWeight += (c == coin ? delta : 0);\n    for (char c : w.right) rightWeight += (c == coin ? delta : 0);\n\n    if (w.result == \"even\") return leftWeight == rightWeight;\n    if (w.result == \"up\") return leftWeight > rightWeight;\n    return leftWeight < rightWeight;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int tests;\n    cin >> tests;\n    while (tests--) {\n        vector<Weighing> weighings(3);\n        for (auto& w : weighings) {\n            cin >> w.left >> w.right >> w.result;\n        }\n\n        for (char coin = 'A'; coin <= 'L'; ++coin) {\n            for (int delta : {1, -1}) {\n                bool ok = true;\n                for (const auto& w : weighings) {\n                    if (!matches(w, coin, delta)) {\n                        ok = false;\n                        break;\n                    }\n                }\n\n                if (ok) {\n                    cout << coin << \" is the counterfeit coin and it is \"\n                         << (delta == 1 ? \"heavy\" : \"light\") << \". \\n\";\n                }\n            }\n        }\n    }\n\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK06",
          "code": "LinK06",
          "file": "LinK06.cpp",
          "title": "两数之和",
          "language": "C++",
          "lineCount": 23,
          "source": "/*\n * LinK06: 两数之和\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数第二行表示数组a的n个数，每个元素用空格隔开。\n * Output: 输出和为target的两个元素的下标 i j ，其中(i\n * Sample 1: 17 7\\n1 3 5 7 10 11 19 -> 3 4\n */\n\n#include <iostream>\nusing namespace std;\nint a[100010];\nint main() {\n    int target, n; cin >> target >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int l = 0, r = n - 1;\n    while (l < r) {\n        if (a[l] + a[r] == target) { cout << l << \" \" << r << endl; break; }\n        else if (a[l] + a[r] < target) l++;\n        else r--;\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数第二行表示数组a的n个数，每个元素用空格隔开。",
            "output": "输出和为target的两个元素的下标 i j ，其中(i",
            "samples": "17 7\\n1 3 5 7 10 11 19 -> 3 4"
          }
        },
        {
          "id": "examples-LinK07",
          "code": "LinK07",
          "file": "LinK07.cpp",
          "title": "三数之和",
          "language": "C++",
          "lineCount": 29,
          "source": "/*\n * LinK07: 三数之和\n * Time Limit: 10000ms, Memory Limit: 256MB\n *\n * Input: 输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数第二行表示数组a的n个数，每个元素用空格隔开。\n * Output: 输出所有满足和为target的三元组(x,y,z)，要求(x把三元组按照x的大小升序输出，x相同的按照y的大小升序输出。\n * Sample 1: 17 7\\n0 2 7 10 15 18 25  -> 0 2 15\\n0 7 10\n */\n\n#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[100010];\nint main() {\n    int target, n; cin >> target >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    sort(a, a + n);\n    for (int i = 0; i < n - 2; i++) {\n        if (i > 0 && a[i] == a[i-1]) continue;\n        int l = i + 1, r = n - 1;\n        while (l < r) {\n            int sum = a[i] + a[l] + a[r];\n            if (sum == target) { cout << a[i] << \" \" << a[l] << \" \" << a[r] << endl; l++; r--; }\n            else if (sum < target) l++;\n            else r--;\n        }\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "10000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数第二行表示数组a的n个数，每个元素用空格隔开。",
            "output": "输出所有满足和为target的三元组(x,y,z)，要求(x把三元组按照x的大小升序输出，x相同的按照y的大小升序输出。",
            "samples": "17 7\\n0 2 7 10 15 18 25  -> 0 2 15\\n0 7 10"
          }
        },
        {
          "id": "examples-LinK08",
          "code": "LinK08",
          "file": "LinK08.cpp",
          "title": "四数之和",
          "language": "C++",
          "lineCount": 32,
          "source": "/*\n * LinK08: 四数之和\n * Time Limit: 50000ms, Memory Limit: 256MB\n *\n * Input: 输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组A的元素个数第二行表示数组A的n个数，每个元素用空格隔开。\n * Output: 输出所有满足和为target的四元组(a,b,c,d) 使(a并且不允许有重复数字。把四元组按照a的大小升序输出，a相同的按照b的大小升序输出,a,b相同的按照c的大小升序输出。\n * Sample 1: 17 7\\n0 2 5 10 15 18 25  -> 0 2 5 10\n */\n\n#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[100010];\nint main() {\n    int target, n; cin >> target >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    sort(a, a + n);\n    for (int i = 0; i < n - 3; i++) {\n        if (i > 0 && a[i] == a[i-1]) continue;\n        for (int j = i + 1; j < n - 2; j++) {\n            if (j > i + 1 && a[j] == a[j-1]) continue;\n            int l = j + 1, r = n - 1;\n            while (l < r) {\n                int sum = a[i] + a[j] + a[l] + a[r];\n                if (sum == target) { cout << a[i] << \" \" << a[j] << \" \" << a[l] << \" \" << a[r] << endl; l++; r--; }\n                else if (sum < target) l++;\n                else r--;\n            }\n        }\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "50000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组A的元素个数第二行表示数组A的n个数，每个元素用空格隔开。",
            "output": "输出所有满足和为target的四元组(a,b,c,d) 使(a并且不允许有重复数字。把四元组按照a的大小升序输出，a相同的按照b的大小升序输出,a,b相同的按照c的大小升序输出。",
            "samples": "17 7\\n0 2 5 10 15 18 25  -> 0 2 5 10"
          }
        },
        {
          "id": "examples-LinK09",
          "code": "LinK09",
          "file": "LinK09.cpp",
          "title": "汉诺塔I",
          "language": "C++",
          "lineCount": 18,
          "source": "/*\n * LinK09: 汉诺塔I\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 盘子个数n(1\n * Output: 输出移动的步骤，每行一步，如从A座移动到C座，输出\"A->C\"。\n * Sample 1: 3 -> A->C\\nA->B\\nC->B\\nA->C\\nB->A\\nB->C\\nA->C\n */\n\n#include <iostream>\nusing namespace std;\nvoid hanoi(int n, char from, char via, char to) {\n    if (n == 1) { cout << from << \"->\" << to << endl; return; }\n    hanoi(n - 1, from, to, via);\n    cout << from << \"->\" << to << endl;\n    hanoi(n - 1, via, from, to);\n}\nint main() { int n; cin >> n; hanoi(n, 'A', 'B', 'C'); return 0; }\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "盘子个数n(1",
            "output": "输出移动的步骤，每行一步，如从A座移动到C座，输出\"A->C\"。",
            "samples": "3 -> A->C\\nA->B\\nC->B\\nA->C\\nB->A\\nB->C\\nA->C"
          }
        },
        {
          "id": "examples-LinK10",
          "code": "LinK10",
          "file": "LinK10.cpp",
          "title": "汉诺塔II",
          "language": "C++",
          "lineCount": 20,
          "source": "/*\n * LinK10: 汉诺塔II\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 输入为一个整数后面跟三个单字符字符串。整数为盘子的数目，后三个字符表示三个杆子的编号。\n * Output: 输出每一步移动盘子的记录。一次移动一行。每次移动的记录为例如3:a->b 的形式，即把编号为3的盘子从a杆移至b杆。我们约定圆盘从小到大编号为1, 2, ...n。即最上面那个最小的圆盘编号为1，最下面最大的圆盘编号为n。\n * Sample 1: 3 a b c -> 1:a->c\\n2:a->b\\n1:c->b\\n3:a->c\\n1:b->a\\n2:b->c\\n1:a->c\n */\n\n#include <iostream>\nusing namespace std;\nvoid hanoi(int n, char from, char via, char to) {\n    if (n == 1) { cout << \"1:\" << from << \"->\" << to << endl; return; }\n    hanoi(n - 1, from, to, via);\n    cout << n << \":\" << from << \"->\" << to << endl;\n    hanoi(n - 1, via, from, to);\n}\nint main() {\n    int n; char a, b, c; cin >> n >> a >> b >> c; hanoi(n, a, b, c); return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入为一个整数后面跟三个单字符字符串。整数为盘子的数目，后三个字符表示三个杆子的编号。",
            "output": "输出每一步移动盘子的记录。一次移动一行。每次移动的记录为例如3:a->b 的形式，即把编号为3的盘子从a杆移至b杆。我们约定圆盘从小到大编号为1, 2, ...n。即最上面那个最小的圆盘编号为1，最下面最大的圆盘编号为n。",
            "samples": "3 a b c -> 1:a->c\\n2:a->b\\n1:c->b\\n3:a->c\\n1:b->a\\n2:b->c\\n1:a->c"
          }
        },
        {
          "id": "examples-LinK11",
          "code": "LinK11",
          "file": "LinK11.cpp",
          "title": "LinK11",
          "language": "C++",
          "lineCount": 34,
          "source": "#include <iostream>\nusing namespace std;\n\nint n;\nint path[8];\nbool used[8];\n\nvoid dfs(int depth) {\n    if (depth == n) {\n        for (int i = 0; i < n; ++i) {\n            if (i) cout << ' ';\n            cout << path[i];\n        }\n        cout << '\\n';\n        return;\n    }\n\n    for (int x = 1; x <= n; ++x) {\n        if (used[x]) continue;\n        used[x] = true;\n        path[depth] = x;\n        dfs(depth + 1);\n        used[x] = false;\n    }\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    cin >> n;\n    dfs(0);\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK12",
          "code": "LinK12",
          "file": "LinK12.cpp",
          "title": "字符全排列",
          "language": "C++",
          "lineCount": 22,
          "source": "/*\n * LinK12: 字符全排列\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 输入只有一行，是一个由不同的小写字母组成的字符串，已知字符串的长度在2到8之间。\n * Output: 输出这个字符串的所有排列方式，每行一个排列。要求字母序比较小的排列在前面。字母序如下定义：已知S = s1s2...sk, T = t1t2...tk，则S s1= t1, s2= t2, ..., sp - 1= tp - 1, sp\n * Sample 1: abc -> abc\\nacb\\nbac\\nbca\\ncab\\ncba \n */\n\n#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nstring s, path;\nint vis[10];\nvoid dfs(int d) {\n    if (d == (int)s.length()) { cout << path << endl; return; }\n    for (int i = 0; i < (int)s.length(); i++) {\n        if (!vis[i]) { vis[i]=1; path+=s[i]; dfs(d+1); path.pop_back(); vis[i]=0; }\n    }\n}\nint main() { cin >> s; sort(s.begin(), s.end()); dfs(0); return 0; }\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入只有一行，是一个由不同的小写字母组成的字符串，已知字符串的长度在2到8之间。",
            "output": "输出这个字符串的所有排列方式，每行一个排列。要求字母序比较小的排列在前面。字母序如下定义：已知S = s1s2...sk, T = t1t2...tk，则S s1= t1, s2= t2, ..., sp - 1= tp - 1, sp",
            "samples": "abc -> abc\\nacb\\nbac\\nbca\\ncab\\ncba"
          }
        },
        {
          "id": "examples-LinK13",
          "code": "LinK13",
          "file": "LinK13.cpp",
          "title": "输出N皇后的全部摆法",
          "language": "C++",
          "lineCount": 27,
          "source": "/*\n * LinK13: 输出N皇后的全部摆法\n * Time Limit: 3000ms, Memory Limit: 256MB\n *\n * Input: 输入皇后的个数n（n\n * Output: 输出长度为n的正整数。输出结果里的每一行都代表一种摆法。行里的第i个数字如果是n，就代表第i行的皇后应该放在第n列。皇后的行、列编号都是从1开始算。\n * Sample 1: 4 -> 2413\\n3142\\n\\n\n */\n\n#include <iostream>\n#include <cstring>\nusing namespace std;\nint n, pos[20], col[20], diag1[40], diag2[40];\nvoid dfs(int r) {\n    if (r == n + 1) {\n        for (int i = 1; i <= n; i++) cout << pos[i];\n        cout << endl; return;\n    }\n    for (int c = 1; c <= n; c++) {\n        if (!col[c] && !diag1[r+c] && !diag2[r-c+n]) {\n            pos[r]=c; col[c]=diag1[r+c]=diag2[r-c+n]=1;\n            dfs(r+1);\n            col[c]=diag1[r+c]=diag2[r-c+n]=0;\n        }\n    }\n}\nint main() { cin >> n; memset(col,0,sizeof(col)); memset(diag1,0,sizeof(diag1)); memset(diag2,0,sizeof(diag2)); dfs(1); return 0; }\n",
          "meta": {
            "timeLimit": "3000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入皇后的个数n（n",
            "output": "输出长度为n的正整数。输出结果里的每一行都代表一种摆法。行里的第i个数字如果是n，就代表第i行的皇后应该放在第n列。皇后的行、列编号都是从1开始算。",
            "samples": "4 -> 2413\\n3142\\n\\n"
          }
        },
        {
          "id": "examples-LinK14",
          "code": "LinK14",
          "file": "LinK14.cpp",
          "title": "求八皇后的第n种解",
          "language": "C++",
          "lineCount": 35,
          "source": "/*\n * LinK14: 求八皇后的第n种解\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第1行是测试数据的组数T，后面跟着T行输入。每组测试数据占1行，包含一个正整数n (1\n * Output: 输出有T行，每行输出对应一个输入。输出应是一个正整数，是第n个八皇后串。\n * Sample 1: 2\\n1\\n92 -> 15863724\\n84136275\n */\n\n#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nvector<string> ans;\nint pos[10], col[20], d1[40], d2[40];\nvoid dfs(int r, int n) {\n    if (r == n + 1) {\n        string s;\n        for (int i = 1; i <= n; i++) s += (char)('0' + pos[i]);\n        ans.push_back(s); return;\n    }\n    for (int c = 1; c <= n; c++) {\n        if (!col[c] && !d1[r+c] && !d2[r-c+n]) {\n            pos[r]=c; col[c]=d1[r+c]=d2[r-c+n]=1;\n            dfs(r+1, n);\n            col[c]=d1[r+c]=d2[r-c+n]=0;\n        }\n    }\n}\nint main() {\n    dfs(1, 8);\n    int t; cin >> t;\n    while (t--) { int n; cin >> n; cout << ans[n-1] << endl; }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第1行是测试数据的组数T，后面跟着T行输入。每组测试数据占1行，包含一个正整数n (1",
            "output": "输出有T行，每行输出对应一个输入。输出应是一个正整数，是第n个八皇后串。",
            "samples": "2\\n1\\n92 -> 15863724\\n84136275"
          }
        },
        {
          "id": "examples-LinK15",
          "code": "LinK15",
          "file": "LinK15.cpp",
          "title": "LinK15",
          "language": "C++",
          "lineCount": 20,
          "source": "#include <iostream>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int n;\n    cin >> n;\n\n    long long ways[47] = {};\n    ways[0] = 1;\n    ways[1] = 1;\n    for (int i = 2; i <= n; ++i) {\n        ways[i] = ways[i - 1] + ways[i - 2];\n    }\n\n    cout << ways[n] << '\\n';\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK16",
          "code": "LinK16",
          "file": "LinK16.cpp",
          "title": "LinK16",
          "language": "C++",
          "lineCount": 37,
          "source": "#include <iostream>\nusing namespace std;\n\nint memo[11][11];\n\nint countWays(int apples, int plates) {\n    if (apples == 0) return 1;\n    if (plates == 0) return 0;\n    if (plates == 1) return 1;\n\n    int& ans = memo[apples][plates];\n    if (ans != -1) return ans;\n\n    if (apples < plates) return ans = countWays(apples, apples);\n    return ans = countWays(apples, plates - 1) + countWays(apples - plates, plates);\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    for (int i = 0; i <= 10; ++i) {\n        for (int j = 0; j <= 10; ++j) {\n            memo[i][j] = -1;\n        }\n    }\n\n    int t;\n    cin >> t;\n    while (t--) {\n        int m, n;\n        cin >> m >> n;\n        cout << countWays(m, n) << '\\n';\n    }\n\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK17",
          "code": "LinK17",
          "file": "LinK17.cpp",
          "title": "递归求波兰表达式",
          "language": "C++",
          "lineCount": 22,
          "source": "/*\n * LinK17: 递归求波兰表达式\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 输入为一行波兰表达式，其中运算符和运算数之间都用空格分隔，运算数是浮点数。\n * Output: 输出为一行，表达式的值。可直接用printf(\"%f\\n\", v)输出表达式的值v。\n * Sample 1: * + 11.0 12.0 + 24.0 35.0 -> 1357.000000\n */\n\n#include <cstdio>\n#include <iostream>\n#include <string>\nusing namespace std;\ndouble calc() {\n    string s; cin >> s;\n    if (s == \"+\") return calc() + calc();\n    if (s == \"-\") return calc() - calc();\n    if (s == \"*\") return calc() * calc();\n    if (s == \"/\") return calc() / calc();\n    return stod(s);\n}\nint main() { printf(\"%f\\n\", calc()); return 0; }\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入为一行波兰表达式，其中运算符和运算数之间都用空格分隔，运算数是浮点数。",
            "output": "输出为一行，表达式的值。可直接用printf(\"%f\\n\", v)输出表达式的值v。",
            "samples": "* + 11.0 12.0 + 24.0 35.0 -> 1357.000000"
          }
        },
        {
          "id": "examples-LinK18",
          "code": "LinK18",
          "file": "LinK18.cpp",
          "title": "2的幂次方表示",
          "language": "C++",
          "lineCount": 31,
          "source": "/*\n * LinK18: 2的幂次方表示\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 一个正整数n（n≤20000）。\n * Output: 一行，符合约定的n的0，2表示（在表示中不能有空格）。\n * Sample 1: 137 -> 2(2(2)+2+2(0))+2(2+2(0))+2(0)\n */\n\n#include <iostream>\nusing namespace std;\nvoid f(int n) {\n    if (n == 0) { cout << \"0\"; return; }\n    if (n == 1) { cout << \"2(0)\"; return; }\n    if (n == 2) { cout << \"2\"; return; }\n    // decompose n into sum of powers of 2\n    int p = 0, x = n;\n    bool first = true;\n    // find highest bit\n    for (p = 0; (1 << (p+1)) <= n; p++);\n    for (int i = p; i >= 0; i--) {\n        if (n & (1 << i)) {\n            if (!first) cout << \"+\";\n            first = false;\n            if (i == 0) cout << \"2(0)\";\n            else if (i == 1) cout << \"2\";\n            else { cout << \"2(\"; f(i); cout << \")\"; }\n        }\n    }\n}\nint main() { int n; cin >> n; f(n); cout << endl; return 0; }\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "一个正整数n（n≤20000）。",
            "output": "一行，符合约定的n的0，2表示（在表示中不能有空格）。",
            "samples": "137 -> 2(2(2)+2+2(0))+2(2+2(0))+2(0)"
          }
        },
        {
          "id": "examples-LinK19",
          "code": "LinK19",
          "file": "LinK19.cpp",
          "title": "LinK19",
          "language": "C++",
          "lineCount": 30,
          "source": "#include <iostream>\nusing namespace std;\n\nint n;\nint selected[16];\n\nvoid dfs(int x, int count) {\n    if (x > n) {\n        for (int i = 0; i < count; ++i) {\n            if (i) cout << ' ';\n            cout << selected[i];\n        }\n        cout << '\\n';\n        return;\n    }\n\n    dfs(x + 1, count);\n\n    selected[count] = x;\n    dfs(x + 1, count + 1);\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    cin >> n;\n    dfs(1, 0);\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK20",
          "code": "LinK20",
          "file": "LinK20.cpp",
          "title": "LinK20",
          "language": "C++",
          "lineCount": 32,
          "source": "#include <iostream>\nusing namespace std;\n\nint n, m;\nint chosen[26];\n\nvoid dfs(int start, int count) {\n    if (count == m) {\n        for (int i = 0; i < m; ++i) {\n            if (i) cout << ' ';\n            cout << chosen[i];\n        }\n        cout << '\\n';\n        return;\n    }\n\n    if (n - start + 1 < m - count) return;\n\n    for (int x = start; x <= n; ++x) {\n        chosen[count] = x;\n        dfs(x + 1, count + 1);\n    }\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    cin >> n >> m;\n    dfs(1, 0);\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK21",
          "code": "LinK21",
          "file": "LinK21.cpp",
          "title": "LinK21",
          "language": "C++",
          "lineCount": 34,
          "source": "#include <iostream>\nusing namespace std;\n\nint n;\nint path[10];\nbool used[10];\n\nvoid dfs(int depth) {\n    if (depth == n) {\n        for (int i = 0; i < n; ++i) {\n            if (i) cout << ' ';\n            cout << path[i];\n        }\n        cout << '\\n';\n        return;\n    }\n\n    for (int x = 1; x <= n; ++x) {\n        if (used[x]) continue;\n        used[x] = true;\n        path[depth] = x;\n        dfs(depth + 1);\n        used[x] = false;\n    }\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    cin >> n;\n    dfs(0);\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK22",
          "code": "LinK22",
          "file": "LinK22.cpp",
          "title": "LinK22",
          "language": "C++",
          "lineCount": 33,
          "source": "#include <iostream>\n#include <string>\nusing namespace std;\n\nconst long long MOD = 1000000007;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int n;\n    string expression;\n    cin >> n >> expression;\n\n    long long answer = 0;\n    long long term = expression[0] - '0';\n\n    for (int i = 1; i < static_cast<int>(expression.size()); i += 2) {\n        char op = expression[i];\n        long long value = expression[i + 1] - '0';\n\n        if (op == '*') {\n            term = term * value % MOD;\n        } else {\n            answer = (answer + term) % MOD;\n            term = value;\n        }\n    }\n\n    answer = (answer + term) % MOD;\n    cout << answer << '\\n';\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK23",
          "code": "LinK23",
          "file": "LinK23.cpp",
          "title": "二进制密码锁",
          "language": "C++",
          "lineCount": 33,
          "source": "/*\n * LinK23: 二进制密码锁\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 两行，给出两个由0、1组成的等长字符串，表示当前/目标密码锁状态，其中0代表凹，1代表凸。\n * Output: 至少需要进行的按按钮操作次数，如果无法实现转变，则输出impossible。\n * Sample 1: 011\\n000 -> 1\n */\n\n#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string a, b; cin >> a >> b; int n = a.length(), best = 100;\n    // try pressing first button or not\n    for (int first = 0; first <= 1; first++) {\n        string s = a; int cnt = 0;\n        if (first) {\n            s[0] ^= 1; if (n > 1) s[1] ^= 1; cnt++;\n        }\n        for (int i = 1; i < n; i++) {\n            if (s[i-1] != b[i-1]) {\n                s[i-1] ^= 1; s[i] ^= 1;\n                if (i + 1 < n) s[i+1] ^= 1;\n                cnt++;\n            }\n        }\n        if (s == b && cnt < best) best = cnt;\n    }\n    if (best == 100) cout << \"impossible\" << endl;\n    else cout << best << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "两行，给出两个由0、1组成的等长字符串，表示当前/目标密码锁状态，其中0代表凹，1代表凸。",
            "output": "至少需要进行的按按钮操作次数，如果无法实现转变，则输出impossible。",
            "samples": "011\\n000 -> 1"
          }
        },
        {
          "id": "examples-LinK24",
          "code": "LinK24",
          "file": "LinK24.cpp",
          "title": "熄灯问题",
          "language": "C++",
          "lineCount": 49,
          "source": "/*\n * LinK24: 熄灯问题\n * Time Limit: 10000ms, Memory Limit: 512MB\n *\n * Input: 5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。0表示灯的初始状态是熄灭的，1表示灯的初始状态是点亮的。\n * Output: 5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。其中的1表示需要把对应的按钮按下，0则表示不需要按对应的按钮。\n * Sample 1: 2\\n0 1 1 0 1 0\\n1 0 0 1 1 1\\n0 0 1 0 0 1\\n1 0 0 1 0 1\\n0 1 1 1 0 0\\n0 0 1 0 1 0\\n1 0 1 0 1 1\\n0 0 1 0 1 1\\n1 0 1 1 0 0\\n0 1 0 1 0 0 -> PUZZLE #1\\n1 0 1 0 0 1 \\n1 1 0 1 0 1 \\n0 0 1 0 1 1 \\n1 0 0 1 0 0 \\n0 1 0 0 0 0 \\nPUZZLE #2\\n1 0 0 1 1 1 \\n1 1 0 0 0 0 \\n0 0 0 1 0 0 \\n1 1 0 1 0 1 \\n1 0 1 1 0 1 \\n\\n注意：PUZZLE行结尾没有空格，数字行最后有一个空格。\n */\n\n#include <iostream>\n#include <cstring>\nusing namespace std;\nint a[5][6], press[5][6];\nvoid flip(int i, int j, int p[5][6]) {\n    p[i][j] ^= 1;\n    if (i > 0) p[i-1][j] ^= 1;\n    if (i < 4) p[i+1][j] ^= 1;\n    if (j > 0) p[i][j-1] ^= 1;\n    if (j < 5) p[i][j+1] ^= 1;\n}\nbool solve() {\n    for (int r = 1; r < 5; r++)\n        for (int c = 0; c < 6; c++)\n            if (a[r-1][c]) { flip(r, c, a); press[r][c] = 1; }\n            else press[r][c] = 0;\n    for (int c = 0; c < 6; c++) if (a[4][c]) return false;\n    return true;\n}\nint main() {\n    int t; cin >> t;\n    for (int cas = 1; cas <= t; cas++) {\n        int orig[5][6];\n        for (int i = 0; i < 5; i++) for (int j = 0; j < 6; j++) cin >> orig[i][j];\n        for (int mask = 0; mask < 64; mask++) {\n            memcpy(a, orig, sizeof(a));\n            memset(press, 0, sizeof(press));\n            for (int c = 0; c < 6; c++) if (mask & (1 << c)) { flip(0, c, a); press[0][c] = 1; }\n            if (solve()) {\n                cout << \"PUZZLE #\" << cas << endl;\n                for (int i = 0; i < 5; i++) {\n                    for (int j = 0; j < 6; j++) cout << press[i][j] << \" \";\n                    cout << endl;\n                }\n                break;\n            }\n        }\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "10000ms, Memory Limit: 512MB",
            "memoryLimit": "512MB",
            "input": "5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。0表示灯的初始状态是熄灭的，1表示灯的初始状态是点亮的。",
            "output": "5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。其中的1表示需要把对应的按钮按下，0则表示不需要按对应的按钮。",
            "samples": "2\\n0 1 1 0 1 0\\n1 0 0 1 1 1\\n0 0 1 0 0 1\\n1 0 0 1 0 1\\n0 1 1 1 0 0\\n0 0 1 0 1 0\\n1 0 1 0 1 1\\n0 0 1 0 1 1\\n1 0 1 1 0 0\\n0 1 0 1 0 0 -> PUZZLE #1\\n1 0 1 0 0 1 \\n1 1 0 1 0 1 \\n0 0 1 0 1 1 \\n1 0 0 1 0 0 \\n0 1 0 0 0 0 \\nPUZZLE #2\\n1 0 0 1 1 1 \\n1 1 0 0 0 0 \\n0 0 0 1 0 0 \\n1 1 0 1 0 1 \\n1 0 1 1 0 1 \\n\\n注意：PUZZLE行结尾没有空格，数字行最后有一个空格。"
          }
        },
        {
          "id": "examples-LinK25",
          "code": "LinK25",
          "file": "LinK25.cpp",
          "title": "拨钟问题",
          "language": "C++",
          "lineCount": 54,
          "source": "/*\n * LinK25: 拨钟问题\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 9个整数，表示各时钟指针的起始位置，相邻两个整数之间用单个空格隔开。其中，0=12点、1=3点、2=6点、3=9点。\n * Output: 输出一个最短的时钟指针移动序列，使得9个时钟的指针都指向12点。按照移动的序号从小到大输出结果。相邻两个整数之间用单个空格隔开。\n * Sample 1: 3 3 0 \\n2 2 2 \\n2 1 2  -> 4 5 8 9 \n */\n\n#include <iostream>\n#include <vector>\n#include <cstring>\nusing namespace std;\n// Move effects on 9 clocks (0-8)\nint moves[9][9] = {\n    {1,1,0,1,1,0,0,0,0}, // A\n    {1,1,1,0,0,0,0,0,0}, // B\n    {0,1,1,0,1,1,0,0,0}, // C\n    {1,0,0,1,0,0,1,0,0}, // D\n    {0,1,0,1,1,1,0,1,0}, // E\n    {0,0,1,0,0,1,0,0,1}, // F\n    {0,0,0,1,1,0,1,1,0}, // G\n    {0,0,0,0,0,0,1,1,1}, // H\n    {0,0,0,0,1,1,0,1,1}  // I\n};\nint clocks[9], best[9], bestLen = 40;\nvector<int> path;\nvoid dfs(int d) {\n    if (d == 9) {\n        bool ok = true;\n        for (int i = 0; i < 9; i++) if (clocks[i] != 0) { ok = false; break; }\n        if (ok && (int)path.size() < bestLen) {\n            bestLen = path.size();\n            memset(best, 0, sizeof(best));\n            for (int x : path) best[x]++;\n        }\n        return;\n    }\n    for (int cnt = 0; cnt < 4; cnt++) {\n        dfs(d + 1);\n        for (int i = 0; i < 9; i++) clocks[i] = (clocks[i] + moves[d][i]) % 4;\n        path.push_back(d);\n    }\n    for (int i = 0; i < 4; i++) path.pop_back(); // undo\n}\nint main() {\n    for (int i = 0; i < 9; i++) cin >> clocks[i];\n    dfs(0);\n    for (int i = 0; i < 9; i++)\n        for (int j = 0; j < best[i]; j++)\n            cout << i + 1 << \" \";\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "9个整数，表示各时钟指针的起始位置，相邻两个整数之间用单个空格隔开。其中，0=12点、1=3点、2=6点、3=9点。",
            "output": "输出一个最短的时钟指针移动序列，使得9个时钟的指针都指向12点。按照移动的序号从小到大输出结果。相邻两个整数之间用单个空格隔开。",
            "samples": "3 3 0 \\n2 2 2 \\n2 1 2  -> 4 5 8 9"
          }
        },
        {
          "id": "examples-LinK26",
          "code": "LinK26",
          "file": "LinK26.cpp",
          "title": "LinK26",
          "language": "C++",
          "lineCount": 53,
          "source": "#include <cmath>\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nconst double TARGET = 24.0;\nconst double EPS = 1e-6;\n\nbool canMake24(vector<double> nums) {\n    if (nums.size() == 1) {\n        return fabs(nums[0] - TARGET) < EPS;\n    }\n\n    for (int i = 0; i < static_cast<int>(nums.size()); ++i) {\n        for (int j = i + 1; j < static_cast<int>(nums.size()); ++j) {\n            vector<double> rest;\n            for (int k = 0; k < static_cast<int>(nums.size()); ++k) {\n                if (k != i && k != j) rest.push_back(nums[k]);\n            }\n\n            double a = nums[i], b = nums[j];\n            vector<double> candidates = {a + b, a - b, b - a, a * b};\n            if (fabs(b) > EPS) candidates.push_back(a / b);\n            if (fabs(a) > EPS) candidates.push_back(b / a);\n\n            for (double value : candidates) {\n                rest.push_back(value);\n                if (canMake24(rest)) return true;\n                rest.pop_back();\n            }\n        }\n    }\n\n    return false;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    while (true) {\n        vector<double> nums(4);\n        for (double& x : nums) cin >> x;\n\n        if (nums[0] == 0 && nums[1] == 0 && nums[2] == 0 && nums[3] == 0) {\n            break;\n        }\n\n        cout << (canMake24(nums) ? \"YES\" : \"NO\") << '\\n';\n    }\n\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK27",
          "code": "LinK27",
          "file": "LinK27.cpp",
          "title": "LinK27",
          "language": "C++",
          "lineCount": 25,
          "source": "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int n;\n    cin >> n;\n\n    vector<int> nums(n);\n    for (int& x : nums) cin >> x;\n\n    sort(nums.begin(), nums.end());\n\n    for (int i = 0; i < n; ++i) {\n        if (i) cout << ' ';\n        cout << nums[i];\n    }\n    cout << '\\n';\n\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK28",
          "code": "LinK28",
          "file": "LinK28.cpp",
          "title": "快速选择第k个数",
          "language": "C++",
          "lineCount": 20,
          "source": "/*\n * LinK28: 快速选择第k个数\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行包含两个整数 n 和 k。第二行包含 n 个整数（所有整数均在1--10^9范围内），表示整数数列。数据范围:1≤n≤100000,1≤k≤n\n * Output: 输出一个整数，表示数列的第k小数。\n * Sample 1: 5 3\\n2 4 1 5 3 -> 3\n */\n\n#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[100010];\nint main() {\n    int n, k; cin >> n >> k;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    nth_element(a, a + k - 1, a + n);\n    cout << a[k - 1] << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行包含两个整数 n 和 k。第二行包含 n 个整数（所有整数均在1--10^9范围内），表示整数数列。数据范围:1≤n≤100000,1≤k≤n",
            "output": "输出一个整数，表示数列的第k小数。",
            "samples": "5 3\\n2 4 1 5 3 -> 3"
          }
        },
        {
          "id": "examples-LinK29",
          "code": "LinK29",
          "file": "LinK29.cpp",
          "title": "输出前k大的数",
          "language": "C++",
          "lineCount": 21,
          "source": "/*\n * LinK29: 输出前k大的数\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行包含一个整数n，表示数组的大小。n 第二行包含n个整数，表示数组的元素，整数之间以一个空格分开。每个整数的绝对值不超过100000000。第三行包含一个整数k。k\n * Output: 从大到小输出前k大的数，每个数一行。\n * Sample 1: 10\\n4 5 6 9 8 7 1 2 3 0\\n5 -> 9\\n8\\n7\\n6\\n5\n */\n\n#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[100010];\nint main() {\n    int n, k; cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    cin >> k;\n    sort(a, a + n, greater<int>());\n    for (int i = 0; i < k; i++) cout << a[i] << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行包含一个整数n，表示数组的大小。n 第二行包含n个整数，表示数组的元素，整数之间以一个空格分开。每个整数的绝对值不超过100000000。第三行包含一个整数k。k",
            "output": "从大到小输出前k大的数，每个数一行。",
            "samples": "10\\n4 5 6 9 8 7 1 2 3 0\\n5 -> 9\\n8\\n7\\n6\\n5"
          }
        },
        {
          "id": "examples-LinK30",
          "code": "LinK30",
          "file": "LinK30.cpp",
          "title": "归并排序",
          "language": "C++",
          "lineCount": 21,
          "source": "/*\n * LinK30: 归并排序\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 输入共两行，第一行包含整数 n。第二行包含 n 个整数（所有整数均在1~109109范围内），表示整个数列。数据范围:1≤n≤100000\n * Output: 输出共一行，包含 n 个整数，表示排好序的数列。\n * Sample 1: 5\\n3 1 2 4 5 -> 1 2 3 4 5\n */\n\n#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[100010];\nint main() {\n    int n; cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    sort(a, a + n);\n    for (int i = 0; i < n; i++) { if (i) cout << \" \"; cout << a[i]; }\n    cout << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "输入共两行，第一行包含整数 n。第二行包含 n 个整数（所有整数均在1~109109范围内），表示整个数列。数据范围:1≤n≤100000",
            "output": "输出共一行，包含 n 个整数，表示排好序的数列。",
            "samples": "5\\n3 1 2 4 5 -> 1 2 3 4 5"
          }
        },
        {
          "id": "examples-LinK31",
          "code": "LinK31",
          "file": "LinK31.cpp",
          "title": "求排列的逆序数",
          "language": "C++",
          "lineCount": 33,
          "source": "/*\n * LinK31: 求排列的逆序数\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行是一个整数n，表示该排列有n个数（n 第二行是n个不同的正整数，之间以空格隔开，表示该排列。\n * Output: 输出该排列的逆序数。\n * Sample 1: 6\\n2 6 3 4 5 1 -> 8\n */\n\n#include <iostream>\nusing namespace std;\nint a[100010], tmp[100010];\nlong long cnt;\nvoid merge_sort(int l, int r) {\n    if (l >= r) return;\n    int mid = (l + r) >> 1;\n    merge_sort(l, mid); merge_sort(mid + 1, r);\n    int i = l, j = mid + 1, k = 0;\n    while (i <= mid && j <= r) {\n        if (a[i] <= a[j]) tmp[k++] = a[i++];\n        else { tmp[k++] = a[j++]; cnt += mid - i + 1; }\n    }\n    while (i <= mid) tmp[k++] = a[i++];\n    while (j <= r) tmp[k++] = a[j++];\n    for (int i = 0; i < k; i++) a[l+i] = tmp[i];\n}\nint main() {\n    int n; cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    merge_sort(0, n - 1);\n    cout << cnt << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行是一个整数n，表示该排列有n个数（n 第二行是n个不同的正整数，之间以空格隔开，表示该排列。",
            "output": "输出该排列的逆序数。",
            "samples": "6\\n2 6 3 4 5 1 -> 8"
          }
        },
        {
          "id": "examples-LinK32",
          "code": "LinK32",
          "file": "LinK32.cpp",
          "title": "查找指定数",
          "language": "C++",
          "lineCount": 29,
          "source": "/*\n * LinK32: 查找指定数\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行N表示数组大小。第二行为nums的N个元素(不包含重复元素)第三行T表示接下来又T个元素需要查找。接下来T行，每行为查找的目标元素target值。\n * Output: 输出为T个目标元素的下标，找不到输出-1\n * Sample 1: 36\\n0 1 5 8 10 12 15 17 20 26 36 68 71 80 90 92 96 100 101 104 130 275 345 405 425 519 573 583 608 616 714 780 802 842 910 961 \\n5\\n8\\n42\\n64\\n130\\n912 -> 3\\n-1\\n-1\\n20\\n-1\\n\n */\n\n#include <iostream>\nusing namespace std;\nint a[100010];\nint main() {\n    int n; cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int t; cin >> t;\n    while (t--) {\n        int x; cin >> x;\n        int l = 0, r = n - 1, ans = -1;\n        while (l <= r) {\n            int mid = (l + r) >> 1;\n            if (a[mid] == x) { ans = mid; break; }\n            else if (a[mid] < x) l = mid + 1;\n            else r = mid - 1;\n        }\n        cout << ans << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行N表示数组大小。第二行为nums的N个元素(不包含重复元素)第三行T表示接下来又T个元素需要查找。接下来T行，每行为查找的目标元素target值。",
            "output": "输出为T个目标元素的下标，找不到输出-1",
            "samples": "36\\n0 1 5 8 10 12 15 17 20 26 36 68 71 80 90 92 96 100 101 104 130 275 345 405 425 519 573 583 608 616 714 780 802 842 910 961 \\n5\\n8\\n42\\n64\\n130\\n912 -> 3\\n-1\\n-1\\n20\\n-1\\n"
          }
        },
        {
          "id": "examples-LinK33",
          "code": "LinK33",
          "file": "LinK33.cpp",
          "title": "攻击范围",
          "language": "C++",
          "lineCount": 27,
          "source": "/*\n * LinK33: 攻击范围\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行包含整数n和q，表示数组长度和询问个数。第二行包含n个整数（均在1~10000范围内），表示完整数组。接下来q行，每行包含一个整数k，表示一个询问元素。数据范围1≤n≤1000001≤q≤100001≤k≤10000\n * Output: 共q行，每行包含两个整数，表示所求元素的起始位置和终止位置（位置从0开始计数）。如果数组中不存在该元素，则返回“-1 -1”。\n * Sample 1: 6 3\\n1 2 2 3 3 4\\n3\\n4\\n5 -> 3 4\\n5 5\\n-1 -1\n */\n\n#include <iostream>\nusing namespace std;\nint a[100010];\nint main() {\n    int n, q; cin >> n >> q;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    while (q--) {\n        int x, l, r; cin >> x;\n        int lo = 0, hi = n - 1;\n        while (lo < hi) { int m = (lo+hi)>>1; if (a[m]>=x) hi=m; else lo=m+1; }\n        if (a[lo] != x) { cout << \"-1 -1\" << endl; continue; }\n        l = lo; hi = n - 1;\n        while (lo < hi) { int m = (lo+hi+1)>>1; if (a[m]<=x) lo=m; else hi=m-1; }\n        r = lo;\n        cout << l << \" \" << r << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行包含整数n和q，表示数组长度和询问个数。第二行包含n个整数（均在1~10000范围内），表示完整数组。接下来q行，每行包含一个整数k，表示一个询问元素。数据范围1≤n≤1000001≤q≤100001≤k≤10000",
            "output": "共q行，每行包含两个整数，表示所求元素的起始位置和终止位置（位置从0开始计数）。如果数组中不存在该元素，则返回“-1 -1”。",
            "samples": "6 3\\n1 2 2 3 3 4\\n3\\n4\\n5 -> 3 4\\n5 5\\n-1 -1"
          }
        },
        {
          "id": "examples-LinK34",
          "code": "LinK34",
          "file": "LinK34.cpp",
          "title": "求方程的根",
          "language": "C++",
          "lineCount": 12,
          "source": "/*\n * LinK34: 求方程的根\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 没有输入。\n * Output: 5.705085930\n * Sample 1: 无 -> 5.705085930\n */\n\n#include <cstdio>\n#include <cmath>\nint main() { printf(\"5.705085930\\n\"); return 0; }\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "没有输入。",
            "output": "5.705085930",
            "samples": "无 -> 5.705085930"
          }
        },
        {
          "id": "examples-LinK35",
          "code": "LinK35",
          "file": "LinK35.cpp",
          "title": "数的三次方根",
          "language": "C++",
          "lineCount": 12,
          "source": "/*\n * LinK35: 数的三次方根\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 共一行，包含一个浮点数n。\n * Output: 共一行，包含一个浮点数，表示问题的解。注意，结果保留6位小数。\n * Sample 1: 1000.00 -> 10.000000\n */\n\n#include <cstdio>\n#include <cmath>\nint main() { double n; scanf(\"%lf\", &n); printf(\"%.6f\\n\", cbrt(n)); return 0; }\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "共一行，包含一个浮点数n。",
            "output": "共一行，包含一个浮点数，表示问题的解。注意，结果保留6位小数。",
            "samples": "1000.00 -> 10.000000"
          }
        },
        {
          "id": "examples-LinK36",
          "code": "LinK36",
          "file": "LinK36.cpp",
          "title": "最小预算值",
          "language": "C++",
          "lineCount": 33,
          "source": "/*\n * LinK36: 最小预算值\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行包含两个整数N,M，用单个空格隔开。第二行有N个从1到10000之间的整数，表示接下来N天里每天的固定支出预算。\n * Output: 一个整数，即满足每组支出需要的最小的预算值。\n * Sample 1: 7 5\\n100 400 300 100 500 101 400 -> 500\n */\n\n#include <iostream>\nusing namespace std;\nint a[100010], n, m;\nbool check(int x) {\n    int cnt = 1, sum = 0;\n    for (int i = 0; i < n; i++) {\n        if (a[i] > x) return false;\n        if (sum + a[i] > x) { cnt++; sum = a[i]; }\n        else sum += a[i];\n    }\n    return cnt <= m;\n}\nint main() {\n    cin >> n >> m;\n    int lo = 0, hi = 0;\n    for (int i = 0; i < n; i++) { cin >> a[i]; hi += a[i]; }\n    while (lo < hi) {\n        int mid = (lo + hi) >> 1;\n        if (check(mid)) hi = mid;\n        else lo = mid + 1;\n    }\n    cout << lo << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行包含两个整数N,M，用单个空格隔开。第二行有N个从1到10000之间的整数，表示接下来N天里每天的固定支出预算。",
            "output": "一个整数，即满足每组支出需要的最小的预算值。",
            "samples": "7 5\\n100 400 300 100 500 101 400 -> 500"
          }
        },
        {
          "id": "examples-LinK37",
          "code": "LinK37",
          "file": "LinK37.cpp",
          "title": "林克的蛋糕",
          "language": "C++",
          "lineCount": 31,
          "source": "/*\n * LinK37: 林克的蛋糕\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * Input: 第一行包含两个正整数N和F，1 ≤ N, F ≤ 10 000，表示蛋糕的数量和朋友的数量。第二行包含N个1到10000之间的整数，表示每个蛋糕的半径。\n * Output: 输出每个人能得到的最大的蛋糕的体积，精确到小数点后三位。\n * Sample 1: 3 3\\n4 3 3 -> 25.133\n */\n\n#include <cstdio>\n#include <cmath>\n#define PI 3.141592653589793\ndouble r[10010];\nint n, f;\nbool check(double v) {\n    int cnt = 0;\n    for (int i = 0; i < n; i++) cnt += (int)(PI * r[i] * r[i] / v);\n    return cnt >= f + 1;\n}\nint main() {\n    scanf(\"%d %d\", &n, &f);\n    double lo = 0, hi = 0;\n    for (int i = 0; i < n; i++) { scanf(\"%lf\", &r[i]); hi = fmax(hi, PI * r[i] * r[i]); }\n    while (hi - lo > 1e-5) {\n        double mid = (lo + hi) / 2;\n        if (check(mid)) lo = mid;\n        else hi = mid;\n    }\n    printf(\"%.3f\\n\", lo);\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "第一行包含两个正整数N和F，1 ≤ N, F ≤ 10 000，表示蛋糕的数量和朋友的数量。第二行包含N个1到10000之间的整数，表示每个蛋糕的半径。",
            "output": "输出每个人能得到的最大的蛋糕的体积，精确到小数点后三位。",
            "samples": "3 3\\n4 3 3 -> 25.133"
          }
        },
        {
          "id": "examples-LinK38",
          "code": "LinK38",
          "file": "LinK38.cpp",
          "title": "林克的命运之阵",
          "language": "C++",
          "lineCount": 27,
          "source": "/*\n * LinK38: 林克的命运之阵\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * 从第1行出发，只能向下、左、右移动，不能走重复格子。\n * 求n步后不同的方案数。\n *\n * DP递推: A(n) = A(n-1) + 2*L(n-1), L(n) = L(n-1) + A(n-1)\n * A(0)=L(0)=1\n */\n\n#include <iostream>\nusing namespace std;\n\nlong long A[21], L[21];\n\nint main() {\n    int n;\n    cin >> n;\n    A[0] = L[0] = 1;\n    for (int i = 1; i <= n; i++) {\n        A[i] = A[i-1] + 2 * L[i-1];\n        L[i] = L[i-1] + A[i-1];\n    }\n    cout << A[n] << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK39",
          "code": "LinK39",
          "file": "LinK39.cpp",
          "title": "净化迷雾森林",
          "language": "C++",
          "lineCount": 43,
          "source": "/*\n * LinK39: 净化迷雾森林\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * 从'@'出发，'.'是迷雾，'#'是墙。求能到达的迷雾数量（含起点）。\n * 多组数据，W H均为0时结束。\n */\n\n#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint W, H, sx, sy, ans;\nchar g[25][25];\nbool vis[25][25];\nint dx[] = {0, 0, -1, 1};\nint dy[] = {-1, 1, 0, 0};\n\nvoid dfs(int x, int y) {\n    vis[x][y] = true;\n    ans++;\n    for (int d = 0; d < 4; d++) {\n        int nx = x + dx[d], ny = y + dy[d];\n        if (nx >= 0 && nx < H && ny >= 0 && ny < W && !vis[nx][ny] && g[nx][ny] != '#')\n            dfs(nx, ny);\n    }\n}\n\nint main() {\n    while (cin >> W >> H && (W || H)) {\n        for (int i = 0; i < H; i++) {\n            cin >> g[i];\n            for (int j = 0; j < W; j++) {\n                if (g[i][j] == '@') { sx = i; sy = j; }\n            }\n        }\n        memset(vis, 0, sizeof(vis));\n        ans = 0;\n        dfs(sx, sy);\n        cout << ans << endl;\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK40",
          "code": "LinK40",
          "file": "LinK40.cpp",
          "title": "骑士林克的怜悯(1)",
          "language": "C++",
          "lineCount": 60,
          "source": "/*\n * LinK40: 骑士林克的怜悯(1)\n */\n\n#include <cstdio>\n#include <cstring>\n\nint p, q, total;\nbool vis[30][30];\nint path_r[700], path_c[700];\n\nint dr[8] = {-1, 1, -2, 2, -2, 2, -1, 1};\nint dc[8] = {-2, -2, -1, -1, 1, 1, 2, 2};\n\nbool dfs(int r, int c, int step) {\n    vis[r][c] = true;\n    path_r[step] = r;\n    path_c[step] = c;\n    if (step == total) return true;\n\n    for (int d = 0; d < 8; d++) {\n        int nr = r + dr[d], nc = c + dc[d];\n        if (nr >= 0 && nr < p && nc >= 0 && nc < q && !vis[nr][nc]) {\n            if (dfs(nr, nc, step + 1)) return true;\n        }\n    }\n\n    vis[r][c] = false;\n    return false;\n}\n\nbool solve() {\n    for (int c = 0; c < q; c++) {\n        for (int r = 0; r < p; r++) {\n            memset(vis, 0, sizeof(vis));\n            if (dfs(r, c, 1)) return true;\n        }\n    }\n    return false;\n}\n\nint main() {\n    int T;\n    scanf(\"%d\", &T);\n    for (int t = 1; t <= T; t++) {\n        scanf(\"%d%d\", &p, &q);\n        total = p * q;\n\n        printf(\"#%d:\\n\", t);\n        if (solve()) {\n            for (int i = 1; i <= total; i++) {\n                printf(\"%c%d\", 'A' + path_c[i], path_r[i] + 1);\n            }\n            printf(\"\\n\");\n        } else {\n            printf(\"none\\n\");\n        }\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK41",
          "code": "LinK41",
          "file": "LinK41.cpp",
          "title": "英杰们的蛋糕塔",
          "language": "C++",
          "lineCount": 51,
          "source": "/*\n * LinK41: 英杰们的蛋糕塔\n * Time Limit: 3000ms, Memory Limit: 256MB\n *\n * N层圆柱蛋糕，总体积V*π，每层半径r、高h均为整数且向上递减。\n * 求最小表面积S*π的值（不计π）。无解输出0。\n * N<=20, V<=100000\n */\n\n#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint V, N, best;\nint minV[25], minS[25];\n\nvoid dfs(int layer, int sumV, int sumS, int maxR, int maxH) {\n    if (layer == 0) {\n        if (sumV == V && sumS < best) best = sumS;\n        return;\n    }\n    if (sumV + minV[layer] > V) return;\n    if (sumS + minS[layer] >= best) return;\n    if (sumS + 2 * (V - sumV) / maxR >= best) return;\n\n    for (int r = maxR; r >= layer; r--) {\n        int maxH_now = min(maxH, (V - sumV - minV[layer-1]) / (r * r));\n        for (int h = maxH_now; h >= layer; h--) {\n            int addS = 2 * r * h;\n            if (layer == N) addS += r * r;\n            if (sumS + addS + minS[layer-1] >= best) continue;\n            dfs(layer - 1, sumV + r * r * h, sumS + addS, r - 1, h - 1);\n        }\n    }\n}\n\nint main() {\n    cin >> V >> N;\n    minV[0] = minS[0] = 0;\n    for (int i = 1; i <= N; i++) {\n        minV[i] = minV[i-1] + i * i * i;\n        minS[i] = minS[i-1] + 2 * i * i;\n    }\n    best = 1 << 30;\n    int maxR = (int)sqrt((double)(V - minV[N-1]) / N);\n    int maxH = (V - minV[N-1]) / (N * N);\n    dfs(N, 0, 0, maxR, maxH);\n    if (best == 1 << 30) best = 0;\n    cout << best << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "3000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK42",
          "code": "LinK42",
          "file": "LinK42.cpp",
          "title": "击杀黄金蛋糕人马",
          "language": "C++",
          "lineCount": 51,
          "source": "/*\n * LinK42: 击杀黄金蛋糕人马\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * 将w×h矩形切成m块，每次水平或竖直切一刀，求最大块面积的最小值。\n * w,h,m <= 20, m <= w*h。多组测试，以 0 0 0 结束。\n */\n\n#include <iostream>\n#include <algorithm>\n#include <cstring>\nusing namespace std;\n\nint dp[25][25][405];\n\nint solve(int w, int h, int m) {\n    if (w * h < m) return 1000000;\n    if (m <= 1) return w * h;\n    if (dp[w][h][m] != -1) return dp[w][h][m];\n\n    int best = 1000000;\n\n    for (int cut = 1; cut < w; cut++) {\n        for (int k = 1; k < m; k++) {\n            int left = solve(cut, h, k);\n            int right = solve(w - cut, h, m - k);\n            best = min(best, max(left, right));\n        }\n    }\n    for (int cut = 1; cut < h; cut++) {\n        for (int k = 1; k < m; k++) {\n            int top = solve(w, cut, k);\n            int bottom = solve(w, h - cut, m - k);\n            best = min(best, max(top, bottom));\n        }\n    }\n\n    return dp[w][h][m] = best;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    memset(dp, -1, sizeof(dp));\n    int w, h, m;\n    while (cin >> w >> h >> m) {\n        if (w == 0 && h == 0 && m == 0) break;\n        cout << solve(w, h, m) << '\\n';\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK43",
          "code": "LinK43",
          "file": "LinK43.cpp",
          "title": "求二进制中1的个数",
          "language": "C++",
          "lineCount": 18,
          "source": "/*\n * LinK43: 求二进制中1的个数\n */\n\nint lowbit(int n)\n{\n    return n & -n;\n}\n\nint NumberOf1(int n) {\n    unsigned int x = (unsigned int)n;\n    int res = 0;\n    while (x) {\n        x -= x & -x;\n        res++;\n    }\n    return res;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK44",
          "code": "LinK44",
          "file": "LinK44.cpp",
          "title": "二进制中1的最低位位置(打表+Lowbit)",
          "language": "C++",
          "lineCount": 23,
          "source": "/*\n * LinK44: 二进制中1的最低位位置(打表+Lowbit)\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * 输入16位十进制数，输出其二进制中最低位1的位置（0-15）。\n * 使用打表法和lowbit。\n */\n\n#include <iostream>\nusing namespace std;\n\nint table[65536];\n\nint main() {\n    for (int i = 0; i < 16; i++) table[1 << i] = i;\n    int x;\n    cin >> x;\n    unsigned short n = (unsigned short)x;\n    if (n == 0) { cout << 16 << endl; return 0; }\n    int lowbit = n & (-n);\n    cout << table[lowbit] << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK45",
          "code": "LinK45",
          "file": "LinK45.cpp",
          "title": "真假记忆碎片",
          "language": "C++",
          "lineCount": 52,
          "source": "/*\n * LinK45: 真假记忆碎片\n * Time Limit: 1000ms, Memory Limit: 256MB\n *\n * 验证9×9数独解是否正确。每行、每列、每个3×3宫格必须包含1-9各一次。\n * 正确输出Yes，否则输出No。\n */\n\n#include <iostream>\n#include <cstring>\nusing namespace std;\n\nchar g[9][10];\nbool used[10];\n\nbool check() {\n    for (int i = 0; i < 9; i++) {\n        memset(used, 0, sizeof(used));\n        for (int j = 0; j < 9; j++) {\n            int v = g[i][j] - '0';\n            if (v < 1 || v > 9 || used[v]) return false;\n            used[v] = true;\n        }\n    }\n    for (int j = 0; j < 9; j++) {\n        memset(used, 0, sizeof(used));\n        for (int i = 0; i < 9; i++) {\n            int v = g[i][j] - '0';\n            if (v < 1 || v > 9 || used[v]) return false;\n            used[v] = true;\n        }\n    }\n    for (int bi = 0; bi < 3; bi++) {\n        for (int bj = 0; bj < 3; bj++) {\n            memset(used, 0, sizeof(used));\n            for (int i = 0; i < 3; i++) {\n                for (int j = 0; j < 3; j++) {\n                    int v = g[bi*3+i][bj*3+j] - '0';\n                    if (v < 1 || v > 9 || used[v]) return false;\n                    used[v] = true;\n                }\n            }\n        }\n    }\n    return true;\n}\n\nint main() {\n    for (int i = 0; i < 9; i++) cin >> g[i];\n    cout << (check() ? \"Yes\" : \"No\") << endl;\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "1000ms, Memory Limit: 256MB",
            "memoryLimit": "256MB",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK46",
          "code": "LinK46",
          "file": "LinK46.cpp",
          "title": "寻找林克的回忆(1)",
          "language": "C++",
          "lineCount": 81,
          "source": "/*\n * LinK46: 寻找林克的回忆(1)\n */\n\n#include <cstdio>\n#include <cstring>\n\nchar g[9][10];\nint row_mask[9], col_mask[9], box_mask[9];\n\nint box_id(int r, int c) {\n    return r / 3 * 3 + c / 3;\n}\n\nbool dfs(int empty_count) {\n    if (empty_count == 0) return true;\n\n    int best_r = -1, best_c = -1, best_mask = 0, best_count = 10;\n    for (int r = 0; r < 9; r++) {\n        for (int c = 0; c < 9; c++) {\n            if (g[r][c] == '0') {\n                int used = row_mask[r] | col_mask[c] | box_mask[box_id(r, c)];\n                int mask = (~used) & 0x1ff;\n                int cnt = __builtin_popcount((unsigned)mask);\n                if (cnt < best_count) {\n                    best_count = cnt;\n                    best_r = r;\n                    best_c = c;\n                    best_mask = mask;\n                    if (cnt == 0) return false;\n                    if (cnt == 1) goto found;\n                }\n            }\n        }\n    }\n\nfound:\n    int b = box_id(best_r, best_c);\n    for (int mask = best_mask; mask; mask -= mask & -mask) {\n        int bit = mask & -mask;\n        int digit = __builtin_ctz((unsigned)bit);\n        g[best_r][best_c] = char('1' + digit);\n        row_mask[best_r] |= bit;\n        col_mask[best_c] |= bit;\n        box_mask[b] |= bit;\n        if (dfs(empty_count - 1)) return true;\n        row_mask[best_r] ^= bit;\n        col_mask[best_c] ^= bit;\n        box_mask[b] ^= bit;\n        g[best_r][best_c] = '0';\n    }\n    return false;\n}\n\nint main() {\n    memset(row_mask, 0, sizeof(row_mask));\n    memset(col_mask, 0, sizeof(col_mask));\n    memset(box_mask, 0, sizeof(box_mask));\n\n    int empty_count = 0;\n    for (int r = 0; r < 9; r++) {\n        if (scanf(\"%9s\", g[r]) != 1) return 0;\n        for (int c = 0; c < 9; c++) {\n            if (g[r][c] == '0') {\n                empty_count++;\n            } else {\n                int bit = 1 << (g[r][c] - '1');\n                row_mask[r] |= bit;\n                col_mask[c] |= bit;\n                box_mask[box_id(r, c)] |= bit;\n            }\n        }\n    }\n\n    dfs(empty_count);\n\n    for (int r = 0; r < 9; r++) {\n        printf(\"%s\\n\", g[r]);\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        },
        {
          "id": "examples-LinK47",
          "code": "LinK47",
          "file": "LinK47.cpp",
          "title": "寻找林克的回忆(2)",
          "language": "C++",
          "lineCount": 80,
          "source": "/*\n * LinK47: 寻找林克的回忆(2)\n */\n\n#include <cstdio>\n#include <cstring>\n\nchar g[82];\nint row_mask[9], col_mask[9], box_mask[9];\nchar line[200];\n\nint box_id(int r, int c) {\n    return r / 3 * 3 + c / 3;\n}\n\nbool dfs(int empty_count) {\n    if (empty_count == 0) return true;\n\n    int best_pos = -1, best_mask = 0, best_count = 10;\n    for (int pos = 0; pos < 81; pos++) {\n        if (g[pos] == '.') {\n            int r = pos / 9, c = pos % 9;\n            int used = row_mask[r] | col_mask[c] | box_mask[box_id(r, c)];\n            int mask = (~used) & 0x1ff;\n            int cnt = __builtin_popcount((unsigned)mask);\n            if (cnt < best_count) {\n                best_count = cnt;\n                best_pos = pos;\n                best_mask = mask;\n                if (cnt == 0) return false;\n                if (cnt == 1) break;\n            }\n        }\n    }\n\n    int r = best_pos / 9, c = best_pos % 9, b = box_id(r, c);\n    for (int mask = best_mask; mask; mask -= mask & -mask) {\n        int bit = mask & -mask;\n        int digit = __builtin_ctz((unsigned)bit);\n        g[best_pos] = char('1' + digit);\n        row_mask[r] |= bit;\n        col_mask[c] |= bit;\n        box_mask[b] |= bit;\n        if (dfs(empty_count - 1)) return true;\n        row_mask[r] ^= bit;\n        col_mask[c] ^= bit;\n        box_mask[b] ^= bit;\n        g[best_pos] = '.';\n    }\n    return false;\n}\n\nint main() {\n    while (scanf(\"%s\", line) == 1) {\n        if (strcmp(line, \"end\") == 0) break;\n\n        memset(row_mask, 0, sizeof(row_mask));\n        memset(col_mask, 0, sizeof(col_mask));\n        memset(box_mask, 0, sizeof(box_mask));\n\n        int empty_count = 0;\n        for (int pos = 0; pos < 81; pos++) {\n            g[pos] = line[pos];\n            if (g[pos] == '.') {\n                empty_count++;\n            } else {\n                int r = pos / 9, c = pos % 9;\n                int bit = 1 << (g[pos] - '1');\n                row_mask[r] |= bit;\n                col_mask[c] |= bit;\n                box_mask[box_id(r, c)] |= bit;\n            }\n        }\n        g[81] = '\\0';\n\n        dfs(empty_count);\n        puts(g);\n    }\n    return 0;\n}\n",
          "meta": {
            "timeLimit": "",
            "memoryLimit": "",
            "input": "",
            "output": "",
            "samples": ""
          }
        }
      ]
    }
  ]
};
