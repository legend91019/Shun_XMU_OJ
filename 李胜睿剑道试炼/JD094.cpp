#include <iostream>
using namespace std;
int path(int n, int m) {
    if (n == 0 || m == 0) return 1;
    return path(n - 1, m) + path(n, m - 1);
}
int main() {
    int n, m;
    cin >> n >> m;
    cout << path(n, m) << endl;
    return 0;
}
