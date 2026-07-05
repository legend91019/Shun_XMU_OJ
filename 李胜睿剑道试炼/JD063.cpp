#include <cstdio>
#include <algorithm>
using namespace std;
int main() {
    int n;
    while (scanf("%d", &n), n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int v = min({i+1, j+1, n-i, n-j});
                printf("%3d", v);
            }
            printf("\n");
        }
        printf("\n");
    }
    return 0;
}
