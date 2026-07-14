/*
 * JD144: 八码迷局
 */

#include <bits/stdc++.h>
using namespace std;

int bfs(string start, string target) {
    unordered_map<string, int> dist;
    queue<string> q;
    q.push(start);
    dist[start] = 0;
    int dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1};
    while (!q.empty()) {
        string s = q.front();
        q.pop();
        if (s == target) return dist[s];
        int p = s.find('x');
        int x = p / 3, y = p % 3;
        for (int k = 0; k < 4; k++) {
            int nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= 3 || ny < 0 || ny >= 3) continue;
            string t = s;
            swap(t[p], t[nx * 3 + ny]);
            if (!dist.count(t)) {
                dist[t] = dist[s] + 1;
                q.push(t);
            }
        }
    }
    return -1;
}

int main() {
    vector<char> chars;
    char ch;
    while (cin >> ch) chars.push_back(ch);
    string a, b;
    for (int i = 0; i < 9 && i < (int)chars.size(); i++) a += chars[i];
    for (int i = 9; i < 18 && i < (int)chars.size(); i++) b += chars[i];
    if (b.empty()) b = "12345678x";
    cout << bfs(a, b) << '\n';
    return 0;
}
