/*
 * LinK29: 输出前k大的数
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行包含一个整数n，表示数组的大小。n 第二行包含n个整数，表示数组的元素，整数之间以一个空格分开。每个整数的绝对值不超过100000000。第三行包含一个整数k。k
 * Output: 从大到小输出前k大的数，每个数一行。
 * Sample 1: 10\n4 5 6 9 8 7 1 2 3 0\n5 -> 9\n8\n7\n6\n5
 */

#include <iostream>
#include <algorithm>
using namespace std;
int a[100010];
int main() {
    int n, k; cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> k;
    sort(a, a + n, greater<int>());
    for (int i = 0; i < k; i++) cout << a[i] << endl;
    return 0;
}
