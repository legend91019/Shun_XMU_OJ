/*
 * LinK55: 公主的攻击范围
 */

#include <bits/stdc++.h>
using namespace std;

const int N = 1010;
int dista[N][N];
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    queue<pair<int, int>> q;
    memset(dista, -1, sizeof(dista));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            char ch;
            cin >> ch;
            if (ch == '1') {
                dista[i][j] = 0;
                q.push({i, j});
            }
        }
    }

    while (!q.empty()) {
        pair<int, int> cur = q.front();
        q.pop();
        int x = cur.first, y = cur.second;
        for (int k = 0; k < 4; k++) {
            int nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (dista[nx][ny] != -1) continue;
            dista[nx][ny] = dista[x][y] + 1;
            q.push({nx, ny});
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << dista[i][j] << ' ';
        }
        cout << '\n';
    }
    return 0;
}
