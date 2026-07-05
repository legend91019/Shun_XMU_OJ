#include <iostream>
#include <vector>
using namespace std;
int main() {
    vector<int> v;
    int x;
    while (cin >> x && x != -1)
        v.push_back(x);
    for (int i = (int)v.size() - 1; i >= 0; i--)
        cout << v[i] << endl;
    return 0;
}
