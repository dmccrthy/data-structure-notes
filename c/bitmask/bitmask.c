/*
Basic Bitmasks in C
Author: Dan McCarthy
Date: 3/5/2025
*/

#include <stdio.h>
#include "bitmask.h"

int main() {
    unsigned int val = 0xAB;
    unsigned int mask = 0xF0;

    printf("Orginal: %x\nMask: %x\nResult: %x\n", val, mask, bitmask(val, mask, 0));

    return 0;
}

// 
unsigned int bitmask(unsigned int value, unsigned int mask, int offset) {
    return (value >> offset) & mask;
}

