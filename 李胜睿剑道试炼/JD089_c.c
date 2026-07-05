#include <stdio.h>
int main() {
    int r, c, x, i, j;
    scanf("%d %d", &r, &c);
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            scanf("%d", &x);
            if (j > 0) printf(" ");
            printf("%d", x);
        }
        printf("\n");
    }
    return 0;
}
