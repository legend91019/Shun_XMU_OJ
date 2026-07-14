/*
 * JD165: 分组选宝
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
        for (int j = 0; j < s; j++) cin >> items[j].first >> items[j].second;
        for (int j = V; j >= 0; j--)
            for (int k = 0; k < s; k++) {
                int v = items[k].first, w = items[k].second;
                if (j >= v) f[j] = max(f[j], f[j - v] + w);
            }
    }
    cout << f[V] << '\n';
    return 0;
}
