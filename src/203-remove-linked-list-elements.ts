
import { ListNode, buildList } from './data-structure/linked-list';

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(undefined, head);
  while (dummy.next !== null) {
    if (dummy.next.val === val) {
      if (dummy.next === head) {
        head = head.next
      }
      dummy.next = dummy.next.next;
    } else {
      dummy = dummy.next;
    }
  }
  return head;
};