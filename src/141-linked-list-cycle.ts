import { ListNode, buildList } from './data-structure/linked-list';

function hasCycle(head: ListNode | null): boolean {
  let doubleTra = head;
  if (head === null || head.next === null) return false;
  if (doubleTra === null || doubleTra.next === null) return false;

  let isCycle = false;
  let index = 0;
  while (head.next !== null || doubleTra.next !== null || isCycle === false) {
    index++;
    if (head.next === null || doubleTra.next === null || doubleTra.next.next === null) {
      isCycle = false;
      break;
    }
    head = head.next;
    doubleTra = doubleTra.next.next;
    if (head.next === doubleTra.next) {
      isCycle = true;
      break;
    }
  }
  return isCycle;
};

const list = new ListNode();
hasCycle(buildList([-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]))