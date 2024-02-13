#include <stdio.h>
int main()
{
    int a[20][30], b[20][30], c[20][30];
    int i, j, k, m, n, p, q, sum;
    printf("input row and column for a\n");
    scanf("%d %d", &m, &n);
    // scanf("%d ",&n );
    printf("input the row and column of 2d array a");
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < n; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("2d matrix a is:-\n");
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < n; j++)
        {

            printf("%d\t", a[i][j]);
        }
        printf("\n");
    }
    printf("input row and column for b\n");
    scanf("%d", &p);
    scanf("%d", &q);
    printf("input the row and column of 2d array b\n");
    for (i = 0; i < p; i++)
    {
        for (j = 0; j < q; j++)
        {
            scanf("%d", &b[i][j]);
        }
    }
    printf("2d matrix is:-\n");
    for (i = 0; i < p; i++)
    {
        for (j = 0; j < q; j++)
        {

            printf("%d\t", b[i][j]);
        }
        printf("\n");
    }
    if (n != p)
    {
        printf("multiplication not possible\n");
    }
    else
    {
        for (i = 0; i < m; i++)
        {
            for (j = 0; j < q; j++)
            {
                sum = 0;
                for (k = 0; k < m; k++)
                {
                    sum = sum + (a[i][k] * b[k][j]);
                    c[i][j] = sum;
                }
            }
        }
        printf("2d matrix is:-\n");
        for (i = 0; i < m; i++)
        {
            for (j = 0; j < q; j++)
            {

                printf("%d\t", c[i][j]);
            }
            printf("\n");
        }
    }

    return 0;
}