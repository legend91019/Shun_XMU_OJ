/*
 * LinK47: 寻找林克的回忆(2)
 */

#include <cstdio>
#include <cstring>

int g[9][9];
bool row[9][10], col[9][10], box[3][3][10];
char line[200];

bool dfs(int r, int c) {
    if (r == 9) return true;
    if (c == 9) return dfs(r + 1, 0);
    if (g[r][c]) return dfs(r, c + 1);

    // MRV: 找候选数最少的空格
    int best_r = -1, best_c = -1, best_cnt = 10;
    for (int i = r; i < 9; i++) {
        int jj = (i == r) ? c : 0;
        for (int j = jj; j < 9; j++) {
            if (g[i][j] == 0) {
                int cnt = 0;
                for (int v = 1; v <= 9; v++)
                    if (!row[i][v] && !col[j][v] && !box[i/3][j/3][v]) cnt++;
                if (cnt < best_cnt) {
                    best_cnt = cnt;
                    best_r = i; best_c = j;
                    if (cnt == 0) return false;
                    if (cnt == 1) goto found;
                }
            }
        }
    }
    if (best_r == -1) return dfs(r + 1, 0); // shouldn't happen

found:
    int i = best_r, j = best_c;
    for (int v = 1; v <= 9; v++) {
        if (!row[i][v] && !col[j][v] && !box[i/3][j/3][v]) {
            g[i][j] = v;
            row[i][v] = col[j][v] = box[i/3][j/3][v] = true;
            if (dfs(i, j)) return true;
            row[i][v] = col[j][v] = box[i/3][j/3][v] = false;
            g[i][j] = 0;
        }
    }
    return false;
}

int main() {
    while (scanf("%s", line) == 1) {
        if (line[0] == 'e' && line[1] == 'n' && line[2] == 'd') break;

        memset(row, 0, sizeof(row));
        memset(col, 0, sizeof(col));
        memset(box, 0, sizeof(box));

        for (int i = 0; i < 9; i++)
            for (int j = 0; j < 9; j++) {
                char ch = line[i * 9 + j];
                g[i][j] = (ch == '.') ? 0 : (ch - '0');
                if (g[i][j]) {
                    row[i][g[i][j]] = true;
                    col[j][g[i][j]] = true;
                    box[i/3][j/3][g[i][j]] = true;
                }
            }

        dfs(0, 0);

        for (int i = 0; i < 9; i++)
            for (int j = 0; j < 9; j++)
                putchar('0' + g[i][j]);
        putchar('\n');
    }
    return 0;
}
