#include <string.h>
#include <stdio.h>
int main()
{
    char s1[20], s2[20];
    int l1, l2, i = 0, t = 0;
    printf("input the string s1 ");
    fgets(s1, 20, stdin);
    printf("input the string s2");
    fgets(s2, 20, stdin);
    l1 = strlen(s1);
    l2 = strlen(s2);
    if (l1 != l2)
    {
        printf("not similar");
    }
    else
    {
        while (s1[i] != s2[i])
        {
            t++;
            break;
        }
        i++;
        if (t > 0)
        {
            printf("not similar");
        }
        else{
            printf("similar");
        }
    }
}
