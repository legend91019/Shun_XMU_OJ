#include <iostream>
#include <string>
using namespace std;
int main() {
    string a, b;
    getline(cin, a);
    int n = a.size();
    for (int i = 0; i < n; i++)
        b += (char)(a[i] + a[(i + 1) % n]);
    cout << b << endl;
    return 0;
}
