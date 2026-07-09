/*
 * JD132: 列阵待命
 */

#include <iostream>
#include <string>
using namespace std;

const int N = 100010;
int q[N], hh = 0, tt = -1;  // hh队头，tt队尾，hh>tt表示空队列

int main() {
    int m;
    cin >> m;
    
    while (m--) {
        string op;
        cin >> op;
        
        if (op == "push") {
            int x;
            cin >> x;
            q[++tt] = x;  // 入队
        } else if (op == "pop") {
            hh++;  // 出队
        } else if (op == "query") {
            cout << q[hh] << endl;  // 查询队头
        } else if (op == "empty") {
            if (hh > tt) {
                cout << "YES" << endl;
            } else {
                cout << "NO" << endl;
            }
        }
    }
    
    return 0;
}
