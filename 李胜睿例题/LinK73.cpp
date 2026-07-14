/*
 * LinK73: 拦截导弹
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a;
    int x;
    while (cin >> x) a.push_back(x);
    int n = a.size();
    vector<int> f(n, 1);
    int first = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++)
            if (a[j] >= a[i]) f[i] = max(f[i], f[j] + 1);
        first = max(first, f[i]);
    }
    vector<int> q;
    for (int h : a) {
        auto it = lower_bound(q.begin(), q.end(), h);
        if (it == q.end()) q.push_back(h);
        else *it = h;
    }
    cout << first << '\n' << q.size() << '\n';
    return 0;
}
