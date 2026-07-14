/*
 * JD157: 三角登峰
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<long long>> f(n + 2, vector<long long>(n + 2));
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cin >> f[i][j];
        }
    }
    for (int i = n - 1; i >= 1; i--)
        for (int j = 1; j <= i; j++)
            f[i][j] += max(f[i + 1][j], f[i + 1][j + 1]);
    cout << f[1][1] << '\n';
    return 0;
}
