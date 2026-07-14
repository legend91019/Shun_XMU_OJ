/*
 * JD145: 古树重心
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<pair<int, int>> edges;
    edges.reserve(max(0, n - 1));
    int max_id = n;
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        edges.push_back({a, b});
        max_id = max(max_id, max(a, b));
    }

    vector<int> head(max_id + 1, -1), to(max(1, 2 * (n - 1))), nxt(max(1, 2 * (n - 1)));
    int idx = 0;
    auto add = [&](int a, int b) {
        to[idx] = b;
        nxt[idx] = head[a];
        head[a] = idx++;
    };
    for (auto e : edges) {
        add(e.first, e.second);
        add(e.second, e.first);
    }

    vector<int> parent(max_id + 1), order;
    order.reserve(n);
    stack<int> st;
    st.push(1);
    parent[1] = -1;
    while (!st.empty()) {
        int u = st.top();
        st.pop();
        order.push_back(u);
        for (int i = head[u]; i != -1; i = nxt[i]) {
            int v = to[i];
            if (v == parent[u] || parent[v]) continue;
            parent[v] = u;
            st.push(v);
        }
    }

    vector<int> sz(max_id + 1, 1);
    int ans = n;
    for (int i = (int)order.size() - 1; i >= 0; i--) {
        int u = order[i], mx = 0;
        for (int j = head[u]; j != -1; j = nxt[j]) {
            int v = to[j];
            if (parent[v] == u) {
                sz[u] += sz[v];
                mx = max(mx, sz[v]);
            }
        }
        mx = max(mx, n - sz[u]);
        ans = min(ans, mx);
    }
    cout << ans << '\n';
    return 0;
}
