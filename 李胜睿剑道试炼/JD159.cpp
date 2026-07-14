/*
 * JD159: 双谱共鸣
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    string a, b;
    cin >> n >> m;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, a);
    getline(cin, b);
    vector<int> prev(m + 1), cur(m + 1);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cur[j] = max(prev[j], cur[j - 1]);
            if (a[i - 1] == b[j - 1]) cur[j] = max(cur[j], prev[j - 1] + 1);
        }
        swap(prev, cur);
        fill(cur.begin(), cur.end(), 0);
    }
    cout << prev[m] << '\n';
    return 0;
}
