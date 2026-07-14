/*
 * JD141: 雾中排阵
 */

#include <bits/stdc++.h>
using namespace std;

int n;
vector<int> path, used;

void dfs() {
    if ((int)path.size() == n) {
        for (int i = 0; i < n; i++) cout << path[i] << ' ';
        cout << '\n';
        return;
    }
    for (int i = 1; i <= n; i++) {
        if (!used[i]) {
            used[i] = 1;
            path.push_back(i);
            dfs();
            path.pop_back();
            used[i] = 0;
        }
    }
}

int main() {
    cin >> n;
    used.assign(n + 1, 0);
    dfs();
    return 0;
}
