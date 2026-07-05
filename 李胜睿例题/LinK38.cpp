/*
 * LinK38: 林克的命运之阵
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * 从第1行出发，只能向下、左、右移动，不能走重复格子。
 * 求n步后不同的方案数。
 *
 * DP递推: A(n) = A(n-1) + 2*L(n-1), L(n) = L(n-1) + A(n-1)
 * A(0)=L(0)=1
 */

#include <iostream>
using namespace std;

long long A[21], L[21];

int main() {
    int n;
    cin >> n;
    A[0] = L[0] = 1;
    for (int i = 1; i <= n; i++) {
        A[i] = A[i-1] + 2 * L[i-1];
        L[i] = L[i-1] + A[i-1];
    }
    cout << A[n] << endl;
    return 0;
}
