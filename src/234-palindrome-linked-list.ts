import { ListNode, buildList } from './data-structure/linked-list';


// 1 -> 2 -> 2 -> 1 : true
// 1 -> 2 -> 1: true
// 1 -> 2: false
function isPalindrome(head: ListNode | null): boolean {
  const arr = [];
  while (head) {
    arr.push(head?.val);
    head = head.next;
  }
  let flag: boolean = true;;
  let left: number = 0;
  let right: number = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right])
      flag = false;
    left++;
    right--;
  }
  return flag;
};

const bool = isPalindrome(buildList([1, 2, 2, 1]))
console.log('bool: ', bool)
