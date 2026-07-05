/*
 * LinK07: 三数之和
 * Time Limit: 10000ms, Memory Limit: 256MB
 *
 * Input: 输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数第二行表示数组a的n个数，每个元素用空格隔开。
 * Output: 输出所有满足和为target的三元组(x,y,z)，要求(x把三元组按照x的大小升序输出，x相同的按照y的大小升序输出。
 * Sample 1: 17 7\n0 2 7 10 15 18 25  -> 0 2 15\n0 7 10
 */

#include <iostream>
#include <algorithm>
using namespace std;
int a[100010];
int main() {
    int target, n; cin >> target >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    sort(a, a + n);
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && a[i] == a[i-1]) continue;
        int l = i + 1, r = n - 1;
        while (l < r) {
            int sum = a[i] + a[l] + a[r];
            if (sum == target) { cout << a[i] << " " << a[l] << " " << a[r] << endl; l++; r--; }
            else if (sum < target) l++;
            else r--;
        }
    }
    return 0;
}
