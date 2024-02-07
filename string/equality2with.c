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
   t=strcmp(s1,s2);
   if(t==0)
   {
    printf("similar");
   }
   else{
    printf("not similar");
   }
    return 0;
}
