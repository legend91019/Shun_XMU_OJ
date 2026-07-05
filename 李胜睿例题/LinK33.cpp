/*
 * LinK33: 攻击范围
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行包含整数n和q，表示数组长度和询问个数。第二行包含n个整数（均在1~10000范围内），表示完整数组。接下来q行，每行包含一个整数k，表示一个询问元素。数据范围1≤n≤1000001≤q≤100001≤k≤10000
 * Output: 共q行，每行包含两个整数，表示所求元素的起始位置和终止位置（位置从0开始计数）。如果数组中不存在该元素，则返回“-1 -1”。
 * Sample 1: 6 3\n1 2 2 3 3 4\n3\n4\n5 -> 3 4\n5 5\n-1 -1
 */

#include <iostream>
using namespace std;
int a[100010];
int main() {
    int n, q; cin >> n >> q;
    for (int i = 0; i < n; i++) cin >> a[i];
    while (q--) {
        int x, l, r; cin >> x;
        int lo = 0, hi = n - 1;
        while (lo < hi) { int m = (lo+hi)>>1; if (a[m]>=x) hi=m; else lo=m+1; }
        if (a[lo] != x) { cout << "-1 -1" << endl; continue; }
        l = lo; hi = n - 1;
        while (lo < hi) { int m = (lo+hi+1)>>1; if (a[m]<=x) lo=m; else hi=m-1; }
        r = lo;
        cout << l << " " << r << endl;
    }
    return 0;
}
