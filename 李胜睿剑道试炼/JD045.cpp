#include <cstdio>
using namespace std;
int main() {
    double a[100];
    for (int i = 0; i < 100; i++)
        scanf("%lf", &a[i]);
    for (int i = 0; i < 100; i++)
        if (a[i] <= 10)
            printf("A[%d] = %.1f\n", i, a[i]);
    return 0;
}
