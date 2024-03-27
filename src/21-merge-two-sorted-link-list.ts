import { ListNode } from './data-structure/linked-list';

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

const buildList = (arr: number[]): ListNode => {
  let list = new ListNode;
  if (arr.length === 1)
    return new ListNode(arr[0])
  for( let i:number = 0; i < arr.length; i++) {
    if(i === arr.length -1)
      list = new ListNode(arr[i], null);
    list.next = buildList(arr.slice(i + 1));
    list.val = arr[i];
    return list
  }
  return list
}


const printList = (list: ListNode | null) => {
  if(list === null) return;
  console.log(list.val);
  if(list.next === null) return;
  printList(list.next);
}

const list = mergeTwoLists(
  buildList([1,2,4]),
  buildList([1,3,4])
)
printList(list);
