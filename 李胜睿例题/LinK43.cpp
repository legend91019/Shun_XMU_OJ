/*
 * LinK43: 求二进制中1的个数
 */

#include <cstdio>

int main() {
    int n;
    while (scanf("%d", &n) == 1) {
        unsigned int x = (unsigned int)n;
        int cnt = 0;
        while (x) {
            x -= x & (-x);
            cnt++;
        }
        printf("%d\n", cnt);
    }
    return 0;
}
