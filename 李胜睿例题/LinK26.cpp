#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

const double TARGET = 24.0;
const double EPS = 1e-6;

bool canMake24(vector<double> nums) {
    if (nums.size() == 1) {
        return fabs(nums[0] - TARGET) < EPS;
    }

    for (int i = 0; i < static_cast<int>(nums.size()); ++i) {
        for (int j = i + 1; j < static_cast<int>(nums.size()); ++j) {
            vector<double> rest;
            for (int k = 0; k < static_cast<int>(nums.size()); ++k) {
                if (k != i && k != j) rest.push_back(nums[k]);
            }

            double a = nums[i], b = nums[j];
            vector<double> candidates = {a + b, a - b, b - a, a * b};
            if (fabs(b) > EPS) candidates.push_back(a / b);
            if (fabs(a) > EPS) candidates.push_back(b / a);

            for (double value : candidates) {
                rest.push_back(value);
                if (canMake24(rest)) return true;
                rest.pop_back();
            }
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    while (true) {
        vector<double> nums(4);
        for (double& x : nums) cin >> x;

        if (nums[0] == 0 && nums[1] == 0 && nums[2] == 0 && nums[3] == 0) {
            break;
        }

        cout << (canMake24(nums) ? "YES" : "NO") << '\n';
    }

    return 0;
}
