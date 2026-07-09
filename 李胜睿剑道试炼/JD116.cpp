/*
 * JD116: 无重之最
 */

#include <iostream>
using namespace std;

int a[100010], cnt[100010];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    int ans = 0;
    
    // 滑动窗口
    for (int i = 0, j = 0; j < n; j++) {
        cnt[a[j]]++;  // 右指针扩展，加入新元素
        
        // 如果出现重复，左指针收缩
        while (cnt[a[j]] > 1) {
            cnt[a[i]]--;
            i++;
        }
        
        // 更新最大长度
        int len = j - i + 1;
        if (len > ans) ans = len;
    }
    
    cout << ans << endl;
    
    return 0;
}
