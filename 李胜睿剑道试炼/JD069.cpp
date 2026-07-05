#include <iostream>
#include <string>
using namespace std;
int main() {
    string s; char c;
    getline(cin, s);
    cin >> c;
    for (char ch : s)
        if (ch == c) cout << '#';
        else cout << ch;
    cout << endl;
    return 0;
}
