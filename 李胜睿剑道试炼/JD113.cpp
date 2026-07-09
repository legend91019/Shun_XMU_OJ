/*
 * JD113: 分金断玉
 */

#include <iostream>
#include <cstring>
using namespace std;

int a[100010], c[100010];

int main() {
    string s;
    int b;
    cin >> s >> b;
    
    // 特判：被除数为0
    if (s == "0") {
        cout << 0 << endl << 0 << endl;
        return 0;
    }
    
    int len = s.length();
    
    // 从高位到低位逐位计算
    long long remainder = 0;
    int idx = 0;
    
    for (int i = 0; i < len; i++) {
        remainder = remainder * 10 + (s[i] - '0');
        c[idx++] = remainder / b;
        remainder %= b;
    }
    
    // 去除前导0
    int start = 0;
    while (start < idx && c[start] == 0) {
        start++;
    }
    
    // 如果商为0，输出0
    if (start == idx) {
        cout << 0 << endl;
    } else {
        for (int i = start; i < idx; i++) {
            cout << c[i];
        }
        cout << endl;
    }
    
    cout << remainder << endl;
    
    return 0;
}
