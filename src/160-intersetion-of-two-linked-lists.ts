import { ListNode, buildList } from './data-structure/linked-list';

// nested loop through 2 linked list, find intersection node
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) return null;
  let tempA = headA;
  while (tempA !== null) {
    let tempB = headB
    while (tempB !== null) {
      if (tempA === tempB) {
        return tempA;
      } else {
        tempB = tempB.next;
      }
    }
    tempA = tempA.next;
  }
  return null;
};