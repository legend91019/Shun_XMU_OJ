/*
 * LinK04: 排序考试
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行是整数T，表示一共有T组数据。接下来T行，每行有N+1个数，第一个整数表示该行有N个待排序的数字。整数N(1
 * Output: 对于每组整数，按照升序输出排序结果，每个结果占一行。
 * Sample 1: 3\n4 412 120 5560 3760\n5 576 66 35 99 88\n4 127 100 510 380 -> 120 412 3760 5560\n35 66 88 99 576\n100 127 380 510
 */

#include <cstdio>
#include <algorithm>
using namespace std;
int a[1000010];
int main() {
    int t; scanf("%d", &t);
    while (t--) {
        int n; scanf("%d", &n);
        for (int i = 0; i < n; i++) scanf("%d", &a[i]);
        sort(a, a + n);
        for (int i = 0; i < n; i++) { if (i) printf(" "); printf("%d", a[i]); }
        printf("\n");
    }
    return 0;
}
