/*
 * LinK43: 求二进制中1的个数
 */

int lowbit(int n)
{
    return n & -n;
}

int NumberOf1(int n) {
    unsigned int x = (unsigned int)n;
    int res = 0;
    while (x) {
        x -= x & -x;
        res++;
    }
    return res;
}
