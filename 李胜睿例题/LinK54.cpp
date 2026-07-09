/*
 * LinK54: 骑士林克的怜悯(2)
 */

#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

typedef pair<int, int> PII;

const int N = 155;
char g[N][N];
int dist[N][N];

// 骑士的8个移动方向（日字形）
int dx[] = {-2, -1, 1, 2, 2, 1, -1, -2};
int dy[] = {1, 2, 2, 1, -1, -2, -2, -1};

int main() {
    int col, row;  // col列，row行
    cin >> col >> row;
    
    int sx, sy, ex, ey;
    
    for (int i = 0; i < row; i++) {
        cin >> g[i];
        for (int j = 0; j < col; j++) {
            if (g[i][j] == 'K') {
                sx = i;
                sy = j;
            }
            if (g[i][j] == 'H') {
                ex = i;
                ey = j;
            }
        }
    }
    
    memset(dist, -1, sizeof(dist));
    
    queue<PII> q;
    q.push({sx, sy});
    dist[sx][sy] = 0;
    
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop();
        
        // 到达终点
        if (x == ex && y == ey) {
            cout << dist[x][y] << endl;
            return 0;
        }
        
        for (int i = 0; i < 8; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
            if (dist[nx][ny] != -1) continue;
            if (g[nx][ny] == '*') continue;
            
            dist[nx][ny] = dist[x][y] + 1;
            q.push({nx, ny});
        }
    }
    
    // 如果没有找到路径
    cout << -1 << endl;
    
    return 0;
}
