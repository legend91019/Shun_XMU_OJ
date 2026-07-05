/*
 * LinK25: 拨钟问题
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 9个整数，表示各时钟指针的起始位置，相邻两个整数之间用单个空格隔开。其中，0=12点、1=3点、2=6点、3=9点。
 * Output: 输出一个最短的时钟指针移动序列，使得9个时钟的指针都指向12点。按照移动的序号从小到大输出结果。相邻两个整数之间用单个空格隔开。
 * Sample 1: 3 3 0 \n2 2 2 \n2 1 2  -> 4 5 8 9 
 */

#include <iostream>
#include <vector>
#include <cstring>
using namespace std;
// Move effects on 9 clocks (0-8)
int moves[9][9] = {
    {1,1,0,1,1,0,0,0,0}, // A
    {1,1,1,0,0,0,0,0,0}, // B
    {0,1,1,0,1,1,0,0,0}, // C
    {1,0,0,1,0,0,1,0,0}, // D
    {0,1,0,1,1,1,0,1,0}, // E
    {0,0,1,0,0,1,0,0,1}, // F
    {0,0,0,1,1,0,1,1,0}, // G
    {0,0,0,0,0,0,1,1,1}, // H
    {0,0,0,0,1,1,0,1,1}  // I
};
int clocks[9], best[9], bestLen = 40;
vector<int> path;
void dfs(int d) {
    if (d == 9) {
        bool ok = true;
        for (int i = 0; i < 9; i++) if (clocks[i] != 0) { ok = false; break; }
        if (ok && (int)path.size() < bestLen) {
            bestLen = path.size();
            memset(best, 0, sizeof(best));
            for (int x : path) best[x]++;
        }
        return;
    }
    for (int cnt = 0; cnt < 4; cnt++) {
        dfs(d + 1);
        for (int i = 0; i < 9; i++) clocks[i] = (clocks[i] + moves[d][i]) % 4;
        path.push_back(d);
    }
    for (int i = 0; i < 4; i++) path.pop_back(); // undo
}
int main() {
    for (int i = 0; i < 9; i++) cin >> clocks[i];
    dfs(0);
    for (int i = 0; i < 9; i++)
        for (int j = 0; j < best[i]; j++)
            cout << i + 1 << " ";
    cout << endl;
    return 0;
}
