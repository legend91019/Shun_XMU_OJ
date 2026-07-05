#include <cstdio>
#include <algorithm>
using namespace std;
int main() {
    double s[3];
    scanf("%lf %lf %lf", &s[0], &s[1], &s[2]);
    sort(s, s + 3);
    double a = s[0], b = s[1], c = s[2];
    if (a + b <= c) { puts("Not a triangle"); return 0; }
    double a2 = a*a, b2 = b*b, c2 = c*c;
    if (c2 == a2 + b2) puts("Right");
    else if (c2 < a2 + b2) puts("Acute");
    else puts("Obtuse");
    if (a == b && b == c) puts("Equilateral");
    else if (a == b || b == c) puts("Isosceles");
    return 0;
}
