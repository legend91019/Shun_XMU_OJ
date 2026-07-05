#include <iostream>
using namespace std;
int main() {
    int x;
    bool first = true;
    while (cin >> x && x != 0) {
        if (!first) cout << endl;
        first = false;
        for (int i = 1; i <= x; i++) {
            if (i > 1) cout << " ";
            cout << i;
        }
    }
    cout << endl;
    return 0;
}
