#include <iostream>
#include <cstdio>
using namespace std;
int main() {
    int id, qty;
    double price;
    cin >> id >> qty >> price;
    printf("TOTAL = %.2f\n", qty * price);
    return 0;
}
