/*
 * JD128: 合果成堆
 */

#include <iostream>
#include <queue>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    priority_queue<int, vector<int>, greater<int>> heap;  // 小根堆
    
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        heap.push(x);
    }
    
    int ans = 0;
    
    while (heap.size() > 1) {
        // 取出最小的两堆
        int a = heap.top(); heap.pop();
        int b = heap.top(); heap.pop();
        
        int sum = a + b;
        ans += sum;
        heap.push(sum);
    }
    
    cout << ans << endl;
    
    return 0;
}
