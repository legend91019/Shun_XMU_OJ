/*
 * JD169: 棋盘铺阵
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    while (cin >> n >> m) {
        if (n == 0 && m == 0) break;
        vector<int> st;
        for (int s = 0; s < (1 << n); s++) {
            int cnt = 0;
            bool ok = true;
            for (int i = 0; i < n; i++) {
                if (s >> i & 1) {
                    if (cnt & 1) ok = false;
                    cnt = 0;
                } else cnt++;
            }
            if (cnt & 1) ok = false;
            if (ok) st.push_back(s);
        }
        vector<vector<long long>> f(m + 1, vector<long long>(1 << n));
        f[0][0] = 1;
        for (int col = 1; col <= m; col++) {
            for (int a = 0; a < (1 << n); a++)
                for (int b = 0; b < (1 << n); b++)
                    if ((a & b) == 0 && find(st.begin(), st.end(), a | b) != st.end())
                        f[col][a] += f[col - 1][b];
        }
        cout << f[m][0] << '\n';
    }
    return 0;
}
