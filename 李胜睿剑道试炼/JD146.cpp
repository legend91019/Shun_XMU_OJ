/*
 * JD146: 城池层递
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<pair<int, int>> edges;
    edges.reserve(m);
    int max_id = n;
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        edges.push_back({a, b});
        max_id = max(max_id, max(a, b));
    }
    vector<vector<int>> g(max_id + 1);
    for (auto [a, b] : edges) g[a].push_back(b);
    vector<int> d(max_id + 1, -1);
    queue<int> q;
    q.push(1);
    d[1] = 0;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        for (int v : g[u]) {
            if (d[v] == -1) {
                d[v] = d[u] + 1;
                q.push(v);
            }
        }
    }
    cout << d[n] << '\n';
    return 0;
}
