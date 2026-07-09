/*
 * JD110: 万钧合一
 */

#include <iostream>
#include <cstring>
using namespace std;

int a[100010], b[100010], c[100010];

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    
    // 将字符串逆序存入数组
    int len1 = s1.length(), len2 = s2.length();
    for (int i = 0; i < len1; i++) {
        a[i] = s1[len1 - 1 - i] - '0';
    }
    for (int i = 0; i < len2; i++) {
        b[i] = s2[len2 - 1 - i] - '0';
    }
    
    // 逐位相加
    int len = max(len1, len2);
    int carry = 0;
    
    for (int i = 0; i < len; i++) {
        int sum = a[i] + b[i] + carry;
        c[i] = sum % 10;
        carry = sum / 10;
    }
    
    // 处理最高位的进位
    if (carry > 0) {
        c[len] = carry;
        len++;
    }
    
    // 倒序输出
    for (int i = len - 1; i >= 0; i--) {
        cout << c[i];
    }
    cout << endl;
    
    return 0;
}
