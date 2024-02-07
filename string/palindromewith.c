#include <stdio.h>
#include <string.h>
int main()
{
    char s[20],rev_s[20];
    
    printf("input the string string\n");
    gets(s);
    
    strcpy(rev_s,s);
    strrev(rev_s);
    
    if(strcmp(s,rev_s)==0)
    {
        printf(" \npalindrome");
    }
    else
    {
        printf("not palindrome");
    }
 
    
    return 0;
}