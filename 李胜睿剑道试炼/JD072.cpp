#include <iostream>
using namespace std;
int main() {
    string a, b;
    cin >> a >> b;
    if (a == b) cout << "Tie" << endl;
    else if ((a == "Rock" && b == "Scissors") ||
             (a == "Scissors" && b == "Paper") ||
             (a == "Paper" && b == "Rock"))
        cout << "Player1" << endl;
    else
        cout << "Player2" << endl;
    return 0;
}
