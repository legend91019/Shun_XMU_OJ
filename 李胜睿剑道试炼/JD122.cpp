/*
 * JD122: 方阵蓄势
 */

#include <iostream>
using namespace std;

int a[1010][1010], s[1010][1010];

int main() {
    int n, m, q;
    cin >> n >> m >> q;
    
    // 读取矩阵，下标从1开始
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cin >> a[i][j];
        }
    }
    
    // 预处理二维前缀和
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + a[i][j];
        }
    }
    
    // 处理查询
    while (q--) {
        int x1, y1, x2, y2;
        cin >> x1 >> y1 >> x2 >> y2;
        
        int sum = s[x2][y2] - s[x1 - 1][y2] - s[x2][y1 - 1] + s[x1 - 1][y1 - 1];
        cout << sum << endl;
    }
    
    return 0;
}
