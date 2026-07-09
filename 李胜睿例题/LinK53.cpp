/*
 * LinK53: 加农的入侵
 */

#include <bits/stdc++.h>
using namespace std;

const int N = 105;
char g[N][N];
int dista[N][N];
int dx[8] = {-1, -1, -1, 0, 0, 1, 1, 1};
int dy[8] = {-1, 0, 1, -1, 1, -1, 0, 1};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int X, Y, Mx, My;
    cin >> X >> Y >> Mx >> My;
    for (int i = 0; i < Y; i++) cin >> g[i];

    memset(dista, -1, sizeof(dista));
    queue<pair<int, int>> q;
    int sx = My - 1, sy = Mx - 1;
    q.push({sx, sy});
    dista[sx][sy] = 0;

    int ans = 0;
    while (!q.empty()) {
        pair<int, int> cur = q.front();
        q.pop();
        int x = cur.first, y = cur.second;
        ans = max(ans, dista[x][y]);
        for (int k = 0; k < 8; k++) {
            int nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= Y || ny < 0 || ny >= X) continue;
            if (g[nx][ny] == '*' || dista[nx][ny] != -1) continue;
            dista[nx][ny] = dista[x][y] + 1;
            q.push({nx, ny});
        }
    }

    cout << ans << '\n';
    return 0;
}
