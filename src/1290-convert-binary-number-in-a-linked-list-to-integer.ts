import { ListNode, buildList } from "./data-structure/linked-list";

// loop and get value into an array 
// build this array -> number
function getDecimalValue(head: ListNode | null): number {
  const arr = []
  while (head !== null) {
    arr.push(head.val)
    head = head.next
  }
  let num: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      num += Math.pow(2, arr.length - i - 1);
    }
  }
  return num;
};