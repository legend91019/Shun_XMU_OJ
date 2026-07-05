#include <iostream>
using namespace std;
void rev(int a[], int sz) {
    for (int i = 0; i < sz / 2; i++)
        swap(a[i], a[sz - 1 - i]);
}
int main() {
    int n, sz;
    cin >> n >> sz;
    int a[100];
    for (int i = 0; i < n; i++) cin >> a[i];
    rev(a, sz);
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << a[i];
    }
    cout << endl;
    return 0;
}
