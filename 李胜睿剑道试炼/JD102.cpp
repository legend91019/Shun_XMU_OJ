/*
 * JD102: 三元归序
 */

#include <iostream>
#include <algorithm>
#include <iomanip>
#include <string>
using namespace std;

struct Record {
    int x;
    double y;
    string z;
};

bool cmp(const Record& a, const Record& b) {
    if (a.x != b.x) return a.x < b.x;       // 先按编号升序
    return a.y < b.y;                       // 编号相同按重量升序
}

int main() {
    int N;
    cin >> N;
    
    Record rec[1000];
    for (int i = 0; i < N; i++) {
        cin >> rec[i].x >> rec[i].y >> rec[i].z;
    }
    
    sort(rec, rec + N, cmp);
    
    cout << fixed << setprecision(2);
    for (int i = 0; i < N; i++) {
        cout << rec[i].x << " " << rec[i].y << " " << rec[i].z << endl;
    }
    
    return 0;
}
