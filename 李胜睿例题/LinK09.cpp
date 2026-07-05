/*
 * LinK09: 汉诺塔I
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 盘子个数n(1
 * Output: 输出移动的步骤，每行一步，如从A座移动到C座，输出"A->C"。
 * Sample 1: 3 -> A->C\nA->B\nC->B\nA->C\nB->A\nB->C\nA->C
 */

#include <iostream>
using namespace std;
void hanoi(int n, char from, char via, char to) {
    if (n == 1) { cout << from << "->" << to << endl; return; }
    hanoi(n - 1, from, to, via);
    cout << from << "->" << to << endl;
    hanoi(n - 1, via, from, to);
}
int main() { int n; cin >> n; hanoi(n, 'A', 'B', 'C'); return 0; }
