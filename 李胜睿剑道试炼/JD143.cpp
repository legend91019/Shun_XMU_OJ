/*
 * JD143: 迷宫寻路
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m)), d(n, vector<int>(m, -1));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++) cin >> g[i][j];
    queue<pair<int, int>> q;
    q.push({0, 0});
    d[0][0] = 0;
    int dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1};
    while (!q.empty()) {
        auto cur = q.front();
        q.pop();
        for (int k = 0; k < 4; k++) {
            int x = cur.first + dx[k], y = cur.second + dy[k];
            if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] || d[x][y] != -1) continue;
            d[x][y] = d[cur.first][cur.second] + 1;
            q.push({x, y});
        }
    }
    cout << d[n - 1][m - 1] << '\n';
    return 0;
}
