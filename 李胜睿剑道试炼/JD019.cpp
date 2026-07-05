#include <cstdio>
using namespace std;
int main() {
    double prices[] = {0, 4.00, 4.50, 5.00, 2.00, 1.50};
    int x, y;
    scanf("%d %d", &x, &y);
    printf("Total: R$ %.2f\n", prices[x] * y);
    return 0;
}
