#include <iostream>
using namespace std;

int n, m;
int chosen[26];

void dfs(int start, int count) {
    if (count == m) {
        for (int i = 0; i < m; ++i) {
            if (i) cout << ' ';
            cout << chosen[i];
        }
        cout << '\n';
        return;
    }

    if (n - start + 1 < m - count) return;

    for (int x = start; x <= n; ++x) {
        chosen[count] = x;
        dfs(x + 1, count + 1);
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n >> m;
    dfs(1, 0);
    return 0;
}
