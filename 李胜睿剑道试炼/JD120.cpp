/*
 * JD120: 江湖真假
 */

#include <iostream>
using namespace std;

const int MAXN = 50010;
int fa[MAXN], dist[MAXN];  // dist[x] 表示x到根的距离

// 查找根节点，同时路径压缩更新距离
int find(int x) {
    if (fa[x] != x) {
        int root = find(fa[x]);
        dist[x] += dist[fa[x]];  // 更新到根的距离
        fa[x] = root;
    }
    return fa[x];
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 初始化并查集
    for (int i = 1; i <= n; i++) {
        fa[i] = i;
        dist[i] = 0;
    }
    
    int ans = 0;
    
    while (m--) {
        int d, x, y;
        cin >> d >> x >> y;
        
        // 超出范围，直接假话
        if (x > n || y > n) {
            ans++;
            continue;
        }
        
        int fx = find(x), fy = find(y);
        
        if (d == 1) {  // x和y是同类
            if (fx == fy) {
                // 已经在同一集合，检查关系是否一致
                if ((dist[x] - dist[y]) % 3 != 0) {
                    ans++;
                }
            } else {
                // 合并：x和y同类，距离差为0
                fa[fx] = fy;
                dist[fx] = dist[y] - dist[x];
            }
        } else {  // d == 2，x吃y
            if (fx == fy) {
                // 已经在同一集合，检查关系是否正确
                if ((dist[x] - dist[y] - 1) % 3 != 0) {
                    ans++;
                }
            } else {
                // 合并：x吃y，距离差为1
                fa[fx] = fy;
                dist[fx] = dist[y] - dist[x] + 1;
            }
        }
    }
    
    cout << ans << endl;
    
    return 0;
}
