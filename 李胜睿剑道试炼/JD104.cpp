/*
 * JD104: 照妖辨品
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (long long &x : a) cin >> x;
    int idx = (k == 0 ? 0 : k - 1);
    if (idx < 0) idx = 0;
    if (idx >= n) idx = n - 1;
    nth_element(a.begin(), a.begin() + idx, a.end());
    cout << a[idx] << '\n';
    return 0;
}
