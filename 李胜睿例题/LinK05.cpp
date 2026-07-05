#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Weighing {
    string left;
    string right;
    string result;
};

int sideOf(char coin, const string& s) {
    return s.find(coin) == string::npos ? 0 : 1;
}

bool matches(const Weighing& w, char coin, int delta) {
    int leftWeight = 0, rightWeight = 0;

    for (char c : w.left) leftWeight += (c == coin ? delta : 0);
    for (char c : w.right) rightWeight += (c == coin ? delta : 0);

    if (w.result == "even") return leftWeight == rightWeight;
    if (w.result == "up") return leftWeight > rightWeight;
    return leftWeight < rightWeight;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int tests;
    cin >> tests;
    while (tests--) {
        vector<Weighing> weighings(3);
        for (auto& w : weighings) {
            cin >> w.left >> w.right >> w.result;
        }

        for (char coin = 'A'; coin <= 'L'; ++coin) {
            for (int delta : {1, -1}) {
                bool ok = true;
                for (const auto& w : weighings) {
                    if (!matches(w, coin, delta)) {
                        ok = false;
                        break;
                    }
                }

                if (ok) {
                    cout << coin << " is the counterfeit coin and it is "
                         << (delta == 1 ? "heavy" : "light") << ". \n";
                }
            }
        }
    }

    return 0;
}
