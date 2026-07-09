/*
 * JD137: 堆石成丘
 */

#include <iostream>
#include <cstring>
#include <string>
using namespace std;

const int N = 100010;
int h[N];       // 堆数组
int ph[N];      // ph[k] = 第k个插入的元素在堆中的下标
int hp[N];      // hp[i] = 堆中下标为i的元素是第几个插入的
int sz = 0;     // 堆的大小
int idx = 0;    // 插入序号

// 交换堆中两个位置
void heap_swap(int a, int b) {
    swap(ph[hp[a]], ph[hp[b]]);
    swap(hp[a], hp[b]);
    swap(h[a], h[b]);
}

// 上浮
void up(int u) {
    while (u / 2 && h[u] < h[u / 2]) {
        heap_swap(u, u / 2);
        u /= 2;
    }
}

// 下沉
void down(int u) {
    int t = u;
    if (u * 2 <= sz && h[u * 2] < h[t]) t = u * 2;
    if (u * 2 + 1 <= sz && h[u * 2 + 1] < h[t]) t = u * 2 + 1;
    if (t != u) {
        heap_swap(u, t);
        down(t);
    }
}

int main() {
    int m;
    cin >> m;
    
    while (m--) {
        string op;
        cin >> op;
        
        if (op == "I") {
            int x;
            cin >> x;
            sz++;
            idx++;
            ph[idx] = sz;
            hp[sz] = idx;
            h[sz] = x;
            up(sz);
        } else if (op == "PM") {
            cout << h[1] << endl;
        } else if (op == "DM") {
            heap_swap(1, sz);
            sz--;
            down(1);
        } else if (op == "D") {
            int k;
            cin >> k;
            int u = ph[k];  // 第k个插入的元素在堆中的位置
            heap_swap(u, sz);
            sz--;
            down(u);
            up(u);
        } else if (op == "C") {
            int k, x;
            cin >> k >> x;
            int u = ph[k];
            h[u] = x;
            down(u);
            up(u);
        }
    }
    
    return 0;
}
