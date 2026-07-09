/*
 * JD119: 剑阵组合
 */

#include <iostream>
#include <vector>
using namespace std;

int n, k;
vector<int> path;

void dfs(int start) {
    // 剪枝：剩余数字不够凑满k个
    if (path.size() + (n - start + 1) < k) {
        return;
    }
    
    // 选满了k个，输出
    if (path.size() == k) {
        for (int i = 0; i < path.size(); i++) {
            if (i > 0) cout << " ";
            cout << path[i];
        }
        cout << endl;
        return;
    }
    
    // 从start开始尝试选
    for (int i = start; i <= n; i++) {
        path.push_back(i);
        dfs(i + 1);
        path.pop_back();
    }
}

int main() {
    cin >> n >> k;
    dfs(1);
    
    return 0;
}
