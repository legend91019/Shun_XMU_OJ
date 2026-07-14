/*
 * JD160: 合石成堆
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> s(n + 1);
    for (int i = 1; i <= n; i++) cin >> s[i], s[i] += s[i - 1];
    vector<vector<int>> f(n + 2, vector<int>(n + 2));
    for (int len = 2; len <= n; len++)
        for (int l = 1; l + len - 1 <= n; l++) {
            int r = l + len - 1;
            f[l][r] = 1e9;
            for (int k = l; k < r; k++)
                f[l][r] = min(f[l][r], f[l][k] + f[k + 1][r] + s[r] - s[l - 1]);
        }
    cout << f[1][n] << '\n';
    return 0;
}
