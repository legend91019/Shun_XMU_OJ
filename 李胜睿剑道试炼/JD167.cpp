/*
 * JD167: 整分剑法
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    const int MOD = 1000000007;
    vector<int> f(n + 1);
    f[0] = 1;
    for (int i = 1; i <= n; i++)
        for (int j = i; j <= n; j++)
            f[j] = (f[j] + f[j - i]) % MOD;
    cout << f[n] << '\n';
    return 0;
}
