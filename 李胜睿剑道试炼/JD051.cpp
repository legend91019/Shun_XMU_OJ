#include <cstdio>
using namespace std;
int main() {
    int l; char op;
    double a[12][12];
    scanf("%d %c", &l, &op);
    for (int i = 0; i < 12; i++)
        for (int j = 0; j < 12; j++)
            scanf("%lf", &a[i][j]);
    double sum = 0;
    for (int j = 0; j < 12; j++)
        sum += a[l][j];
    if (op == 'S') printf("%.1f\n", sum);
    else printf("%.1f\n", sum / 12);
    return 0;
}
