#include <cstdio>
using namespace std;
int main() {
    double s;
    scanf("%lf", &s);
    if (s <= 2000) puts("Isento");
    else {
        double tax = 0;
        if (s > 4500) { tax += (s - 4500) * 0.28; s = 4500; }
        if (s > 3000) { tax += (s - 3000) * 0.18; s = 3000; }
        if (s > 2000) { tax += (s - 2000) * 0.08; }
        printf("R$ %.2f\n", tax);
    }
    return 0;
}
