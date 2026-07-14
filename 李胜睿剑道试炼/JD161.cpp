/*
 * JD161: 改字成经
 */

#include <bits/stdc++.h>
using namespace std;

int edit_distance(const string &a, const string &b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> f(n + 1, vector<int>(m + 1));
    for (int i = 0; i <= n; i++) f[i][0] = i;
    for (int j = 0; j <= m; j++) f[0][j] = j;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            f[i][j] = min(f[i - 1][j], f[i][j - 1]) + 1;
            f[i][j] = min(f[i][j], f[i - 1][j - 1] + (a[i - 1] != b[j - 1]));
        }
    return f[n][m];
}

int main() {
    vector<string> tokens;
    string token;
    while (cin >> token) tokens.push_back(token);
    if (tokens.size() < 4) return 0;

    auto is_number = [](const string &s) {
        return !s.empty() && all_of(s.begin(), s.end(), [](unsigned char c) {
            return isdigit(c);
        });
    };

    if (tokens.size() > 4) {
        int n = stoi(tokens[0]);
        int pos, q;
        if (is_number(tokens[1])) {
            q = stoi(tokens[1]);
            pos = 2;
        } else {
            pos = 1;
            q = stoi(tokens[pos + n]);
        }
        vector<string> words;
        for (int i = 0; i < n; i++) words.push_back(tokens[pos + i]);
        pos += n;
        if (!is_number(tokens[1])) pos++;
        for (int i = 0; i < q && pos + 1 < (int)tokens.size(); i++, pos += 2) {
            string query = tokens[pos];
            int limit = stoi(tokens[pos + 1]);
            int cnt = 0;
            for (auto &word : words) {
                if (edit_distance(word, query) <= limit) cnt++;
            }
            cout << cnt << '\n';
        }
        return 0;
    }

    int n, m;
    string a, b;
    bool second_is_number = is_number(tokens[1]);
    if (second_is_number) {
        n = stoi(tokens[0]);
        m = stoi(tokens[1]);
        a = tokens[2];
        b = tokens[3];
    } else {
        n = stoi(tokens[0]);
        a = tokens[1];
        m = stoi(tokens[2]);
        b = tokens[3];
    }
    cout << edit_distance(a, b) << '\n';
    return 0;
}
