#include <iostream>
using namespace std;
int maxx(int x, int y) { return x > y ? x : y; }
int main() {
    int x, y;
    cin >> x >> y;
    cout << maxx(x, y) << endl;
    return 0;
}
