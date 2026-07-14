/*
 * LinK63: 林克的01背包
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, V;
    cin >> n >> V;
    vector<int> f(V + 1);
    for (int i = 0; i < n; i++) {
        int v, w;
        cin >> v >> w;
        for (int j = V; j >= v; j--) f[j] = max(f[j], f[j - v] + w);
    }
    cout << f[V] << '\n';
    return 0;
}
