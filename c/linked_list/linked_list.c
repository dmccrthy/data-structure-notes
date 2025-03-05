#include <stdio.h>

#define REP 10;

int main() {
    struct Linked {
        int val;
        LinkedNode next;
    }

    struct Linked head;
    head.val = 1;
    head.next = NULL;

    for (int i = 0; i < REP; i++) {
        struct Linked curr;
        curr.val = head.val + 1;
        curr.next = head;

        head = curr;
    }

    printContents(head);

    return 0;
}

void printContents(struct Linked list) {
    while (list != NULL) {
        printf(list.val);
        list = list.next;
    }
}
