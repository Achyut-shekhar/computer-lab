#include<stdio.h>
int main()
{
    int a[3][2],i,j,sr,sc;
    printf("input the row and column of 2d array");
    for(i=0;i<3;i++)
    {
        for(j=0;j<2;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
     printf("2d matrix is:-\n");
    for(i=0;i<3;i++)
    {  
        for(j=0;j<2;j++)
        {
            
            printf("%d\t",a[i][j]);
            
        }
        printf("\n");
    }
    for(i=0;i<3;i++)
    { sr=0;
      
        for(j=0;j<2;j++)
        {
           sr=sr+a[i][j];
          
        }
        printf("sr=%d",sr);
    }
    for(i=0;i<2;i++)
    { 
      sc=0;
        for(j=0;j<3;j++)
        {
           sc=sc+a[j][i];
          
        }
        printf("sc=%d",sc);
    }
    
    return 0;
}