/*
 * LinK24: 熄灯问题
 * Time Limit: 10000ms, Memory Limit: 512MB
 *
 * Input: 5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。0表示灯的初始状态是熄灭的，1表示灯的初始状态是点亮的。
 * Output: 5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。其中的1表示需要把对应的按钮按下，0则表示不需要按对应的按钮。
 * Sample 1: 2\n0 1 1 0 1 0\n1 0 0 1 1 1\n0 0 1 0 0 1\n1 0 0 1 0 1\n0 1 1 1 0 0\n0 0 1 0 1 0\n1 0 1 0 1 1\n0 0 1 0 1 1\n1 0 1 1 0 0\n0 1 0 1 0 0 -> PUZZLE #1\n1 0 1 0 0 1 \n1 1 0 1 0 1 \n0 0 1 0 1 1 \n1 0 0 1 0 0 \n0 1 0 0 0 0 \nPUZZLE #2\n1 0 0 1 1 1 \n1 1 0 0 0 0 \n0 0 0 1 0 0 \n1 1 0 1 0 1 \n1 0 1 1 0 1 \n\n注意：PUZZLE行结尾没有空格，数字行最后有一个空格。
 */

#include <iostream>
#include <cstring>
using namespace std;
int a[5][6], press[5][6];
void flip(int i, int j, int p[5][6]) {
    p[i][j] ^= 1;
    if (i > 0) p[i-1][j] ^= 1;
    if (i < 4) p[i+1][j] ^= 1;
    if (j > 0) p[i][j-1] ^= 1;
    if (j < 5) p[i][j+1] ^= 1;
}
bool solve() {
    for (int r = 1; r < 5; r++)
        for (int c = 0; c < 6; c++)
            if (a[r-1][c]) { flip(r, c, a); press[r][c] = 1; }
            else press[r][c] = 0;
    for (int c = 0; c < 6; c++) if (a[4][c]) return false;
    return true;
}
int main() {
    int t; cin >> t;
    for (int cas = 1; cas <= t; cas++) {
        int orig[5][6];
        for (int i = 0; i < 5; i++) for (int j = 0; j < 6; j++) cin >> orig[i][j];
        for (int mask = 0; mask < 64; mask++) {
            memcpy(a, orig, sizeof(a));
            memset(press, 0, sizeof(press));
            for (int c = 0; c < 6; c++) if (mask & (1 << c)) { flip(0, c, a); press[0][c] = 1; }
            if (solve()) {
                cout << "PUZZLE #" << cas << endl;
                for (int i = 0; i < 5; i++) {
                    for (int j = 0; j < 6; j++) cout << press[i][j] << " ";
                    cout << endl;
                }
                break;
            }
        }
    }
    return 0;
}
