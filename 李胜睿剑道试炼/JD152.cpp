/*
 * JD152: 蔓延成网
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    struct Edge {
        int a, b, w;
        bool operator<(const Edge &other) const { return w < other.w; }
    };
    vector<Edge> edges(m);
    for (int i = 0; i < m; i++) {
        cin >> edges[i].a >> edges[i].b >> edges[i].w;
    }
    sort(edges.begin(), edges.end());
    vector<int> parent(n + 1), sz(n + 1, 1);
    iota(parent.begin(), parent.end(), 0);
    auto find_root = [&](int x) {
        int r = x;
        while (parent[r] != r) r = parent[r];
        while (parent[x] != x) {
            int p = parent[x];
            parent[x] = r;
            x = p;
        }
        return r;
    };
    long long ans = 0;
    int cnt = 0;
    for (auto &e : edges) {
        int a = find_root(e.a), b = find_root(e.b);
        if (a == b) continue;
        if (sz[a] < sz[b]) swap(a, b);
        parent[b] = a;
        sz[a] += sz[b];
        ans += e.w;
        cnt++;
    }
    if (cnt < n - 1) cout << "impossible\n";
    else cout << ans << '\n';
    return 0;
}
