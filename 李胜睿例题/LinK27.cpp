#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> nums(n);
    for (int& x : nums) cin >> x;

    sort(nums.begin(), nums.end());

    for (int i = 0; i < n; ++i) {
        if (i) cout << ' ';
        cout << nums[i];
    }
    cout << '\n';

    return 0;
}
