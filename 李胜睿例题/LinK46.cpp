/*
 * LinK46: 寻找林克的回忆(1)
 */

#include <cstdio>
#include <cstring>

char g[9][10];
int row_mask[9], col_mask[9], box_mask[9];

int box_id(int r, int c) {
    return r / 3 * 3 + c / 3;
}

bool dfs(int empty_count) {
    if (empty_count == 0) return true;

    int best_r = -1, best_c = -1, best_mask = 0, best_count = 10;
    for (int r = 0; r < 9; r++) {
        for (int c = 0; c < 9; c++) {
            if (g[r][c] == '0') {
                int used = row_mask[r] | col_mask[c] | box_mask[box_id(r, c)];
                int mask = (~used) & 0x1ff;
                int cnt = __builtin_popcount((unsigned)mask);
                if (cnt < best_count) {
                    best_count = cnt;
                    best_r = r;
                    best_c = c;
                    best_mask = mask;
                    if (cnt == 0) return false;
                    if (cnt == 1) goto found;
                }
            }
        }
    }

found:
    int b = box_id(best_r, best_c);
    for (int mask = best_mask; mask; mask -= mask & -mask) {
        int bit = mask & -mask;
        int digit = __builtin_ctz((unsigned)bit);
        g[best_r][best_c] = char('1' + digit);
        row_mask[best_r] |= bit;
        col_mask[best_c] |= bit;
        box_mask[b] |= bit;
        if (dfs(empty_count - 1)) return true;
        row_mask[best_r] ^= bit;
        col_mask[best_c] ^= bit;
        box_mask[b] ^= bit;
        g[best_r][best_c] = '0';
    }
    return false;
}

int main() {
    memset(row_mask, 0, sizeof(row_mask));
    memset(col_mask, 0, sizeof(col_mask));
    memset(box_mask, 0, sizeof(box_mask));

    int empty_count = 0;
    for (int r = 0; r < 9; r++) {
        if (scanf("%9s", g[r]) != 1) return 0;
        for (int c = 0; c < 9; c++) {
            if (g[r][c] == '0') {
                empty_count++;
            } else {
                int bit = 1 << (g[r][c] - '1');
                row_mask[r] |= bit;
                col_mask[c] |= bit;
                box_mask[box_id(r, c)] |= bit;
            }
        }
    }

    dfs(empty_count);

    for (int r = 0; r < 9; r++) {
        printf("%s\n", g[r]);
    }
    return 0;
}
