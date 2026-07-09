/*
 * JD138: 合帮并派
 */

#include <iostream>
using namespace std;

const int N = 100010;
int fa[N];  // 父节点数组

// 查找根节点（带路径压缩）
int find(int x) {
    if (fa[x] != x) {
        fa[x] = find(fa[x]);  // 路径压缩
    }
    return fa[x];
}

// 合并两个集合
void unite(int a, int b) {
    fa[find(a)] = find(b);
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 初始化：每个元素独立为一个集合
    for (int i = 1; i <= n; i++) {
        fa[i] = i;
    }
    
    while (m--) {
        char op;
        int a, b;
        cin >> op >> a >> b;
        
        if (op == 'M') {
            unite(a, b);
        } else if (op == 'Q') {
            if (find(a) == find(b)) {
                cout << "Yes" << endl;
            } else {
                cout << "No" << endl;
            }
        }
    }
    
    return 0;
}
