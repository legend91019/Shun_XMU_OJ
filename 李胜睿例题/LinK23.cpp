/*
 * LinK23: 二进制密码锁
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 两行，给出两个由0、1组成的等长字符串，表示当前/目标密码锁状态，其中0代表凹，1代表凸。
 * Output: 至少需要进行的按按钮操作次数，如果无法实现转变，则输出impossible。
 * Sample 1: 011\n000 -> 1
 */

#include <iostream>
#include <string>
using namespace std;
int main() {
    string a, b; cin >> a >> b; int n = a.length(), best = 100;
    // try pressing first button or not
    for (int first = 0; first <= 1; first++) {
        string s = a; int cnt = 0;
        if (first) {
            s[0] ^= 1; if (n > 1) s[1] ^= 1; cnt++;
        }
        for (int i = 1; i < n; i++) {
            if (s[i-1] != b[i-1]) {
                s[i-1] ^= 1; s[i] ^= 1;
                if (i + 1 < n) s[i+1] ^= 1;
                cnt++;
            }
        }
        if (s == b && cnt < best) best = cnt;
    }
    if (best == 100) cout << "impossible" << endl;
    else cout << best << endl;
    return 0;
}
