/*
 * LinK78: 加分二叉树
 */

#include <bits/stdc++.h>
using namespace std;

long long f[35][35];
int root_[35][35], w[35];

void print_pre(int l, int r, bool &first) {
    if (l > r) return;
    int rt = root_[l][r];
    if (!first) cout << ' ';
    first = false;
    cout << rt;
    print_pre(l, rt - 1, first);
    print_pre(rt + 1, r, first);
}

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> w[i];
    for (int i = 1; i <= n; i++) {
        f[i][i] = w[i];
        root_[i][i] = i;
    }
    for (int len = 2; len <= n; len++) {
        for (int l = 1; l + len - 1 <= n; l++) {
            int r = l + len - 1;
            for (int k = l; k <= r; k++) {
                long long left = k == l ? 1 : f[l][k - 1];
                long long right = k == r ? 1 : f[k + 1][r];
                long long val = left * right + w[k];
                if (val > f[l][r]) {
                    f[l][r] = val;
                    root_[l][r] = k;
                }
            }
        }
    }
    cout << f[1][n] << '\n';
    bool first = true;
    print_pre(1, n, first);
    cout << '\n';
    return 0;
}
