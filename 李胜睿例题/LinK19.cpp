#include <iostream>
using namespace std;

int n;
int selected[16];

void dfs(int x, int count) {
    if (x > n) {
        for (int i = 0; i < count; ++i) {
            if (i) cout << ' ';
            cout << selected[i];
        }
        cout << '\n';
        return;
    }

    dfs(x + 1, count);

    selected[count] = x;
    dfs(x + 1, count + 1);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n;
    dfs(1, 0);
    return 0;
}
