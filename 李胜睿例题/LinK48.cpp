/*
 * LinK48: 寻找林克的回忆(3)
 */

#include <iostream>
#include <algorithm>
using namespace std;

int g[9][9];
bool row[9][10], col[9][10], box[3][3][10];
int maxScore = -1;

// 靶形分值分布
int score[9][9] = {
    {6, 6, 6, 6, 6, 6, 6, 6, 6},
    {6, 7, 7, 7, 7, 7, 7, 7, 6},
    {6, 7, 8, 8, 8, 8, 8, 7, 6},
    {6, 7, 8, 9, 9, 9, 8, 7, 6},
    {6, 7, 8, 9, 10, 9, 8, 7, 6},
    {6, 7, 8, 9, 9, 9, 8, 7, 6},
    {6, 7, 8, 8, 8, 8, 8, 7, 6},
    {6, 7, 7, 7, 7, 7, 7, 7, 6},
    {6, 6, 6, 6, 6, 6, 6, 6, 6}
};

// 计算当前已填数字的分数
int calcScore() {
    int sum = 0;
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            sum += g[i][j] * score[i][j];
        }
    }
    return sum;
}

// 找到可选数字最少的空格
int findBestPos(int &x, int &y) {
    int minOptions = 10;
    bool found = false;
    
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (g[i][j] != 0) continue;
            
            int bx = i / 3, by = j / 3;
            int options = 0;
            for (int num = 1; num <= 9; num++) {
                if (!row[i][num] && !col[j][num] && !box[bx][by][num]) {
                    options++;
                }
            }
            
            if (options == 0) return -1;  // 无解
            if (options < minOptions) {
                minOptions = options;
                x = i;
                y = j;
                found = true;
                if (options == 1) return 1;
            }
        }
    }
    
    return found ? 1 : 0;  // 0表示全部填完
}

void dfs() {
    int x, y;
    int status = findBestPos(x, y);
    
    if (status == 0) {  // 全部填完
        int total = calcScore();
        if (total > maxScore) {
            maxScore = total;
        }
        return;
    }
    
    if (status == -1) return;  // 无解
    
    int bx = x / 3, by = y / 3;
    
    // 从大到小尝试数字，优先找到高分解
    for (int num = 9; num >= 1; num--) {
        if (!row[x][num] && !col[y][num] && !box[bx][by][num]) {
            row[x][num] = col[y][num] = box[bx][by][num] = true;
            g[x][y] = num;
            
            dfs();
            
            g[x][y] = 0;
            row[x][num] = col[y][num] = box[bx][by][num] = false;
        }
    }
}

int main() {
    // 读取输入
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cin >> g[i][j];
            if (g[i][j] != 0) {
                int num = g[i][j];
                row[i][num] = true;
                col[j][num] = true;
                box[i / 3][j / 3][num] = true;
            }
        }
    }
    
    dfs();
    
    cout << maxScore << endl;
    
    return 0;
}
