#include <stdio.h>
#include <string.h>
int main()
{
    char s[20];
    int i;
    printf("input the string\n");
    gets(s);
    
    for(i=0;s[i]!=0;i++)
    {
        if(s[i]>='a'&& s[i]<='z')
        {
            s[i]=s[i]-32;
        }
    }
    printf("\n string in the upper case = %s",s);
    
   
    return 0;
}