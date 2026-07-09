/*
 * JD134: 一山更比
 */

#include <iostream>
using namespace std;

const int N = 100010;
int st[N], tt = 0;  // 单调栈

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        
        // 弹出所有比当前元素大的元素（维护单调递增）
        while (tt > 0 && st[tt] >= x) {
            tt--;
        }
        
        // 栈顶就是左边第一个比x小的数
        if (tt > 0) {
            cout << st[tt];
        } else {
            cout << -1;
        }
        
        if (i < n - 1) cout << " ";
        
        // 当前元素入栈
        st[++tt] = x;
    }
    cout << endl;
    
    return 0;
}
