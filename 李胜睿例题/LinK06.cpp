/*
 * LinK06: 两数之和
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数第二行表示数组a的n个数，每个元素用空格隔开。
 * Output: 输出和为target的两个元素的下标 i j ，其中(i
 * Sample 1: 17 7\n1 3 5 7 10 11 19 -> 3 4
 */

#include <iostream>
using namespace std;
int a[100010];
int main() {
    int target, n; cin >> target >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    int l = 0, r = n - 1;
    while (l < r) {
        if (a[l] + a[r] == target) { cout << l << " " << r << endl; break; }
        else if (a[l] + a[r] < target) l++;
        else r--;
    }
    return 0;
}
