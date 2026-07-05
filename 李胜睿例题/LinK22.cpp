#include <iostream>
#include <string>
using namespace std;

const long long MOD = 1000000007;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    string expression;
    cin >> n >> expression;

    long long answer = 0;
    long long term = expression[0] - '0';

    for (int i = 1; i < static_cast<int>(expression.size()); i += 2) {
        char op = expression[i];
        long long value = expression[i + 1] - '0';

        if (op == '*') {
            term = term * value % MOD;
        } else {
            answer = (answer + term) % MOD;
            term = value;
        }
    }

    answer = (answer + term) % MOD;
    cout << answer << '\n';
    return 0;
}
