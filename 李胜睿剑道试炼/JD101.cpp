#include <iostream>
#include <vector>
using namespace std;
int main() {
    vector<int> a, b, c;
    int x;
    while (cin >> x && x != -1) a.push_back(x);
    while (cin >> x && x != -1) b.push_back(x);
    int i = 0, j = 0;
    while (i < (int)a.size() && j < (int)b.size()) {
        if (a[i] < b[j]) c.push_back(a[i++]);
        else c.push_back(b[j++]);
    }
    while (i < (int)a.size()) c.push_back(a[i++]);
    while (j < (int)b.size()) c.push_back(b[j++]);
    for (int k = 0; k < (int)c.size(); k++) {
        if (k > 0) cout << " ";
        cout << c[k];
    }
    cout << endl;
    return 0;
}
