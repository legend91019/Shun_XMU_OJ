/*
 * LinK31: 求排列的逆序数
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行是一个整数n，表示该排列有n个数（n 第二行是n个不同的正整数，之间以空格隔开，表示该排列。
 * Output: 输出该排列的逆序数。
 * Sample 1: 6\n2 6 3 4 5 1 -> 8
 */

#include <iostream>
using namespace std;
int a[100010], tmp[100010];
long long cnt;
void merge_sort(int l, int r) {
    if (l >= r) return;
    int mid = (l + r) >> 1;
    merge_sort(l, mid); merge_sort(mid + 1, r);
    int i = l, j = mid + 1, k = 0;
    while (i <= mid && j <= r) {
        if (a[i] <= a[j]) tmp[k++] = a[i++];
        else { tmp[k++] = a[j++]; cnt += mid - i + 1; }
    }
    while (i <= mid) tmp[k++] = a[i++];
    while (j <= r) tmp[k++] = a[j++];
    for (int i = 0; i < k; i++) a[l+i] = tmp[i];
}
int main() {
    int n; cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    merge_sort(0, n - 1);
    cout << cnt << endl;
    return 0;
}
