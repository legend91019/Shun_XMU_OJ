#include <iostream>
#include <string>
#include <sstream>
using namespace std;
int main() {
    string s;
    getline(cin, s);
    if (s.back() == '.') s.pop_back();
    stringstream ss(s);
    string word, best;
    while (ss >> word)
        if (word.size() > best.size()) best = word;
    cout << best << endl;
    return 0;
}
