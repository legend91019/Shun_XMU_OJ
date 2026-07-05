/*
 * LinK37: 林克的蛋糕
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 第一行包含两个正整数N和F，1 ≤ N, F ≤ 10 000，表示蛋糕的数量和朋友的数量。第二行包含N个1到10000之间的整数，表示每个蛋糕的半径。
 * Output: 输出每个人能得到的最大的蛋糕的体积，精确到小数点后三位。
 * Sample 1: 3 3\n4 3 3 -> 25.133
 */

#include <cstdio>
#include <cmath>
#define PI 3.141592653589793
double r[10010];
int n, f;
bool check(double v) {
    int cnt = 0;
    for (int i = 0; i < n; i++) cnt += (int)(PI * r[i] * r[i] / v);
    return cnt >= f + 1;
}
int main() {
    scanf("%d %d", &n, &f);
    double lo = 0, hi = 0;
    for (int i = 0; i < n; i++) { scanf("%lf", &r[i]); hi = fmax(hi, PI * r[i] * r[i]); }
    while (hi - lo > 1e-5) {
        double mid = (lo + hi) / 2;
        if (check(mid)) lo = mid;
        else hi = mid;
    }
    printf("%.3f\n", lo);
    return 0;
}
