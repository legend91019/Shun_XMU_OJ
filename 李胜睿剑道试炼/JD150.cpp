/*
 * JD150: 队中松弛
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
    vector<int> inq(max_id + 1);
    queue<int> q;
    dist[1] = 0;
    q.push(1);
    inq[1] = 1;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        inq[u] = 0;
        for (auto e : g[u]) {
            int v = e.first, w = e.second;
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                if (!inq[v]) q.push(v), inq[v] = 1;
            }
        }
    }
    if (dist[n] == INF) cout << "impossible\n";
    else cout << dist[n] << '\n';
    return 0;
}
