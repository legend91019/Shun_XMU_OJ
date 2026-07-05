/*
 * LinK39: 净化迷雾森林
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * 从'@'出发，'.'是迷雾，'#'是墙。求能到达的迷雾数量（含起点）。
 * 多组数据，W H均为0时结束。
 */

#include <iostream>
#include <cstring>
using namespace std;

int W, H, sx, sy, ans;
char g[25][25];
bool vis[25][25];
int dx[] = {0, 0, -1, 1};
int dy[] = {-1, 1, 0, 0};

void dfs(int x, int y) {
    vis[x][y] = true;
    ans++;
    for (int d = 0; d < 4; d++) {
        int nx = x + dx[d], ny = y + dy[d];
        if (nx >= 0 && nx < H && ny >= 0 && ny < W && !vis[nx][ny] && g[nx][ny] != '#')
            dfs(nx, ny);
    }
}

int main() {
    while (cin >> W >> H && (W || H)) {
        for (int i = 0; i < H; i++) {
            cin >> g[i];
            for (int j = 0; j < W; j++) {
                if (g[i][j] == '@') { sx = i; sy = j; }
            }
        }
        memset(vis, 0, sizeof(vis));
        ans = 0;
        dfs(sx, sy);
        cout << ans << endl;
    }
    return 0;
}
