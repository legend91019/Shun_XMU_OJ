/*
 * JD130: 铁链串珠
 */

#include <iostream>
using namespace std;

const int N = 100010;

int head = -1;  // 头结点下标，-1表示空
int val[N];     // 存储节点的值
int ne[N];      // 存储下一个节点的下标
int idx = 0;    // 当前已使用的节点数（也是新节点的下标）

// 在头部插入x
void insertHead(int x) {
    val[idx] = x;
    ne[idx] = head;
    head = idx;
    idx++;
}

// 在第k个插入的元素后面插入x
void insertAfter(int k, int x) {
    val[idx] = x;
    ne[idx] = ne[k];
    ne[k] = idx;
    idx++;
}

// 删除第k个插入的元素后面的元素
void deleteAfter(int k) {
    ne[k] = ne[ne[k]];
}

int main() {
    int m;
    cin >> m;
    
    while (m--) {
        char op;
        cin >> op;
        
        if (op == 'H') {
            int x;
            cin >> x;
            insertHead(x);
        } else if (op == 'I') {
            int k, x;
            cin >> k >> x;
            insertAfter(k - 1, x);  // 第k个插入的元素下标为k-1
        } else if (op == 'D') {
            int k;
            cin >> k;
            if (k == 0) {
                // 删除头结点
                head = ne[head];
            } else {
                deleteAfter(k - 1);
            }
        }
    }
    
    // 输出链表
    for (int i = head; i != -1; i = ne[i]) {
        cout << val[i] << " ";
    }
    cout << endl;
    
    return 0;
}
