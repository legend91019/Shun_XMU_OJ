/*
 * LinK41: 英杰们的蛋糕塔
 * Time Limit: 3000ms, Memory Limit: 256MB
 *
 * N层圆柱蛋糕，总体积V*π，每层半径r、高h均为整数且向上递减。
 * 求最小表面积S*π的值（不计π）。无解输出0。
 * N<=20, V<=100000
 */

#include <iostream>
#include <cmath>
using namespace std;

int V, N, best;
int minV[25], minS[25];

void dfs(int layer, int sumV, int sumS, int maxR, int maxH) {
    if (layer == 0) {
        if (sumV == V && sumS < best) best = sumS;
        return;
    }
    if (sumV + minV[layer] > V) return;
    if (sumS + minS[layer] >= best) return;
    if (sumS + 2 * (V - sumV) / maxR >= best) return;

    for (int r = maxR; r >= layer; r--) {
        int maxH_now = min(maxH, (V - sumV - minV[layer-1]) / (r * r));
        for (int h = maxH_now; h >= layer; h--) {
            int addS = 2 * r * h;
            if (layer == N) addS += r * r;
            if (sumS + addS + minS[layer-1] >= best) continue;
            dfs(layer - 1, sumV + r * r * h, sumS + addS, r - 1, h - 1);
        }
    }
}

int main() {
    cin >> V >> N;
    minV[0] = minS[0] = 0;
    for (int i = 1; i <= N; i++) {
        minV[i] = minV[i-1] + i * i * i;
        minS[i] = minS[i-1] + 2 * i * i;
    }
    best = 1 << 30;
    int maxR = (int)sqrt((double)(V - minV[N-1]) / N);
    int maxH = (V - minV[N-1]) / (N * N);
    dfs(N, 0, 0, maxR, maxH);
    if (best == 1 << 30) best = 0;
    cout << best << endl;
    return 0;
}
