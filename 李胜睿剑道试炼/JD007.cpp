#include <iostream>
#include <cstdio>
using namespace std;
int main() {
    int num, days;
    double wage;
    cin >> num >> days >> wage;
    printf("NUMBER = %d\n", num);
    printf("SALARY = U$ %.2f\n", days * wage);
    return 0;
}
