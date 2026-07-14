/*
 * LinK67: 分组背包问题
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, V;
    cin >> n >> V;
    vector<int> f(V + 1);
    for (int i = 0; i < n; i++) {
        int s;
        cin >> s;
        vector<pair<int, int>> items(s);
        for (auto &it : items) cin >> it.first >> it.second;
        for (int j = V; j >= 0; j--) {
            for (auto [v, w] : items) {
                if (j >= v) f[j] = max(f[j], f[j - v] + w);
            }
        }
    }
    cout << f[V] << '\n';
    return 0;
}
