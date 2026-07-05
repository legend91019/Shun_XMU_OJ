#include <iostream>
using namespace std;
int n, path[10];
bool used[10];
void dfs(int k) {
    if (k == n) {
        for (int i = 0; i < n; i++) {
            if (i > 0) cout << " ";
            cout << path[i];
        }
        cout << endl;
        return;
    }
    for (int i = 1; i <= n; i++) {
        if (!used[i]) {
            used[i] = true;
            path[k] = i;
            dfs(k + 1);
            used[i] = false;
        }
    }
}
int main() {
    cin >> n;
    dfs(0);
    return 0;
}
