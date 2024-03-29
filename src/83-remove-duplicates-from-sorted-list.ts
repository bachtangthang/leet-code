import { ListNode, buildList } from "./data-structure/linked-list";

// recursion, simply
// if head.val = head.next.val -> detach that node and recursion
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return head;
  if (head.next !== null) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
      deleteDuplicates(head);
    } else {
      head.next = deleteDuplicates(head.next);
    }
    return head;
  }
  return head;
}

const list = new ListNode();
list.printList(deleteDuplicates(buildList([1, 1, 1])));
