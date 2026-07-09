/*
 * JD126: 合围归阵
 */

#include <iostream>
#include <algorithm>
using namespace std;

typedef pair<int, int> PII;

PII segs[100010];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> segs[i].first >> segs[i].second;
    }
    
    // 按左端点排序
    sort(segs, segs + n);
    
    int res = 0;
    int l = segs[0].first, r = segs[0].second;
    
    for (int i = 1; i < n; i++) {
        // 当前区间与前一个区间相交或相邻，合并
        if (segs[i].first <= r) {
            r = max(r, segs[i].second);
        } else {
            // 无法合并，开启新区间
            res++;
            l = segs[i].first;
            r = segs[i].second;
        }
    }
    
    // 加上最后一个区间
    res++;
    
    cout << res << endl;
    
    return 0;
}
