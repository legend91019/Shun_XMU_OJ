/*
 * JD131: 叠石成塔
 */

#include <iostream>
#include <string>
using namespace std;

const int N = 100010;
int st[N], tt = 0;  // tt指向栈顶，tt=0表示空栈

int main() {
    int m;
    cin >> m;
    
    while (m--) {
        string op;
        cin >> op;
        
        if (op == "push") {
            int x;
            cin >> x;
            st[++tt] = x;  // 入栈
        } else if (op == "pop") {
            tt--;  // 出栈
        } else if (op == "query") {
            cout << st[tt] << endl;  // 查询栈顶
        } else if (op == "empty") {
            if (tt == 0) {
                cout << "YES" << endl;
            } else {
                cout << "NO" << endl;
            }
        }
    }
    
    return 0;
}
