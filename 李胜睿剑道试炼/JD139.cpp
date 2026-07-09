/*
 * JD139: 门派计数
 */

#include <bits/stdc++.h>
using namespace std;

const int N = 1000010;
int parent_[N], sz_[N];

int find_root(int x) {
    int r = x;
    while (parent_[r] != r) r = parent_[r];
    while (parent_[x] != x) {
        int t = parent_[x];
        parent_[x] = r;
        x = t;
    }
    return r;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    for (int i = 1; i <= n; i++) {
        parent_[i] = i;
        sz_[i] = 1;
    }

    while (m--) {
        string op;
        cin >> op;
        if (op == "C") {
            int a, b;
            cin >> a >> b;
            int ra = find_root(a), rb = find_root(b);
            if (ra != rb) {
                parent_[ra] = rb;
                sz_[rb] += sz_[ra];
            }
        } else if (op == "Q1") {
            int a, b;
            cin >> a >> b;
            cout << (find_root(a) == find_root(b) ? "Yes" : "No") << '\n';
        } else {
            int a;
            cin >> a;
            cout << sz_[find_root(a)] << '\n';
        }
    }
    return 0;
}
