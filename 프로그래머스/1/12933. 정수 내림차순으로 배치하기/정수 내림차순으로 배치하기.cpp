#include <string>
#include <vector>

int arr[10] = {0,};

void swap(int* a, int* b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

long long solution(long long n) {
    long long answer = 0;
    int i = 0, j  = 0, cnt = 0;
    while(n >0)
    {
        arr[cnt] = n%10;
        n /= 10;
        cnt++;
    }
    for(i = 0; i<cnt; i++)
    {
        for(j = (i+1); j<cnt; j++)
        {
            if(arr[i]<arr[j])
                swap(&arr[i],&arr[j]);
        }
    }
    for( i = 0; i<cnt; i++)
    {
        answer*= 10;
        answer+=arr[i];
    }

    return answer;
}