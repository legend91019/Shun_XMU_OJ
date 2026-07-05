#include <cstdio>
int a[200];
int main() {
    int n, l, r;
    scanf("%d %d %d", &n, &l, &r);
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);
    for (int i = l; i < r; i++)
        for (int j = l; j < l + r - i; j++)
            if (a[j] > a[j+1]) {
                int t = a[j]; a[j] = a[j+1]; a[j+1] = t;
            }
    for (int i = 0; i < n; i++) {
        if (i > 0) printf(" ");
        printf("%d", a[i]);
    }
    printf("\n");
    return 0;
}
