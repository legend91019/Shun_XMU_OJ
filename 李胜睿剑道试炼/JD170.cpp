/*
 * JD170: 万城巡游
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> w(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> w[i][j];
    const int INF = 1e9;
    vector<vector<int>> f(1 << n, vector<int>(n, INF));
    f[1][0] = 0;
    for (int s = 1; s < (1 << n); s++)
        for (int j = 0; j < n; j++)
            if (s >> j & 1)
                for (int k = 0; k < n; k++)
                    if ((s ^ (1 << j)) >> k & 1)
                        f[s][j] = min(f[s][j], f[s ^ (1 << j)][k] + w[k][j]);
    cout << f[(1 << n) - 1][n - 1] << '\n';
    return 0;
}
