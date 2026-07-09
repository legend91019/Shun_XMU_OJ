/*
 * JD112: 叠甲千层
 */

#include <iostream>
#include <cstring>
using namespace std;

int a[100010], c[200010];

int main() {
    string s1;
    int b;
    cin >> s1 >> b;
    
    // 如果乘数为0，直接输出0
    if (b == 0) {
        cout << 0 << endl;
        return 0;
    }
    
    // 将大数字符串逆序存入数组
    int len1 = s1.length();
    for (int i = 0; i < len1; i++) {
        a[i] = s1[len1 - 1 - i] - '0';
    }
    
    // 逐位相乘
    int carry = 0;
    int len = 0;
    
    for (int i = 0; i < len1; i++) {
        int product = a[i] * b + carry;
        c[i] = product % 10;
        carry = product / 10;
        len = i + 1;
    }
    
    // 处理最后的进位
    while (carry > 0) {
        c[len] = carry % 10;
        carry /= 10;
        len++;
    }
    
    // 倒序输出
    for (int i = len - 1; i >= 0; i--) {
        cout << c[i];
    }
    cout << endl;
    
    return 0;
}
