/*
 * JD153: 逐边成林
 */

#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int a, b, w;
    bool operator<(const Edge &other) const { return w < other.w; }
};

int find_root(vector<int> &p, int x) {
    int r = x;
    while (p[r] != r) r = p[r];
    while (p[x] != x) {
        int parent = p[x];
        p[x] = r;
        x = parent;
    }
    return r;
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<Edge> edges(m);
    for (auto &e : edges) {
        cin >> e.a >> e.b >> e.w;
    }
    sort(edges.begin(), edges.end());
    vector<int> p(n + 1), sz(n + 1, 1);
    iota(p.begin(), p.end(), 0);
    int cnt = 0;
    long long ans = 0;
    for (auto &e : edges) {
        int a = find_root(p, e.a), b = find_root(p, e.b);
        if (a != b) {
            if (sz[a] < sz[b]) swap(a, b);
            p[b] = a;
            sz[a] += sz[b];
            ans += e.w;
            cnt++;
        }
    }
    if (cnt < n - 1) cout << "impossible\n";
    else cout << ans << '\n';
    return 0;
}
