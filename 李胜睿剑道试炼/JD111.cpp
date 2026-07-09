/*
 * JD111: 削铁如泥
 */

#include <iostream>
#include <cstring>
using namespace std;

int a[100010], b[100010], c[100010];

// 比较两个字符串表示的数字大小，返回 true 表示 a >= b
bool compare(string &s1, string &s2) {
    if (s1.length() != s2.length()) {
        return s1.length() > s2.length();
    }
    return s1 >= s2;
}

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    
    // 判断是否需要交换，确保大减小
    bool negative = false;
    if (!compare(s1, s2)) {
        swap(s1, s2);
        negative = true;
    }
    
    // 将字符串逆序存入数组
    int len1 = s1.length(), len2 = s2.length();
    for (int i = 0; i < len1; i++) {
        a[i] = s1[len1 - 1 - i] - '0';
    }
    for (int i = 0; i < len2; i++) {
        b[i] = s2[len2 - 1 - i] - '0';
    }
    
    // 逐位相减
    int len = len1;
    for (int i = 0; i < len; i++) {
        if (a[i] < b[i]) {
            a[i + 1]--;      // 向高位借1
            a[i] += 10;      // 当前位+10
        }
        c[i] = a[i] - b[i];
    }
    
    // 去除前导0
    while (len > 1 && c[len - 1] == 0) {
        len--;
    }
    
    // 输出结果
    if (negative) cout << "-";
    for (int i = len - 1; i >= 0; i--) {
        cout << c[i];
    }
    cout << endl;
    
    return 0;
}
