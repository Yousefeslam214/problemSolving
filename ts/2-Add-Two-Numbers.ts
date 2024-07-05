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




function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) return null;

    let dummyHead: ListNode = new ListNode(); // Dummy head to simplify code
    let current: ListNode | null = dummyHead; // Pointer to current node in the result list
    let carry: number = 0; // Initialize carry to handle sums

    let p1: ListNode | null = l1;
    let p2: ListNode | null = l2;

    while (p1 || p2 || carry) {
        let sum: number = carry;
        if (p1) {
            sum += p1.val;
            p1 = p1.next;
        }
        if (p2) {
            sum += p2.val;
            p2 = p2.next;
        }
        
        carry = Math.floor(sum / 10); // Calculate carry for the next iteration
        sum = sum % 10; // Calculate sum for the current node
        
        current.next = new ListNode(sum); // Create new node with sum
        current = current.next; // Move current pointer forward
    }

    return dummyHead.next; // Return the result list, excluding dummyHead
}
