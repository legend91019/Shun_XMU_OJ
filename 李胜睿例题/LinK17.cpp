/*
 * LinK17: 递归求波兰表达式
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 输入为一行波兰表达式，其中运算符和运算数之间都用空格分隔，运算数是浮点数。
 * Output: 输出为一行，表达式的值。可直接用printf("%f\n", v)输出表达式的值v。
 * Sample 1: * + 11.0 12.0 + 24.0 35.0 -> 1357.000000
 */

#include <cstdio>
#include <iostream>
#include <string>
using namespace std;
double calc() {
    string s; cin >> s;
    if (s == "+") return calc() + calc();
    if (s == "-") return calc() - calc();
    if (s == "*") return calc() * calc();
    if (s == "/") return calc() / calc();
    return stod(s);
}
int main() { printf("%f\n", calc()); return 0; }
