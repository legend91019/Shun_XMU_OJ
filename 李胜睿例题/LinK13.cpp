/*
 * LinK13: 输出N皇后的全部摆法
 * Time Limit: 3000ms, Memory Limit: 256MB
 *
 * Input: 输入皇后的个数n（n
 * Output: 输出长度为n的正整数。输出结果里的每一行都代表一种摆法。行里的第i个数字如果是n，就代表第i行的皇后应该放在第n列。皇后的行、列编号都是从1开始算。
 * Sample 1: 4 -> 2413\n3142\n\n
 */

#include <iostream>
#include <cstring>
using namespace std;
int n, pos[20], col[20], diag1[40], diag2[40];
void dfs(int r) {
    if (r == n + 1) {
        for (int i = 1; i <= n; i++) cout << pos[i];
        cout << endl; return;
    }
    for (int c = 1; c <= n; c++) {
        if (!col[c] && !diag1[r+c] && !diag2[r-c+n]) {
            pos[r]=c; col[c]=diag1[r+c]=diag2[r-c+n]=1;
            dfs(r+1);
            col[c]=diag1[r+c]=diag2[r-c+n]=0;
        }
    }
}
int main() { cin >> n; memset(col,0,sizeof(col)); memset(diag1,0,sizeof(diag1)); memset(diag2,0,sizeof(diag2)); dfs(1); return 0; }
