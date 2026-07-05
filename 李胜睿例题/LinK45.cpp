/*
 * LinK45: 真假记忆碎片
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * 验证9×9数独解是否正确。每行、每列、每个3×3宫格必须包含1-9各一次。
 * 正确输出Yes，否则输出No。
 */

#include <iostream>
#include <cstring>
using namespace std;

char g[9][10];
bool used[10];

bool check() {
    for (int i = 0; i < 9; i++) {
        memset(used, 0, sizeof(used));
        for (int j = 0; j < 9; j++) {
            int v = g[i][j] - '0';
            if (v < 1 || v > 9 || used[v]) return false;
            used[v] = true;
        }
    }
    for (int j = 0; j < 9; j++) {
        memset(used, 0, sizeof(used));
        for (int i = 0; i < 9; i++) {
            int v = g[i][j] - '0';
            if (v < 1 || v > 9 || used[v]) return false;
            used[v] = true;
        }
    }
    for (int bi = 0; bi < 3; bi++) {
        for (int bj = 0; bj < 3; bj++) {
            memset(used, 0, sizeof(used));
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    int v = g[bi*3+i][bj*3+j] - '0';
                    if (v < 1 || v > 9 || used[v]) return false;
                    used[v] = true;
                }
            }
        }
    }
    return true;
}

int main() {
    for (int i = 0; i < 9; i++) cin >> g[i];
    cout << (check() ? "Yes" : "No") << endl;
    return 0;
}
