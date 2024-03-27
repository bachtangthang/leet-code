/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
  
  printList = (list: ListNode | null) => {
    if(list === null) return;
    console.log(list.val);
    if(list.next === null) return;
    this.printList(list.next);
  }
}

export const buildList = (arr: number[]): ListNode => {
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