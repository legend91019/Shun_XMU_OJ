#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    while (cin >> s && s != ".") {
        int n = s.size(), ans = 1;
        for (int p = 1; p <= n; p++) {
            if (n % p == 0) {
                bool ok = true;
                for (int i = p; i < n; i++)
                    if (s[i] != s[i % p]) { ok = false; break; }
                if (ok) { ans = n / p; break; }
            }
        }
        cout << ans << endl;
    }
    return 0;
}
