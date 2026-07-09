/*
 * JD105: 双剑合阵
 */

#include <iostream>
using namespace std;

int a[100010], tmp[100010];

void mergeSort(int l, int r) {
    if (l >= r) return;
    
    int mid = (l + r) / 2;
    
    // 递归拆分
    mergeSort(l, mid);
    mergeSort(mid + 1, r);
    
    // 合并两个有序数组
    int i = l, j = mid + 1, k = 0;
    
    while (i <= mid && j <= r) {
        if (a[i] <= a[j]) {
            tmp[k++] = a[i++];
        } else {
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
    
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << a[i];
    }
    cout << endl;
    
    return 0;
}
