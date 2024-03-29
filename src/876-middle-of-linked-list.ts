import { ListNode, buildList } from './data-structure/linked-list';

// double travelsal node 
function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let doubleTra = head;

  while (head?.next !== null && doubleTra !== null && doubleTra.next !== null) {
    doubleTra = doubleTra.next?.next;
    head = head?.next
  }
  return head;
};