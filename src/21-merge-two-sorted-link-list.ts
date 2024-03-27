import { ListNode, buildList } from './data-structure/linked-list';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.next === null && list2.next === null) {
    if (list1.val < list2.val) {
      list1.next = list2;
      return list1;
    } else if (list1.val >= list2.val) {
      list2.next = list1;
      return list2;
    }
  } else if (list1.next === null) {
    if (list1.val < list2.val) {
      list1.next = list2;
      return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next);
    return list2
  } else if (list2.next === null) {
    if (list2.val < list1.val) {
      list2.next = list1;
      return list2;
    }
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next);;
    return list2;
  }
  return null;
};


// run
const list = new ListNode()
const mergeList = mergeTwoLists(
  buildList([1,2,4]),
  buildList([1,3,4])
)
list.printList(mergeList);
