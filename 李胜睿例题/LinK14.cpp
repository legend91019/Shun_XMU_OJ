/*
 * LinK14: 求八皇后的第n种解
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第1行是测试数据的组数T，后面跟着T行输入。每组测试数据占1行，包含一个正整数n (1
 * Output: 输出有T行，每行输出对应一个输入。输出应是一个正整数，是第n个八皇后串。
 * Sample 1: 2\n1\n92 -> 15863724\n84136275
 */

#include <iostream>
#include <string>
#include <vector>
using namespace std;
vector<string> ans;
int pos[10], col[20], d1[40], d2[40];
void dfs(int r, int n) {
    if (r == n + 1) {
        string s;
        for (int i = 1; i <= n; i++) s += (char)('0' + pos[i]);
        ans.push_back(s); return;
    }
    for (int c = 1; c <= n; c++) {
        if (!col[c] && !d1[r+c] && !d2[r-c+n]) {
            pos[r]=c; col[c]=d1[r+c]=d2[r-c+n]=1;
            dfs(r+1, n);
            col[c]=d1[r+c]=d2[r-c+n]=0;
        }
    }
}
int main() {
    dfs(1, 8);
    int t; cin >> t;
    while (t--) { int n; cin >> n; cout << ans[n-1] << endl; }
    return 0;
}
