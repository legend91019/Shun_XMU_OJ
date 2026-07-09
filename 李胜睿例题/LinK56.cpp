/*
 * LinK56: 滚石柱
 */

#include <bits/stdc++.h>
using namespace std;

const int N = 505;
char g[N][N];
int dista[N][N][3];
int n, m;

struct State {
    int x, y, lie;
};

int dx[3][4] = {
    {-2, 0, 1, 0},
    {-1, 0, 1, 0},
    {-1, 0, 2, 0}
};
int dy[3][4] = {
    {0, 1, 0, -2},
    {0, 2, 0, -1},
    {0, 1, 0, -1}
};
int nextLie[3][4] = {
    {2, 1, 2, 1},
    {1, 0, 1, 0},
    {0, 2, 0, 2}
};

bool cell_ok(int x, int y) {
    return x >= 0 && x < n && y >= 0 && y < m && g[x][y] != '#';
}

bool state_ok(const State &s) {
    int x = s.x, y = s.y;
    if (!cell_ok(x, y)) return false;
    if (s.lie == 0) return g[x][y] != 'E';
    if (s.lie == 1) return cell_ok(x, y + 1);
    return cell_ok(x + 1, y);
}

int bfs(State start, int ex, int ey) {
    memset(dista, -1, sizeof(dista));
    queue<State> q;
    q.push(start);
    dista[start.x][start.y][start.lie] = 0;

    while (!q.empty()) {
        State u = q.front();
        q.pop();
        int step = dista[u.x][u.y][u.lie];
        if (u.lie == 0 && u.x == ex && u.y == ey) return step;

        for (int d = 0; d < 4; d++) {
            State v{u.x + dx[u.lie][d], u.y + dy[u.lie][d], nextLie[u.lie][d]};
            if (!state_ok(v)) continue;
            if (dista[v.x][v.y][v.lie] != -1) continue;
            dista[v.x][v.y][v.lie] = step + 1;
            q.push(v);
        }
    }
    return -1;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    while (cin >> n >> m, n || m) {
        vector<pair<int, int>> xs;
        int ex = -1, ey = -1;
        for (int i = 0; i < n; i++) {
            cin >> g[i];
            for (int j = 0; j < m; j++) {
                if (g[i][j] == 'X') xs.push_back({i, j});
                if (g[i][j] == 'O') ex = i, ey = j;
            }
        }

        State start{xs[0].first, xs[0].second, 0};
        if (xs.size() == 2) {
            sort(xs.begin(), xs.end());
            if (xs[0].first == xs[1].first) {
                start = {xs[0].first, min(xs[0].second, xs[1].second), 1};
            } else {
                start = {min(xs[0].first, xs[1].first), xs[0].second, 2};
            }
        }

        int ans = bfs(start, ex, ey);
        if (ans == -1) cout << "Impossible\n";
        else cout << ans << '\n';
    }

    return 0;
}
