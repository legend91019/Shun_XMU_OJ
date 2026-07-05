#include <iostream>
using namespace std;

int n;
int path[10];
bool used[10];

void dfs(int depth) {
    if (depth == n) {
        for (int i = 0; i < n; ++i) {
            if (i) cout << ' ';
            cout << path[i];
        }
        cout << '\n';
        return;
    }

    for (int x = 1; x <= n; ++x) {
        if (used[x]) continue;
        used[x] = true;
        path[depth] = x;
        dfs(depth + 1);
        used[x] = false;
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n;
    dfs(0);
    return 0;
}
