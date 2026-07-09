/*
 * LinK58: Dijkstra求最短路(2)
 */

#include <iostream>
#include <cstring>
#include <queue>
using namespace std;

typedef pair<int, int> PII;

const int N = 150010, M = 150010;
int h[N], e[M], w[M], ne[M], idx;
int dist[N];
bool st[N];
int n, m;

// 添加一条边 a->b，权重为c
void add(int a, int b, int c) {
    e[idx] = b;
    w[idx] = c;
    ne[idx] = h[a];
    h[a] = idx++;
}

int dijkstra() {
    memset(dist, 0x3f, sizeof(dist));
    dist[1] = 0;
    
    // 小根堆：{距离, 节点编号}
    priority_queue<PII, vector<PII>, greater<PII>> heap;
    heap.push({0, 1});
    
    while (!heap.empty()) {
        auto [d, ver] = heap.top();
        heap.pop();
        
        if (st[ver]) continue;
        st[ver] = true;
        
        // 遍历所有邻边
        for (int i = h[ver]; i != -1; i = ne[i]) {
            int j = e[i];
            if (dist[j] > d + w[i]) {
                dist[j] = d + w[i];
                heap.push({dist[j], j});
            }
        }
    }
    
    if (dist[n] == 0x3f3f3f3f) return -1;
    return dist[n];
}

int main() {
    cin >> n >> m;
    
    memset(h, -1, sizeof(h));
    
    while (m--) {
        int a, b, c;
        cin >> a >> b >> c;
        add(a, b, c);  // 有向图
    }
    
    cout << dijkstra() << endl;
    
    return 0;
}
