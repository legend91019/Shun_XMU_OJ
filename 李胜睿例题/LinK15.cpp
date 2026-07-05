#include <iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    long long ways[47] = {};
    ways[0] = 1;
    ways[1] = 1;
    for (int i = 2; i <= n; ++i) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    cout << ways[n] << '\n';
    return 0;
}
