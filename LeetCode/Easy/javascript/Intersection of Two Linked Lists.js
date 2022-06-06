function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;
  
    // headA가 더이상 next하지못하면 headB의 헤드로 연결해주고
    // headB가 더이상 next하지못하면 headA의 헤드로 연결
    // 둘이 같은지점이 생기면 교차점

  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
};
