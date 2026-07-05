/*
 * LinK46: 寻找林克的回忆(1)
 */

#include <cstdio>
#include <cstring>

int g[9][9];
bool row[9][10], col[9][10], box[3][3][10];

bool dfs(int r, int c) {
    if (r == 9) return true;
    if (c == 9) return dfs(r + 1, 0);
    if (g[r][c]) return dfs(r, c + 1);
    for (int v = 1; v <= 9; v++) {
        if (!row[r][v] && !col[c][v] && !box[r/3][c/3][v]) {
            g[r][c] = v;
            row[r][v] = col[c][v] = box[r/3][c/3][v] = true;
            if (dfs(r, c + 1)) return true;
            row[r][v] = col[c][v] = box[r/3][c/3][v] = false;
            g[r][c] = 0;
        }
    }
    return false;
}

int main() {
    // 读取81个非空白字符（跨越多行或单行均可）
    for (int i = 0; i < 9; i++)
        for (int j = 0; j < 9; j++) {
            char ch;
            scanf(" %c", &ch);
            g[i][j] = ch - '0';
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
    return 0;
}
