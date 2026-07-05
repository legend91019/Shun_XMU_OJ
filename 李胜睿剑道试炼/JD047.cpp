#include <cstdio>
using namespace std;
int main() {
    int n, x, mn, pos = 0;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        if (i == 0 || x < mn) { mn = x; pos = i; }
    }
    printf("Menor valor: %d\nPosicao: %d\n", mn, pos);
    return 0;
}
