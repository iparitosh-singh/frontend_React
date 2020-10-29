
#include<string.h>
#include<stdio.h>
#include<stdlib.h>
int main()
{
    //arrays of strings 
	char strings[100][100];
    char queries[100][100];
    // 

    int n,m,s[100],q[100],i,j,k=0,c=0,a[100];
	printf("Enter the number of elements in strings array ");
	scanf("%d",&n);
	for(i=0;i<n;i++)
	{   
        // strings[i] = (char*)malloc(20*sizeof(char));
		scanf("%s" , strings[i]);
	}
	printf("Enter the number of elements in queries array ");
	scanf("%d",&m);

	for(j=0;j<m;j++)
	{
		// queries[i] = (char*)malloc(20*sizeof(char));
		scanf("%s" , queries[j]);
	}
	for(i=0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{   
    		if(strcmp(queries[i] , strings[j]) == 0) // for comparing strings
				{
                    c++;
                }
		}
		a[k++] = c;
		c=0;
	}
	for(int f=0;f<m;f++)
	{
		printf("%d",a[f]);
	}
	return 0;
}
