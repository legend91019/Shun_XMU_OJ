/*
 * JD108: 剑指方根
 */

#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double n;
    cin >> n;
    
    double l = -10000, r = 10000;
    
    // 浮点二分，精度要求1e-8
    while (r - l > 1e-8) {
        double mid = (l + r) / 2;
        double cube = mid * mid * mid;
        
        if (cube >= n) {
            r = mid;
        } else {
            l = mid;
        }
    }
    
    cout << fixed << setprecision(6) << l << endl;
    
    return 0;
}
