/*
 * LinK40: 骑士林克的怜悯(1)
 */

#include <cstdio>
#include <cstring>

int p, q, total;
bool vis[30][30];
int path_r[700], path_c[700];

int dr[8] = {-1, 1, -2, 2, -2, 2, -1, 1};
int dc[8] = {-2, -2, -1, -1, 1, 1, 2, 2};

bool dfs(int r, int c, int step) {
    vis[r][c] = true;
    path_r[step] = r;
    path_c[step] = c;
    if (step == total) return true;

    for (int d = 0; d < 8; d++) {
        int nr = r + dr[d], nc = c + dc[d];
        if (nr >= 0 && nr < p && nc >= 0 && nc < q && !vis[nr][nc]) {
            if (dfs(nr, nc, step + 1)) return true;
        }
    }

    vis[r][c] = false;
    return false;
}

bool solve() {
    for (int c = 0; c < q; c++) {
        for (int r = 0; r < p; r++) {
            memset(vis, 0, sizeof(vis));
            if (dfs(r, c, 1)) return true;
        }
    }
    return false;
}

int main() {
    int T;
    scanf("%d", &T);
    for (int t = 1; t <= T; t++) {
        scanf("%d%d", &p, &q);
        total = p * q;

        printf("#%d:\n", t);
        if (solve()) {
            for (int i = 1; i <= total; i++) {
                printf("%c%d", 'A' + path_c[i], path_r[i] + 1);
            }
            printf("\n");
        } else {
            printf("none\n");
        }
    }
    return 0;
}
