/*
 * LinK70: 最低通行费
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    const int INF = 1e9;
    vector<vector<int>> f(n + 1, vector<int>(n + 1, INF));
    f[1][0] = f[0][1] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++) {
            int x;
            cin >> x;
            f[i][j] = min(f[i - 1][j], f[i][j - 1]) + x;
        }
    cout << f[n][n] << '\n';
    return 0;
}
