#include <cstdio>
int main() {
    int n;
    scanf("%d", &n);
    int p[] = {6, 28, 496, 8128};
    for (int i = 0; i < 4; i++)
        if (p[i] <= n) printf("%d\n", p[i]);
    return 0;
}
