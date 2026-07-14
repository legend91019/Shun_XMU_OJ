/*
 * LinK69: 摘花生
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int T;
    cin >> T;
    while (T--) {
        int r, c;
        cin >> r >> c;
        vector<vector<int>> f(r + 1, vector<int>(c + 1));
        for (int i = 1; i <= r; i++)
            for (int j = 1; j <= c; j++) {
                int x;
                cin >> x;
                f[i][j] = max(f[i - 1][j], f[i][j - 1]) + x;
            }
        cout << f[r][c] << '\n';
    }
    return 0;
}
