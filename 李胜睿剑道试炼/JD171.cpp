/*
 * JD171: 群经改字
 */

#include <bits/stdc++.h>
using namespace std;

int edit_distance(const string &a, const string &b, int limit) {
    int n = a.size(), m = b.size();
    vector<vector<int>> f(n + 1, vector<int>(m + 1));
    for (int i = 0; i <= n; i++) f[i][0] = i;
    for (int j = 0; j <= m; j++) f[0][j] = j;
    for (int i = 1; i <= n; i++) {
        int rowMin = 1e9;
        for (int j = 1; j <= m; j++) {
            f[i][j] = min(f[i - 1][j], f[i][j - 1]) + 1;
            f[i][j] = min(f[i][j], f[i - 1][j - 1] + (a[i - 1] != b[j - 1]));
            rowMin = min(rowMin, f[i][j]);
        }
        if (rowMin > limit + abs(n - m)) {
        }
    }
    return f[n][m];
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<string> words(n);
    for (string &s : words) cin >> s;
    while (m--) {
        string s;
        int k;
        cin >> s >> k;
        int ans = 0;
        for (auto &w : words)
            if (edit_distance(w, s, k) <= k) ans++;
        cout << ans << '\n';
    }
    return 0;
}
