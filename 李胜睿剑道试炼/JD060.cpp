#include <cstdio>
using namespace std;
int main() {
    char op; double a[12][12];
    scanf(" %c", &op);
    for (int i = 0; i < 12; i++)
        for (int j = 0; j < 12; j++)
            scanf("%lf", &a[i][j]);
    double sum = 0; int cnt = 0;
    for (int i = 0; i < 12; i++)
        for (int j = 0; j < 12; j++)
            if (i + j < 11) { sum += a[i][j]; cnt++; }
    if (op == 'S') printf("%.1f\n", sum);
    else printf("%.1f\n", sum / cnt);
    return 0;
}
