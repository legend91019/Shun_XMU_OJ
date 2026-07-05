#include <iostream>
#include <string>
#include <sstream>
using namespace std;
int main() {
    string line, a, b;
    getline(cin, line);
    getline(cin, a);
    getline(cin, b);
    stringstream ss(line);
    string word, result;
    bool first = true;
    while (ss >> word) {
        if (!first) result += " ";
        first = false;
        if (word == a) result += b;
        else result += word;
    }
    cout << result << endl;
    return 0;
}
