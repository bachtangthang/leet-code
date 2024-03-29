import { ListNode, buildList } from './data-structure/linked-list';

// recursion, simply: merge 2 sorted linked list = 
// case 1: each of them is null => return the not null list
// case 2: both of list next cursor is null => sort and return new list
// case 3: one of list next cursor is null => recursion
// case 4: none of list next cursor is null => recursion
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
  buildList([1, 2, 4]),
  buildList([1, 3, 4])
)
list.printList(mergeList);
