/*
 * JD166: 递增剑意II
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> q;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        auto it = lower_bound(q.begin(), q.end(), x);
        if (it == q.end()) q.push_back(x);
        else *it = x;
    }
    cout << q.size() << '\n';
    return 0;
}
