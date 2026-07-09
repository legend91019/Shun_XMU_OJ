/*
 * LinK60: 突袭路线
 */

#include <iostream>
#include <cstring>
#include <queue>
using namespace std;

const int N = 100010, M = 100010;
int h[N], e[M], ne[M], idx;
int in[N];  // 入度
int n, m;

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
    in[b]++;  // b的入度+1
}

void topsort() {
    queue<int> q;
    vector<int> res;
    
    // 将所有入度为0的点入队
    for (int i = 1; i <= n; i++) {
        if (in[i] == 0) {
            q.push(i);
        }
    }
    
    while (!q.empty()) {
        int t = q.front();
        q.pop();
        res.push_back(t);
        
        // 遍历所有邻边
        for (int i = h[t]; i != -1; i = ne[i]) {
            int j = e[i];
            in[j]--;
            if (in[j] == 0) {
                q.push(j);
            }
        }
    }
    
    // 如果res中包含了所有n个点，则有拓扑序列
    if (res.size() == n) {
        for (int i = 0; i < n; i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << endl;
    } else {
        cout << -1 << endl;
    }
}

int main() {
    cin >> n >> m;
    
    memset(h, -1, sizeof(h));
    
    while (m--) {
        int a, b;
        cin >> a >> b;
        add(a, b);
    }
    
    topsort();
    
    return 0;
}
