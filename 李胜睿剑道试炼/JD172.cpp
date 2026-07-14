/*
 * JD172: 千机棋局
 */

#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> g;
vector<array<int, 2>> f;
vector<int> happy, hasParent;

void dfs(int u) {
    f[u][1] = happy[u];
    for (int v : g[u]) {
        dfs(v);
        f[u][0] += max(f[v][0], f[v][1]);
        f[u][1] += f[v][0];
    }
}

int main() {
    int n;
    cin >> n;
    g.assign(n + 1, {});
    f.assign(n + 1, {0, 0});
    happy.assign(n + 1, 0);
    hasParent.assign(n + 1, 0);
    for (int i = 1; i <= n; i++) cin >> happy[i];
    for (int i = 0; i < n - 1; i++) {
        int l, k;
        cin >> l >> k;
        g[k].push_back(l);
        hasParent[l] = 1;
    }
    int root = 1;
    while (root <= n && hasParent[root]) root++;
    dfs(root);
    cout << max(f[root][0], f[root][1]) << '\n';
    return 0;
}
