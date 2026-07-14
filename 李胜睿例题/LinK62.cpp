/*
 * LinK62: 数字三角形
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> f(n + 1, vector<int>(n + 1, -1e9));
    f[0][0] = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            int x;
            cin >> x;
            f[i][j] = max(f[i - 1][j - 1], f[i - 1][j]) + x;
        }
    }
    cout << *max_element(f[n].begin(), f[n].end()) << '\n';
    return 0;
}
