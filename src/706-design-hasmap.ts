import { ListNode, buildList } from './data-structure/linked-list';

class MyHashMap {
  arr: (number)[]
  constructor() {
    this.arr = [];
  }

  put(key: number, value: number): void {
    this.arr[key] = value;
  }

  get(key: number): number {
    return (this.arr[key] === undefined || this.arr[key] === null) ? -1 : this.arr[key];
  }

  remove(key: number): void {
    this.arr[key] = -1;
  }
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/