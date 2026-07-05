#include <iostream>
using namespace std;

int memo[11][11];

int countWays(int apples, int plates) {
    if (apples == 0) return 1;
    if (plates == 0) return 0;
    if (plates == 1) return 1;

    int& ans = memo[apples][plates];
    if (ans != -1) return ans;

    if (apples < plates) return ans = countWays(apples, apples);
    return ans = countWays(apples, plates - 1) + countWays(apples - plates, plates);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    for (int i = 0; i <= 10; ++i) {
        for (int j = 0; j <= 10; ++j) {
            memo[i][j] = -1;
        }
    }

    int t;
    cin >> t;
    while (t--) {
        int m, n;
        cin >> m >> n;
        cout << countWays(m, n) << '\n';
    }

    return 0;
}
