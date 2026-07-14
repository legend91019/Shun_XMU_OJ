/*
 * JD168: 数码计数
 */

#include <bits/stdc++.h>
using namespace std;

long long count_digit(long long n, int x) {
    if (n <= 0) return 0;
    long long ans = 0;
    for (long long i = 1; i <= n; i *= 10) {
        long long high = n / (i * 10), cur = n / i % 10, low = n % i;
        if (x) {
            ans += high * i;
            if (cur > x) ans += i;
            else if (cur == x) ans += low + 1;
        } else {
            if (high) {
                ans += (high - 1) * i;
                if (cur > 0) ans += i;
                else ans += low + 1;
            }
        }
        if (i > n / 10) break;
    }
    return ans;
}

int main() {
    long long a, b;
    while (cin >> a >> b && (a || b)) {
        if (a > b) swap(a, b);
        for (int i = 0; i <= 9; i++) {
            if (i) cout << ' ';
            long long ans = count_digit(b, i) - count_digit(a - 1, i);
            if (a == 0 && i == 0) ans++;
            cout << ans;
        }
        cout << '\n';
    }
    return 0;
}
