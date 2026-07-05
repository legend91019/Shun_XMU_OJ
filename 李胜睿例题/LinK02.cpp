/*
 * LinK02: 完美立方
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 一个正整数N (N≤100)。
 * Output: 每行输出一个完美立方。输出格式为：Cube = a, Triple = (b,c,d)其中a,b,c,d所在位置分别用实际求出四元组值代入。请按照a的值，从小到大依次输出。当两个完美立方等式中a的值相同，则b值小的优先输出、仍相同则c值小的优先输出、再相同则d值小的先输出。
 * Sample 1: 24 -> Cube = 6, Triple = (3,4,5)\nCube = 12, Triple = (6,8,10)\nCube = 18, Triple = (2,12,16)\nCube = 18, Triple = (9,12,15)\nCube = 19, Triple = (3,10,18)\nCube = 20, Triple = (7,14,17)\nCube = 24, Triple = (12,16,20)
 */

#include <iostream>
using namespace std;
int main() {
    int n; cin >> n;
    for (int a = 2; a <= n; a++)
        for (int b = 2; b < a; b++)
            for (int c = b; c < a; c++)
                for (int d = c; d < a; d++)
                    if (a*a*a == b*b*b + c*c*c + d*d*d)
                        cout << "Cube = " << a << ", Triple = (" << b << "," << c << "," << d << ")" << endl;
    return 0;
}
