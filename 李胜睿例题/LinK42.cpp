/*
 * LinK42: 击杀黄金蛋糕人马
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * 将w×h矩形切成m块，每次水平或竖直切一刀，求最大块面积的最小值。
 * w,h,m <= 20, m <= w*h。多组测试，以 0 0 0 结束。
 */

#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;

int dp[25][25][405];

int solve(int w, int h, int m) {
    if (w * h < m) return 1000000;
    if (m <= 1) return w * h;
    if (dp[w][h][m] != -1) return dp[w][h][m];

    int best = 1000000;

    for (int cut = 1; cut < w; cut++) {
        for (int k = 1; k < m; k++) {
            int left = solve(cut, h, k);
            int right = solve(w - cut, h, m - k);
            best = min(best, max(left, right));
        }
    }
    for (int cut = 1; cut < h; cut++) {
        for (int k = 1; k < m; k++) {
            int top = solve(w, cut, k);
            int bottom = solve(w, h - cut, m - k);
            best = min(best, max(top, bottom));
        }
    }

    return dp[w][h][m] = best;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    memset(dp, -1, sizeof(dp));
    int w, h, m;
    while (cin >> w >> h >> m) {
        if (w == 0 && h == 0 && m == 0) break;
        cout << solve(w, h, m) << '\n';
    }
    return 0;
}
