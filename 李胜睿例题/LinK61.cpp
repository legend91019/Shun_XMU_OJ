/*
 * LinK61: 最省赛程
 */

#include <iostream>
#include <cstring>
#include <queue>
#include <vector>
using namespace std;

const int N = 1010, M = 20010, C = 110;
int h[N], e[M], w[M], ne[M], idx;
int price[N];  // 每个城市的油价
int dist[N][C];  // dist[i][j] 到达城市i剩余油量j的最小花费
bool st[N][C];
int n, m, q;

struct State {
    int city, fuel, cost;
    bool operator>(const State &other) const {
        return cost > other.cost;
    }
};

void add(int a, int b, int c) {
    e[idx] = b;
    w[idx] = c;
    ne[idx] = h[a];
    h[a] = idx++;
}

int dijkstra(int cap, int start, int end) {
    memset(dist, 0x3f, sizeof(dist));
    memset(st, 0, sizeof(st));
    
    priority_queue<State, vector<State>, greater<State>> heap;
    
    // 起点：油箱为空，花费0
    dist[start][0] = 0;
    heap.push({start, 0, 0});
    
    while (!heap.empty()) {
        State t = heap.top();
        heap.pop();
        
        int city = t.city, fuel = t.fuel, cost = t.cost;
        
        if (city == end) return cost;  // 到达终点
        
        if (st[city][fuel]) continue;
        st[city][fuel] = true;
        
        // 操作1：在当前城市加1单位油（如果没满）
        if (fuel < cap) {
            int nf = fuel + 1;
            int nc = cost + price[city];
            if (nc < dist[city][nf]) {
                dist[city][nf] = nc;
                heap.push({city, nf, nc});
            }
        }
        
        // 操作2：开车到相邻城市
        for (int i = h[city]; i != -1; i = ne[i]) {
            int next = e[i];
            int need = w[i];
            
            if (fuel >= need) {
                int nf = fuel - need;
                if (cost < dist[next][nf]) {
                    dist[next][nf] = cost;
                    heap.push({next, nf, cost});
                }
            }
        }
    }
    
    return -1;  // 无法到达
}

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        cin >> price[i];
    }
    
    memset(h, -1, sizeof(h));
    
    while (m--) {
        int a, b, c;
        cin >> a >> b >> c;
        add(a, b, c);
        add(b, a, c);  // 无向图
    }
    
    cin >> q;
    
    while (q--) {
        int C, S, E;
        cin >> C >> S >> E;
        
        int ans = dijkstra(C, S, E);
        if (ans == -1) {
            cout << "impossible" << endl;
        } else {
            cout << ans << endl;
        }
    }
    
    return 0;
}
