/*
 * LinK47: 寻找林克的回忆(2)
 */

#include <cstdio>
#include <cstring>

char g[82];
int row_mask[9], col_mask[9], box_mask[9];
char line[200];

int box_id(int r, int c) {
    return r / 3 * 3 + c / 3;
}

bool dfs(int empty_count) {
    if (empty_count == 0) return true;

    int best_pos = -1, best_mask = 0, best_count = 10;
    for (int pos = 0; pos < 81; pos++) {
        if (g[pos] == '.') {
            int r = pos / 9, c = pos % 9;
            int used = row_mask[r] | col_mask[c] | box_mask[box_id(r, c)];
            int mask = (~used) & 0x1ff;
            int cnt = __builtin_popcount((unsigned)mask);
            if (cnt < best_count) {
                best_count = cnt;
                best_pos = pos;
                best_mask = mask;
                if (cnt == 0) return false;
                if (cnt == 1) break;
            }
        }
    }

    int r = best_pos / 9, c = best_pos % 9, b = box_id(r, c);
    for (int mask = best_mask; mask; mask -= mask & -mask) {
        int bit = mask & -mask;
        int digit = __builtin_ctz((unsigned)bit);
        g[best_pos] = char('1' + digit);
        row_mask[r] |= bit;
        col_mask[c] |= bit;
        box_mask[b] |= bit;
        if (dfs(empty_count - 1)) return true;
        row_mask[r] ^= bit;
        col_mask[c] ^= bit;
        box_mask[b] ^= bit;
        g[best_pos] = '.';
    }
    return false;
}

int main() {
    while (scanf("%s", line) == 1) {
        if (strcmp(line, "end") == 0) break;

        memset(row_mask, 0, sizeof(row_mask));
        memset(col_mask, 0, sizeof(col_mask));
        memset(box_mask, 0, sizeof(box_mask));

        int empty_count = 0;
        for (int pos = 0; pos < 81; pos++) {
            g[pos] = line[pos];
            if (g[pos] == '.') {
                empty_count++;
            } else {
                int r = pos / 9, c = pos % 9;
                int bit = 1 << (g[pos] - '1');
                row_mask[r] |= bit;
                col_mask[c] |= bit;
                box_mask[box_id(r, c)] |= bit;
            }
        }
        g[81] = '\0';

        dfs(empty_count);
        puts(g);
    }
    return 0;
}
