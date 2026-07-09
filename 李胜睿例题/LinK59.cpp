/*
 * LinK59: 维修电路
 */

#include <iostream>
#include <cstring>
#include <deque>
using namespace std;

typedef pair<int, int> PII;

const int N = 510;
char g[N][N];
int dist[N][N];
int R, C;

// 格点坐标 (i,j) 到相邻格点的方向
// 四个方向：左上、右上、右下、左下
int dx[] = {-1, -1, 1, 1};
int dy[] = {-1, 1, 1, -1};

// 从格点(i,j)到相邻格点需要经过的格子坐标
int ix[] = {-1, -1, 0, 0};
int iy[] = {-1, 0, 0, -1};

// 四种走法对应的期望字符
// 左上: \  右上: /  右下: \  左下: /
char expect[] = {'\\', '/', '\\', '/'};

int bfs() {
    memset(dist, 0x3f, sizeof(dist));
    deque<PII> q;
    
    dist[0][0] = 0;
    q.push_front({0, 0});
    
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop_front();
        
        // 到达右下角
        if (x == R && y == C) {
            return dist[x][y];
        }
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx < 0 || nx > R || ny < 0 || ny > C) continue;
            
            // 经过的格子坐标
            int gx = x + ix[i];
            int gy = y + iy[i];
            
            // 判断是否需要旋转
            int w = (g[gx][gy] != expect[i]);
            int nd = dist[x][y] + w;
            
            if (nd < dist[nx][ny]) {
                dist[nx][ny] = nd;
                if (w == 0) {
                    q.push_front({nx, ny});  // 不旋转，优先
                } else {
                    q.push_back({nx, ny});   // 旋转，放后面
                }
            }
        }
    }
    
    return -1;  // 无解
}

int main() {
    int T;
    cin >> T;
    
    while (T--) {
        cin >> R >> C;
        
        for (int i = 0; i < R; i++) {
            cin >> g[i];
        }
        
        // 如果R+C为奇数，不可能到达
        if ((R + C) % 2 != 0) {
            cout << "NO SOLUTION" << endl;
            continue;
        }
        
        int ans = bfs();
        if (ans == -1) {
            cout << "NO SOLUTION" << endl;
        } else {
            cout << ans << endl;
        }
    }
    
    return 0;
}
