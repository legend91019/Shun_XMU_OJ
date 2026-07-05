/*
 * LinK32: 查找指定数
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行N表示数组大小。第二行为nums的N个元素(不包含重复元素)第三行T表示接下来又T个元素需要查找。接下来T行，每行为查找的目标元素target值。
 * Output: 输出为T个目标元素的下标，找不到输出-1
 * Sample 1: 36\n0 1 5 8 10 12 15 17 20 26 36 68 71 80 90 92 96 100 101 104 130 275 345 405 425 519 573 583 608 616 714 780 802 842 910 961 \n5\n8\n42\n64\n130\n912 -> 3\n-1\n-1\n20\n-1\n
 */

#include <iostream>
using namespace std;
int a[100010];
int main() {
    int n; cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    int t; cin >> t;
    while (t--) {
        int x; cin >> x;
        int l = 0, r = n - 1, ans = -1;
        while (l <= r) {
            int mid = (l + r) >> 1;
            if (a[mid] == x) { ans = mid; break; }
            else if (a[mid] < x) l = mid + 1;
            else r = mid - 1;
        }
        cout << ans << endl;
    }
    return 0;
}
