#include <stdio.h>
#include <string.h>

#define MAX_SIZE 100

int main()
{
    char str[MAX_SIZE];

    printf("Enter a string: ");
    fgets(str, MAX_SIZE, stdin);

    int i, l;
    l = strlen(str) - 1;
    printf("string with multiple line and single word is\n ");
    for (i = 0; i < strlen(str); i++)
    {
        if (str[i] == ' ' || i == l)
        {
            printf("\n");
        }
        else
        {
            printf("%c", str[i]);
        }
    }

    return 0;
}