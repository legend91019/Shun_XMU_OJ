#include <iostream>
#include <string>
using namespace std;
int main() {
    string line, s, s1, s2;
    getline(cin, line);
    int c1 = line.find(',');
    int c2 = line.rfind(',');
    s = line.substr(0, c1);
    s1 = line.substr(c1 + 1, c2 - c1 - 1);
    s2 = line.substr(c2 + 1);

    int s1_end = -1;
    size_t pos = 0;
    while ((pos = s.find(s1, pos)) != string::npos) {
        s1_end = pos + (int)s1.size();
        pos++;
    }

    int s2_start = -1;
    pos = 0;
    while ((pos = s.find(s2, pos)) != string::npos) {
        s2_start = pos;
        pos++;
    }

    if (s1_end == -1 || s2_start == -1 || s1_end > s2_start)
        cout << -1 << endl;
    else
        cout << s2_start - s1_end << endl;
    return 0;
}
