/*
 * JD154: 二色分界
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
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
    for (auto e : edges) {
        int a = e.first, b = e.second;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    vector<int> color(max_id + 1, -1);
    for (int i = 1; i <= max_id; i++) {
        if (color[i] != -1) continue;
        queue<int> q;
        q.push(i);
        color[i] = 0;
        while (!q.empty()) {
            int u = q.front();
            q.pop();
            for (int v : g[u]) {
                if (color[v] == -1) color[v] = color[u] ^ 1, q.push(v);
                else if (color[v] == color[u]) {
                    cout << "No\n";
                    return 0;
                }
            }
        }
    }
    cout << "Yes\n";
    return 0;
}
