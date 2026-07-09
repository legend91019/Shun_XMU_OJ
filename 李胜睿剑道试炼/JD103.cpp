/*
 * JD103: 立桩定阵
 */

#include <iostream>
using namespace std;

int a[100010];

void quickSort(int l, int r) {
    if (l >= r) return;
    
    // 选中间元素作为基准
    int pivot = a[(l + r) / 2];
    int i = l, j = r;
    
    // 双指针分区
    while (i <= j) {
        while (a[i] < pivot) i++;
        while (a[j] > pivot) j--;
        if (i <= j) {
            swap(a[i], a[j]);
            i++;
            j--;
        }
    }
    
    // 递归处理左右两部分
    if (l < j) quickSort(l, j);
    if (i < r) quickSort(i, r);
}

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    quickSort(0, n - 1);
    
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << a[i];
    }
    cout << endl;
    
    return 0;
}
