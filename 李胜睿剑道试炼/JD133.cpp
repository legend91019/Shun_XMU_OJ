/*
 * JD133: 算筹求值
 */

#include <iostream>
#include <stack>
#include <string>
using namespace std;

stack<int> num;   // 数字栈
stack<char> op;   // 运算符栈

// 获取运算符优先级
int priority(char c) {
    if (c == '+' || c == '-') return 1;
    if (c == '*' || c == '/') return 2;
    return 0;
}

// 计算一次
void eval() {
    int b = num.top(); num.pop();
    int a = num.top(); num.pop();
    char c = op.top(); op.pop();
    
    int res;
    if (c == '+') res = a + b;
    else if (c == '-') res = a - b;
    else if (c == '*') res = a * b;
    else res = a / b;
    
    num.push(res);
}

int main() {
    string s;
    cin >> s;
    
    for (int i = 0; i < s.length(); i++) {
        char c = s[i];
        
        if (isdigit(c)) {
            // 解析数字（可能是多位数）
            int x = 0;
            while (i < s.length() && isdigit(s[i])) {
                x = x * 10 + (s[i] - '0');
                i++;
            }
            i--;
            num.push(x);
        } else if (c == '(') {
            op.push(c);
        } else if (c == ')') {
            // 一直算到左括号
            while (op.top() != '(') {
                eval();
            }
            op.pop();  // 弹出左括号
        } else {
            // 运算符：如果栈顶优先级 >= 当前优先级，先算栈顶
            while (!op.empty() && priority(op.top()) >= priority(c)) {
                eval();
            }
            op.push(c);
        }
    }
    
    // 计算剩余的运算符
    while (!op.empty()) {
        eval();
    }
    
    cout << num.top() << endl;
    
    return 0;
}
