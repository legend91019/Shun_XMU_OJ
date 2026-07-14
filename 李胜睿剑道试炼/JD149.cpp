/*
 * JD149: 堆中取近
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<tuple<int, int, int>> edges;
    edges.reserve(m);
    int max_id = n;
    for (int i = 0; i < m; i++) {
        int a, b, w;
        cin >> a >> b >> w;
        edges.push_back(make_tuple(a, b, w));
        max_id = max(max_id, max(a, b));
    }
    vector<vector<pair<int, int>>> g(max_id + 1);
    for (auto &e : edges) {
        int a, b, w;
        tie(a, b, w) = e;
        g[a].push_back({b, w});
    }
    const long long INF = 4e18;
    vector<long long> dist(max_id + 1, INF);
    vector<int> vis(max_id + 1);
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> heap;
    dist[1] = 0;
    heap.push({0, 1});
    while (!heap.empty()) {
        auto cur = heap.top();
        heap.pop();
        int u = cur.second;
        if (vis[u]) continue;
        vis[u] = 1;
        for (auto e : g[u]) {
            int v = e.first, w = e.second;
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                heap.push({dist[v], v});
            }
        }
    }
    cout << (dist[n] == INF ? -1 : dist[n]) << '\n';
    return 0;
}
