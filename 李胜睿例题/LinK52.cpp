/*
 * LinK52: 波克布林的巡逻范围
 */

#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

typedef pair<int, int> PII;

int k, m, n;
bool vis[55][55];

// 计算一个数的各位数字之和
int digitSum(int x) {
    int s = 0;
    while (x) {
        s += x % 10;
        x /= 10;
    }
    return s;
}

int bfs() {
    if (m == 0 || n == 0) return 0;
    
    queue<PII> q;
    q.push({0, 0});
    vis[0][0] = true;
    int cnt = 1;
    
    int dx[] = {-1, 0, 1, 0};
    int dy[] = {0, 1, 0, -1};
    
    while (!q.empty()) {
        auto [x, y] = q.front(); q.pop();
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if (vis[nx][ny]) continue;
            if (digitSum(nx) + digitSum(ny) > k) continue;
            
            vis[nx][ny] = true;
            q.push({nx, ny});
            cnt++;
        }
    }
    
    return cnt;
}

int main() {
    cin >> k >> m >> n;
    memset(vis, 0, sizeof(vis));
    cout << bfs() << endl;
    return 0;
}
