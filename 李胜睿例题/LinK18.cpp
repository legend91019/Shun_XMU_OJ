/*
 * LinK18: 2的幂次方表示
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 一个正整数n（n≤20000）。
 * Output: 一行，符合约定的n的0，2表示（在表示中不能有空格）。
 * Sample 1: 137 -> 2(2(2)+2+2(0))+2(2+2(0))+2(0)
 */

#include <iostream>
using namespace std;
void f(int n) {
    if (n == 0) { cout << "0"; return; }
    if (n == 1) { cout << "2(0)"; return; }
    if (n == 2) { cout << "2"; return; }
    // decompose n into sum of powers of 2
    int p = 0, x = n;
    bool first = true;
    // find highest bit
    for (p = 0; (1 << (p+1)) <= n; p++);
    for (int i = p; i >= 0; i--) {
        if (n & (1 << i)) {
            if (!first) cout << "+";
            first = false;
            if (i == 0) cout << "2(0)";
            else if (i == 1) cout << "2";
            else { cout << "2("; f(i); cout << ")"; }
        }
    }
}
int main() { int n; cin >> n; f(n); cout << endl; return 0; }
