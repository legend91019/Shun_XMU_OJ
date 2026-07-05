#include <iostream>
using namespace std;
int main() {
    int n, m;
    cin >> n >> m;
    int a[100][100];
    int top = 0, bottom = n - 1, left = 0, right = m - 1, x = 1;
    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) a[top][j] = x++;
        top++;
        if (top > bottom) break;
        for (int i = top; i <= bottom; i++) a[i][right] = x++;
        right--;
        if (left > right) break;
        for (int j = right; j >= left; j--) a[bottom][j] = x++;
        bottom--;
        for (int i = bottom; i >= top; i--) a[i][left] = x++;
        left++;
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++)
            cout << a[i][j] << " ";
        cout << endl;
    }
    return 0;
}
