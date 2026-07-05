/*
 * LinK35: 数的三次方根
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 共一行，包含一个浮点数n。
 * Output: 共一行，包含一个浮点数，表示问题的解。注意，结果保留6位小数。
 * Sample 1: 1000.00 -> 10.000000
 */

#include <cstdio>
#include <cmath>
int main() { double n; scanf("%lf", &n); printf("%.6f\n", cbrt(n)); return 0; }
