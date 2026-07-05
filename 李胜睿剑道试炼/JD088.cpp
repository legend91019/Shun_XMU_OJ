#include <iostream>
using namespace std;
void print(int a[], int sz) {
    for (int i = 0; i < sz; i++) {
        if (i > 0) cout << " ";
        cout << a[i];
    }
    cout << endl;
}
int main() {
    int n, sz;
    cin >> n >> sz;
    int a[100];
    for (int i = 0; i < n; i++) cin >> a[i];
    print(a, sz);
    return 0;
}
