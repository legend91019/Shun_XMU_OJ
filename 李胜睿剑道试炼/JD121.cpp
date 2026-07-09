/*
 * JD121: 蓄势之术
 */

#include <iostream>
using namespace std;

int a[100010], s[100010];

int main() {
    int n, m;
    cin >> n >> m;
    
    // 读取数组，下标从1开始
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }
    
    // 预处理前缀和
    for (int i = 1; i <= n; i++) {
        s[i] = s[i - 1] + a[i];
    }
    
    // 处理查询
    while (m--) {
        int l, r;
        cin >> l >> r;
        cout << s[r] - s[l - 1] << endl;
    }
    
    return 0;
}
