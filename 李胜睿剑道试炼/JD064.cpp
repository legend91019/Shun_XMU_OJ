#include <cstdio>
#include <cstdlib>
using namespace std;
int main() {
    int n;
    while (scanf("%d", &n), n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                printf("%3d", abs(i - j) + 1);
            }
            printf("\n");
        }
        printf("\n");
    }
    return 0;
}
