/*
 * LinK36: 最小预算值
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行包含两个整数N,M，用单个空格隔开。第二行有N个从1到10000之间的整数，表示接下来N天里每天的固定支出预算。
 * Output: 一个整数，即满足每组支出需要的最小的预算值。
 * Sample 1: 7 5\n100 400 300 100 500 101 400 -> 500
 */

#include <iostream>
using namespace std;
int a[100010], n, m;
bool check(int x) {
    int cnt = 1, sum = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] > x) return false;
        if (sum + a[i] > x) { cnt++; sum = a[i]; }
        else sum += a[i];
    }
    return cnt <= m;
}
int main() {
    cin >> n >> m;
    int lo = 0, hi = 0;
    for (int i = 0; i < n; i++) { cin >> a[i]; hi += a[i]; }
    while (lo < hi) {
        int mid = (lo + hi) >> 1;
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    cout << lo << endl;
    return 0;
}
