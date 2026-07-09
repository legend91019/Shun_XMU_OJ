/*
 * JD123: 差分之术
 */

#include <iostream>
using namespace std;

int a[100010], b[100010];

int main() {
    int n, m;
    cin >> n >> m;
    
    // 读取原数组
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }
    
    // 构建差分数组
    for (int i = 1; i <= n; i++) {
        b[i] = a[i] - a[i - 1];
    }
    
    // 处理m个区间加操作
    while (m--) {
        int l, r, c;
        cin >> l >> r >> c;
        b[l] += c;
        b[r + 1] -= c;
    }
    
    // 对差分数组求前缀和，得到最终序列
    for (int i = 1; i <= n; i++) {
        b[i] += b[i - 1];
        if (i > 1) cout << " ";
        cout << b[i];
    }
    cout << endl;
    
    return 0;
}
