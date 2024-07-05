/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    let dummyHead: ListNode = new ListNode();
    let current: ListNode | null = dummyHead;

    let two : ListNode | null = list2;
    let one : ListNode | null = list1;

    while (one && two ) {
        // console.log(one!.val)
        if (one.val <= two.val) {
            current.next = one;
            one = one.next;
        } else {
            current.next = two;
            two = two.next
        }
        // console.log( current.val)
        current = current.next;

    }
    // console.log(one!.val)
    if (one) current.next = one;
    if (two) current.next = two;
    return dummyHead.next;
    
};

