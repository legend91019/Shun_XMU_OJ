#include <cstdio>
using namespace std;
int main() {
    double s;
    scanf("%lf", &s);
    int p;
    if (s <= 400) p = 15;
    else if (s <= 800) p = 12;
    else if (s <= 1200) p = 10;
    else if (s <= 2000) p = 7;
    else p = 4;
    double inc = s * p / 100;
    printf("New salary: %.2f\n", s + inc);
    printf("Increase: %.2f\n", inc);
    printf("Percentage: %d %%\n", p);
    return 0;
}
