#include <cstdio>
using namespace std;
int main() {
    int n, swords = 0, blades = 0, spears = 0, total = 0;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        int cnt; char type;
        scanf("%d %c", &cnt, &type);
        total += cnt;
        if (type == 'C') swords += cnt;
        else if (type == 'R') blades += cnt;
        else if (type == 'F') spears += cnt;
    }
    printf("Total: %d weapons\n", total);
    printf("Total swords: %d\n", swords);
    printf("Total blades: %d\n", blades);
    printf("Total spears: %d\n", spears);
    printf("Percentage of swords: %.2f %%\n", 100.0 * swords / total);
    printf("Percentage of blades: %.2f %%\n", 100.0 * blades / total);
    printf("Percentage of spears: %.2f %%\n", 100.0 * spears / total);
    return 0;
}
