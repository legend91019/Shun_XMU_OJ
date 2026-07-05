#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    getline(cin, s);
    int cnt[256] = {};
    for (char c : s) cnt[(unsigned char)c]++;
    for (char c : s)
        if (cnt[(unsigned char)c] == 1) {
            cout << c << endl;
            return 0;
        }
    cout << "no" << endl;
    return 0;
}
