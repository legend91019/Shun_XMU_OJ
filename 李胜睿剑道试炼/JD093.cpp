#include <iostream>
using namespace std;
int climb(int n) {
    if (n <= 2) return n;
    return climb(n - 1) + climb(n - 2);
}
int main() {
    int n;
    cin >> n;
    cout << climb(n) << endl;
    return 0;
}
