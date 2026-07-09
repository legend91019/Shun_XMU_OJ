/*
 * JD109: 铁壁识痕
 */

#include <iostream>
using namespace std;

// 统计二进制中1的个数（使用n & (n-1)消去最低位1）
int countOnes(int n) {
    int cnt = 0;
    while (n) {
        n &= n - 1;  // 消去最低位的1
        cnt++;
    }
    return cnt;
}

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (i > 0) cout << " ";
        cout << countOnes(x);
    }
    cout << endl;
    
    return 0;
}
