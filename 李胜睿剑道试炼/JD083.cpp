#include <iostream>
using namespace std;
int abss(int x) { return x < 0 ? -x : x; }
int main() {
    int x;
    cin >> x;
    cout << abss(x) << endl;
    return 0;
}
