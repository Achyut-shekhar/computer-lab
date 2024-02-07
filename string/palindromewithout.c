#include <string.h>
#include <stdio.h>
int main()
{
    char s[20];
    int i,j,t=0,l;
    printf("input the string");
    fgets(s,20,stdin);
    l=strlen(s);
    l=l-1;
    for(i=0,j=l-1;i<j;i++,j--)
    {
        if(s[i]!=s[j])
        {
            t++;
            break;
        }
    }
    if(t==1)
    {
        printf("not palindrom");
    }
    else
    {
        printf("palindrom");
    }
    return 0;
}