#include <cstdio>
int main() {
    int n, m;
    scanf("%d %d", &n, &m);
    int x = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (j == m - 1) printf("SWORD");
            else printf("%d", x);
            if (j < m - 1) printf(" ");
            x++;
        }
        printf("\n");
    }
    return 0;
}
