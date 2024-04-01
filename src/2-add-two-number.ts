import { ListNode, buildList } from "./data-structure/linked-list";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let transfer: number = 0;
  let l3 = new ListNode();
  let trav = l3;
  while (l1 !== null || l2 !== null) {
    let value = (l1?.val || 0) + (l2?.val || 0) + transfer;
    transfer = Math.floor(value / 10)
    value = value % 10
    trav.val = value;
    if ((l1?.next === null || l1?.next === undefined) && (l2?.next === null || l2?.next === undefined)) {
      if (transfer === 1) {
        trav.next = new ListNode(transfer);
      }
    } else {
      trav.next = new ListNode();
      trav = trav.next;
    }
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  return l3;
};

addTwoNumbers(buildList([9, 9]), buildList([9]))

