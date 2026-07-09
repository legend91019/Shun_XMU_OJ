/*
 * JD127: 一箭穿心
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<pair<long long, long long>> seg(n);
    for (int i = 0; i < n; i++) {
        cin >> seg[i].first >> seg[i].second;
    }
    sort(seg.begin(), seg.end(), [](const pair<long long, long long> &a, const pair<long long, long long> &b) {
        return a.second < b.second;
    });

    int ans = 0;
    long long last = LLONG_MIN;
    for (int i = 0; i < n; i++) {
        if (seg[i].first > last) {
            ans++;
            last = seg[i].second;
        }
    }

    cout << ans << '\n';
    return 0;
}
