/*
 * JD142: 棋盘布后
 */

#include <bits/stdc++.h>
using namespace std;

int n;
vector<string> board;
vector<int> col, dg, udg;

void dfs(int r) {
    if (r == n) {
        for (auto &s : board) cout << s << '\n';
        cout << '\n';
        return;
    }
    for (int c = 0; c < n; c++) {
        if (!col[c] && !dg[r + c] && !udg[r - c + n]) {
            board[r][c] = 'Q';
            col[c] = dg[r + c] = udg[r - c + n] = 1;
            dfs(r + 1);
            col[c] = dg[r + c] = udg[r - c + n] = 0;
            board[r][c] = '.';
        }
    }
}

int main() {
    cin >> n;
    board.assign(n, string(n, '.'));
    col.assign(n, 0);
    dg.assign(2 * n, 0);
    udg.assign(2 * n, 0);
    dfs(0);
    return 0;
}
