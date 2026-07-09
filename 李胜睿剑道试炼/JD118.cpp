/*
 * JD118: 剑招收放
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int mask = 1; mask < (1 << n); mask++) {
        bool first = true;
        for (int i = 0; i < n; i++) {
            if (mask >> i & 1) {
                if (!first) cout << ' ';
                first = false;
                cout << i + 1;
            }
        }
        cout << '\n';
    }
    return 0;
}
