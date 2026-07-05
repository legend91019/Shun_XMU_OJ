/*
 * LinK10: 汉诺塔II
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 输入为一个整数后面跟三个单字符字符串。整数为盘子的数目，后三个字符表示三个杆子的编号。
 * Output: 输出每一步移动盘子的记录。一次移动一行。每次移动的记录为例如3:a->b 的形式，即把编号为3的盘子从a杆移至b杆。我们约定圆盘从小到大编号为1, 2, ...n。即最上面那个最小的圆盘编号为1，最下面最大的圆盘编号为n。
 * Sample 1: 3 a b c -> 1:a->c\n2:a->b\n1:c->b\n3:a->c\n1:b->a\n2:b->c\n1:a->c
 */

#include <iostream>
using namespace std;
void hanoi(int n, char from, char via, char to) {
    if (n == 1) { cout << "1:" << from << "->" << to << endl; return; }
    hanoi(n - 1, from, to, via);
    cout << n << ":" << from << "->" << to << endl;
    hanoi(n - 1, via, from, to);
}
int main() {
    int n; char a, b, c; cin >> n >> a >> b >> c; hanoi(n, a, b, c); return 0;
}
