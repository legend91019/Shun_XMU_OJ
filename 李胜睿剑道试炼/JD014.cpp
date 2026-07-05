#include <iostream>
using namespace std;
int main() {
    int n, denom[] = {100, 50, 20, 10, 5, 2, 1};
    cin >> n;
    cout << n << endl;
    for (int d : denom) {
        cout << n / d << " nota(s) de R$ " << d << ",00" << endl;
        n %= d;
    }
    return 0;
}
