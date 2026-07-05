#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    if (b > a) cout << b - a << endl;
    else if (a == b) cout << 24 << endl;
    else cout << 24 - a + b << endl;
    return 0;
}
