/*
 * JD125: 离散聚力
 */

#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

typedef pair<int, int> PII;

vector<PII> add, query;
vector<int> alls;
int a[300010], s[300010];

// 二分查找x在alls中的位置（从1开始）
int find(int x) {
    int l = 0, r = alls.size() - 1;
    while (l < r) {
        int mid = (l + r) / 2;
        if (alls[mid] >= x) r = mid;
        else l = mid + 1;
    }
    return l + 1;  // 下标从1开始
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 读取n个加操作
    for (int i = 0; i < n; i++) {
        int x, c;
        cin >> x >> c;
        add.push_back({x, c});
        alls.push_back(x);
    }
    
    // 读取m个查询
    for (int i = 0; i < m; i++) {
        int l, r;
        cin >> l >> r;
        query.push_back({l, r});
        alls.push_back(l);
        alls.push_back(r);
    }
    
    // 排序去重
    sort(alls.begin(), alls.end());
    alls.erase(unique(alls.begin(), alls.end()), alls.end());
    
    // 处理加操作
    for (auto item : add) {
        int idx = find(item.first);
        a[idx] += item.second;
    }
    
    // 求前缀和
    for (int i = 1; i <= alls.size(); i++) {
        s[i] = s[i - 1] + a[i];
    }
    
    // 处理查询
    for (auto item : query) {
        int l = find(item.first);
        int r = find(item.second);
        cout << s[r] - s[l - 1] << endl;
    }
    
    return 0;
}
