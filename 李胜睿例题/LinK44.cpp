/*
 * LinK44: 二进制中1的最低位位置(打表+Lowbit)
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * 输入16位十进制数，输出其二进制中最低位1的位置（0-15）。
 * 使用打表法和lowbit。
 */

#include <iostream>
using namespace std;

int table[65536];

int main() {
    for (int i = 0; i < 16; i++) table[1 << i] = i;
    int x;
    cin >> x;
    unsigned short n = (unsigned short)x;
    if (n == 0) { cout << 16 << endl; return 0; }
    int lowbit = n & (-n);
    cout << table[lowbit] << endl;
    return 0;
}
