/*
 * LinK03: 人的周期
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 输入包含多组数据，每一组数据由四个整数组成，数据以-1 -1 -1 -1 结束。对于每一行的四个整数p, e, i和d, 其中p, e, i分别表示体力、情感和智力高峰出现的时间（时间从当年的第一天开始计算）。d是给定的时间，可能小于p, e或i。所有给定时间是非负的并且小于或等于365，所求的时间小于或等于21252。
 * Output: 从给定时间起，下一次三个高峰同一天的时间（距离给定时间的天数）。
 * Sample 1: 0 0 0 0\n0 0 0 100\n5 20 34 325\n4 5 6 7\n283 102 23 320\n203 301 203 40\n-1 -1 -1 -1 -> Case 1: the next triple peak occurs in 21252 days.\nCase 2: the next triple peak occurs in 21152 days.\nCase 3: the next triple peak occurs in 19575 days.\nCase 4: the next triple peak occurs in 16994 days.\nCase 5: the next triple peak occurs in 8910 days.\nCase 6: the next triple peak occurs in 10789 days.
 */

#include <iostream>
using namespace std;
int main() {
    int p, e, i, d, c = 0;
    while (cin >> p >> e >> i >> d && p != -1) {
        c++; int k;
        for (k = d + 1; (k - p) % 23 != 0; k++);
        for (; (k - e) % 28 != 0; k += 23);
        for (; (k - i) % 33 != 0; k += 23 * 28);
        cout << "Case " << c << ": the next triple peak occurs in " << k - d << " days." << endl;
    }
    return 0;
}
