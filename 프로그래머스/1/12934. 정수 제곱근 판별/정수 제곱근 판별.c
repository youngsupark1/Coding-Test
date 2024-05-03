#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(long long n) {
    long long root = (long long)sqrt(n);
    if (root * root == n) {
        return (root + 1) * (root + 1);
    } else {
        return -1;
    }
}