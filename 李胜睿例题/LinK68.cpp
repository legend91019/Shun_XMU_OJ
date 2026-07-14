/*
 * LinK68: 混合背包问题
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, V;
    cin >> n >> V;
    vector<int> f(V + 1);
    for (int i = 0; i < n; i++) {
        int v, w, s;
        cin >> v >> w >> s;
        if (s == 0) {
            for (int j = v; j <= V; j++) f[j] = max(f[j], f[j - v] + w);
        } else {
            if (s == -1) s = 1;
            for (int k = 1; s > 0; k <<= 1) {
                int cnt = min(k, s);
                s -= cnt;
                int vv = v * cnt, ww = w * cnt;
                for (int j = V; j >= vv; j--) f[j] = max(f[j], f[j - vv] + ww);
            }
        }
    }
    cout << f[V] << '\n';
    return 0;
}
