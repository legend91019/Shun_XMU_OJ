/*
 * LinK08: 四数之和
 * Time Limit: 50000ms, Memory Limit: 256MB
 *
 * Input: 输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组A的元素个数第二行表示数组A的n个数，每个元素用空格隔开。
 * Output: 输出所有满足和为target的四元组(a,b,c,d) 使(a并且不允许有重复数字。把四元组按照a的大小升序输出，a相同的按照b的大小升序输出,a,b相同的按照c的大小升序输出。
 * Sample 1: 17 7\n0 2 5 10 15 18 25  -> 0 2 5 10
 */

#include <iostream>
#include <algorithm>
using namespace std;
int a[100010];
int main() {
    int target, n; cin >> target >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    sort(a, a + n);
    for (int i = 0; i < n - 3; i++) {
        if (i > 0 && a[i] == a[i-1]) continue;
        for (int j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && a[j] == a[j-1]) continue;
            int l = j + 1, r = n - 1;
            while (l < r) {
                int sum = a[i] + a[j] + a[l] + a[r];
                if (sum == target) { cout << a[i] << " " << a[j] << " " << a[l] << " " << a[r] << endl; l++; r--; }
                else if (sum < target) l++;
                else r--;
            }
        }
    }
    return 0;
}
