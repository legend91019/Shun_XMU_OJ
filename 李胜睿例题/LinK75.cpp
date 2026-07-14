/*
 * LinK75: 最长公共子序列
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    string a, b;
    cin >> n >> m >> a >> b;
    vector<vector<int>> f(n + 1, vector<int>(m + 1));
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            f[i][j] = max(f[i - 1][j], f[i][j - 1]);
            if (a[i - 1] == b[j - 1]) f[i][j] = max(f[i][j], f[i - 1][j - 1] + 1);
        }
    cout << f[n][m] << '\n';
    return 0;
}
