/*
 * JD129: 中位之选
 */

#include <iostream>
#include <algorithm>
using namespace std;

int a[100010];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    // 排序
    sort(a, a + n);
    
    // 取中位数
    int median = a[n / 2];
    
    // 计算所有点到中位数的距离之和
    long long ans = 0;
    for (int i = 0; i < n; i++) {
        ans += abs(a[i] - median);
    }
    
    cout << ans << endl;
    
    return 0;
}
