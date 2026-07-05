#include <iostream>
using namespace std;
int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    int start = a * 60 + b;
    int end = c * 60 + d;
    int diff = end - start;
    if (diff <= 0) diff += 24 * 60;
    cout << diff / 60 << ":" << diff % 60 << endl;
    return 0;
}
