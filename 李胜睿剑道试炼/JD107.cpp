/*
 * JD107: 石壁听风
 */

#include <iostream>
using namespace std;

int a[100010];

// 找第一个 >= x 的位置（左边界）
int lowerBound(int l, int r, int x) {
    while (l < r) {
        int mid = (l + r) / 2;
        if (a[mid] >= x) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    if (a[l] == x) return l;
    return -1;
}

// 找最后一个 <= x 的位置（右边界）
int upperBound(int l, int r, int x) {
    while (l < r) {
        int mid = (l + r + 1) / 2;
        if (a[mid] <= x) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    if (a[l] == x) return l;
    return -1;
}

int main() {
    int n, q;
    cin >> n >> q;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    while (q--) {
        int x;
        cin >> x;
        
        int left = lowerBound(0, n - 1, x);
        if (left == -1) {
            cout << "-1 -1" << endl;
        } else {
            int right = upperBound(0, n - 1, x);
            cout << left << " " << right << endl;
        }
    }
    
    return 0;
}
