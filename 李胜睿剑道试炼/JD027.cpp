#include <iostream>
using namespace std;
int main() {
    string a, b, c;
    cin >> a >> b >> c;
    if (a == "vertebrate") {
        if (b == "bird") {
            if (c == "carnivore") cout << "eagle" << endl;
            else cout << "dove" << endl;
        } else {
            if (c == "omnivore") cout << "man" << endl;
            else cout << "cow" << endl;
        }
    } else {
        if (b == "insect") {
            if (c == "hematophagous") cout << "flea" << endl;
            else cout << "caterpillar" << endl;
        } else {
            if (c == "hematophagous") cout << "leech" << endl;
            else cout << "earthworm" << endl;
        }
    }
    return 0;
}
