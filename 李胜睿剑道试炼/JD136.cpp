/*
 * JD136: 剑谱寻踪
 */

#include <iostream>
#include <cstring>
using namespace std;

const int N = 100010, M = 1000010;
char p[N], s[M];
int ne[N];

int main() {
    int n, m;
    
    // 读取模式串
    cin >> n >> p + 1;  // 下标从1开始
    
    // 读取文本串
    cin >> m >> s + 1;
    
    // 预处理next数组
    for (int i = 2, j = 0; i <= n; i++) {
        while (j && p[i] != p[j + 1]) j = ne[j];
        if (p[i] == p[j + 1]) j++;
        ne[i] = j;
    }
    
    // KMP匹配
    bool first = true;
    for (int i = 1, j = 0; i <= m; i++) {
        while (j && s[i] != p[j + 1]) j = ne[j];
        if (s[i] == p[j + 1]) j++;
        
        if (j == n) {
            // 匹配成功
            if (!first) cout << " ";
            cout << i - n;  // 起始位置（从0开始）
            first = false;
            j = ne[j];  // 继续查找下一个
        }
    }
    cout << endl;
    
    return 0;
}
