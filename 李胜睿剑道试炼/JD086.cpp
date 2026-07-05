#include <iostream>
using namespace std;
void copyx(int a[], int b[], int sz) {
    for (int i = 0; i < sz; i++) b[i] = a[i];
}
int main() {
    int n, m, sz;
    cin >> n >> m >> sz;
    int a[100], b[100];
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < m; i++) cin >> b[i];
    copyx(a, b, sz);
    for (int i = 0; i < m; i++) {
        if (i > 0) cout << " ";
        cout << b[i];
    }
    cout << endl;
    return 0;
}
