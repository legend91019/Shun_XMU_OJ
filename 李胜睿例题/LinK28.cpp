/*
 * LinK28: 快速选择第k个数
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行包含两个整数 n 和 k。第二行包含 n 个整数（所有整数均在1--10^9范围内），表示整数数列。数据范围:1≤n≤100000,1≤k≤n
 * Output: 输出一个整数，表示数列的第k小数。
 * Sample 1: 5 3\n2 4 1 5 3 -> 3
 */

#include <iostream>
#include <algorithm>
using namespace std;
int a[100010];
int main() {
    int n, k; cin >> n >> k;
    for (int i = 0; i < n; i++) cin >> a[i];
    nth_element(a, a + k - 1, a + n);
    cout << a[k - 1] << endl;
    return 0;
}
