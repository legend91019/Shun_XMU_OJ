/*
 * LinK12: 字符全排列
 * Time Limit: 1000ms, Memory Limit: 256MB
 *
 * Input: 输入只有一行，是一个由不同的小写字母组成的字符串，已知字符串的长度在2到8之间。
 * Output: 输出这个字符串的所有排列方式，每行一个排列。要求字母序比较小的排列在前面。字母序如下定义：已知S = s1s2...sk, T = t1t2...tk，则S s1= t1, s2= t2, ..., sp - 1= tp - 1, sp
 * Sample 1: abc -> abc\nacb\nbac\nbca\ncab\ncba 
 */

#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
string s, path;
int vis[10];
void dfs(int d) {
    if (d == (int)s.length()) { cout << path << endl; return; }
    for (int i = 0; i < (int)s.length(); i++) {
        if (!vis[i]) { vis[i]=1; path+=s[i]; dfs(d+1); path.pop_back(); vis[i]=0; }
    }
}
int main() { cin >> s; sort(s.begin(), s.end()); dfs(0); return 0; }
