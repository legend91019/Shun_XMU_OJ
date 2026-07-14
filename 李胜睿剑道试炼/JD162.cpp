/*
 * JD162: 雪道寻长
 */

#include <bits/stdc++.h>
using namespace std;

int R, C;
vector<vector<int>> h, memo;
int dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1};

int dp(int x, int y) {
    int &res = memo[x][y];
    if (res) return res;
    res = 1;
    for (int k = 0; k < 4; k++) {
        int nx = x + dx[k], ny = y + dy[k];
        if (nx >= 0 && nx < R && ny >= 0 && ny < C && h[nx][ny] < h[x][y])
            res = max(res, dp(nx, ny) + 1);
    }
    return res;
}

int main() {
    cin >> R >> C;
    h.assign(R, vector<int>(C));
    memo.assign(R, vector<int>(C));
    for (int i = 0; i < R; i++)
        for (int j = 0; j < C; j++) cin >> h[i][j];
    int ans = 0;
    for (int i = 0; i < R; i++)
        for (int j = 0; j < C; j++) ans = max(ans, dp(i, j));
    cout << ans << '\n';
    return 0;
}
