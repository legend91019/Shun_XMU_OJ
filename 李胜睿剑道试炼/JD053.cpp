/*
 * JD053: 完璧归宗
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long n;
    cin >> n;
    unsigned long long perfect[] = {
        6ULL,
        28ULL,
        496ULL,
        8128ULL,
        33550336ULL,
        8589869056ULL,
        137438691328ULL,
        2305843008139952128ULL
    };

    for (unsigned long long x : perfect) {
        if (x <= n) cout << x << '\n';
    }
    return 0;
}
