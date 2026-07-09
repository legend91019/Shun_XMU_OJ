/*
 * JD106: 逆流之数
 */

#include <iostream>
using namespace std;

int a[100010], tmp[100010];
long long ans = 0;

void mergeSort(int l, int r) {
    if (l >= r) return;
    
    int mid = (l + r) / 2;
    
    // 递归拆分
    mergeSort(l, mid);
    mergeSort(mid + 1, r);
    
    // 合并两个有序数组，同时统计逆序对
    int i = l, j = mid + 1, k = 0;
    
    while (i <= mid && j <= r) {
        if (a[i] <= a[j]) {
            tmp[k++] = a[i++];
        } else {
            // 右边元素先出列，左边剩余元素都与它构成逆序对
            ans += mid - i + 1;
            tmp[k++] = a[j++];
        }
    }
    
    while (i <= mid) tmp[k++] = a[i++];
    while (j <= r) tmp[k++] = a[j++];
    
    // 将临时数组复制回原数组
    for (i = l, k = 0; i <= r; i++, k++) {
        a[i] = tmp[k];
    }
}

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    mergeSort(0, n - 1);
    
    cout << ans << endl;
    
    return 0;
}
