/*
 * JD114: 双剑求和
 */

#include <iostream>
using namespace std;

int a[100010], b[100010];

int main() {
    int n, m, x;
    cin >> n >> m >> x;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }
    
    // 双指针：i从头开始，j从尾开始
    int i = 0, j = m - 1;
    
    while (i < n && j >= 0) {
        int sum = a[i] + b[j];
        if (sum == x) {
            cout << i << " " << j << endl;
            break;
        } else if (sum < x) {
            i++;  // 和太小，i右移
        } else {
            j--;  // 和太大，j左移
        }
    }
    
    return 0;
}
