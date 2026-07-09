/*
 * JD124: 方阵差分
 */

#include <bits/stdc++.h>
using namespace std;

const int N = 1010;
long long b[N][N];

void add(int x1, int y1, int x2, int y2, long long c) {
    b[x1][y1] += c;
    b[x2 + 1][y1] -= c;
    b[x1][y2 + 1] -= c;
    b[x2 + 1][y2 + 1] += c;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m, q;
    cin >> n >> m >> q;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            long long x;
            cin >> x;
            add(i, j, i, j, x);
        }
    }

    while (q--) {
        int x1, y1, x2, y2;
        long long c;
        cin >> x1 >> y1 >> x2 >> y2 >> c;
        add(x1, y1, x2, y2, c);
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            b[i][j] += b[i - 1][j] + b[i][j - 1] - b[i - 1][j - 1];
            cout << b[i][j] << ' ';
        }
        cout << '\n';
    }
    return 0;
}
