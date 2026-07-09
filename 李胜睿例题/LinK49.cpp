/*
 * LinK49: 寻找林克的回忆(4)
 */

#include <bits/stdc++.h>
using namespace std;

const int N = 16;
const int COLS = 1024;
const int MAXNODE = 20000;

int L[MAXNODE], R[MAXNODE], U[MAXNODE], D[MAXNODE], C[MAXNODE], S[COLS + 5];
int rowId[MAXNODE], ans[300], nodeCnt;
int rr[5000], cc[5000], dd[5000], rowCnt;
char g[N][N + 1];

int box_id(int r, int c) {
    return r / 4 * 4 + c / 4;
}

void init() {
    for (int i = 0; i <= COLS; i++) {
        L[i] = i - 1;
        R[i] = i + 1;
        U[i] = D[i] = i;
        S[i] = 0;
    }
    L[0] = COLS;
    R[COLS] = 0;
    nodeCnt = COLS;
    rowCnt = 0;
}

void add_row(int rid, int cols[4]) {
    int first = 0;
    for (int i = 0; i < 4; i++) {
        int col = cols[i];
        int p = ++nodeCnt;
        C[p] = col;
        rowId[p] = rid;
        S[col]++;
        U[p] = U[col];
        D[p] = col;
        D[U[col]] = p;
        U[col] = p;
        if (!first) {
            first = p;
            L[p] = R[p] = p;
        } else {
            L[p] = L[first];
            R[p] = first;
            R[L[first]] = p;
            L[first] = p;
        }
    }
}

void cover(int c) {
    L[R[c]] = L[c];
    R[L[c]] = R[c];
    for (int i = D[c]; i != c; i = D[i]) {
        for (int j = R[i]; j != i; j = R[j]) {
            U[D[j]] = U[j];
            D[U[j]] = D[j];
            S[C[j]]--;
        }
    }
}

void uncover(int c) {
    for (int i = U[c]; i != c; i = U[i]) {
        for (int j = L[i]; j != i; j = L[j]) {
            S[C[j]]++;
            U[D[j]] = j;
            D[U[j]] = j;
        }
    }
    L[R[c]] = c;
    R[L[c]] = c;
}

bool dance(int dep) {
    if (R[0] == 0) {
        for (int i = 0; i < dep; i++) {
            int id = ans[i];
            g[rr[id]][cc[id]] = char('A' + dd[id]);
        }
        return true;
    }

    int c = R[0];
    for (int i = R[0]; i != 0; i = R[i]) {
        if (S[i] < S[c]) c = i;
    }
    if (S[c] == 0) return false;

    cover(c);
    for (int i = D[c]; i != c; i = D[i]) {
        ans[dep] = rowId[i];
        for (int j = R[i]; j != i; j = R[j]) cover(C[j]);
        if (dance(dep + 1)) return true;
        for (int j = L[i]; j != i; j = L[j]) uncover(C[j]);
    }
    uncover(c);
    return false;
}

void add_candidate(int r, int c, int d) {
    int rid = rowCnt++;
    rr[rid] = r;
    cc[rid] = c;
    dd[rid] = d;
    int cols[4] = {
        r * 16 + c + 1,
        256 + r * 16 + d + 1,
        512 + c * 16 + d + 1,
        768 + box_id(r, c) * 16 + d + 1
    };
    add_row(rid, cols);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string line;
    bool firstCase = true;
    while (true) {
        vector<string> lines;
        while ((int)lines.size() < N && getline(cin, line)) {
            if (!line.empty()) lines.push_back(line);
        }
        if ((int)lines.size() < N) break;

        init();
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                g[i][j] = lines[i][j];
                if (g[i][j] == '-') {
                    for (int d = 0; d < N; d++) add_candidate(i, j, d);
                } else {
                    add_candidate(i, j, g[i][j] - 'A');
                }
            }
            g[i][N] = '\0';
        }

        dance(0);
        if (!firstCase) cout << '\n';
        firstCase = false;
        for (int i = 0; i < N; i++) cout << g[i] << '\n';
        cout << '\n';
    }
    return 0;
}
