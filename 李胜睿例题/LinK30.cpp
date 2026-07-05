/*
 * LinK30: 归并排序
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 输入共两行，第一行包含整数 n。第二行包含 n 个整数（所有整数均在1~109109范围内），表示整个数列。数据范围:1≤n≤100000
 * Output: 输出共一行，包含 n 个整数，表示排好序的数列。
 * Sample 1: 5\n3 1 2 4 5 -> 1 2 3 4 5
 */

#include <iostream>
#include <algorithm>
using namespace std;
int a[100010];
int main() {
    int n; cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    sort(a, a + n);
    for (int i = 0; i < n; i++) { if (i) cout << " "; cout << a[i]; }
    cout << endl;
    return 0;
}
