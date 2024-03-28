import { ListNode, buildList } from './data-structure/linked-list';

// previous
// head temp 
// 1 -> 2 -> 3 -> 4 -> 5 -> 6

//      previous
//     head temp 
// 1 -> 2 -> 3 -> 4 -> 5 -> 6
function reverseList(head: ListNode | null): ListNode | null {
  let temp: any; //dong vai tro nhu cai ly thu 3, de chuyen doi gia tri giua: head va head.next (temp = head.next, head = temp)
  let previous: any = null;
  while (head !== null) {
    temp = head.next;
    head.next = previous; // gan next vao previous

    previous = head; // de danh cho loop sau, head.next = previouse
    head = temp; // loop increase
  }
  return previous;
};