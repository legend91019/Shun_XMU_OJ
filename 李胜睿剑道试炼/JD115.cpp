/*
 * JD115: 双剑验序
 */

#include <iostream>
using namespace std;

int a[100010], b[100010];

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }
    
    int i = 0;  // 指向序列a
    
    for (int j = 0; j < m && i < n; j++) {
        if (a[i] == b[j]) {
            i++;  // 匹配成功，a的指针前进
        }
    }
    
    if (i == n) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }
    
    return 0;
}
