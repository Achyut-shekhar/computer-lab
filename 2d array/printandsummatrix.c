#include<stdio.h>
int main()
{
    int a[2][3],i,j,sum=0;
    printf("imput the row and column of 2d array");
    for(i=0;i<2;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
    printf("2d matrix is:-\n");
    for(i=0;i<2;i++)
    {  
        for(j=0;j<3;j++)
        {
            
            printf("%d\t",a[i][j]);
            sum=sum+a[i][j];
        }
        printf("\n");
    }
    printf("\nsum is %d",sum);
    return 0;
}