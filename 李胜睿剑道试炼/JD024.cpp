#include <iostream>
using namespace std;
int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    if (b > a && d > a && c + d > a + b && c > 0 && a % 2 == 0)
        cout << "Accepted" << endl;
    else
        cout << "Not accepted" << endl;
    return 0;
}
