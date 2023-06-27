/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    console.log('list2', list2, 'list1', list1);
    if(Array.isArray(list1))
    {
         if (list1.length == [] && list2.length == []) {
        return
      }
        {
              let nums = list1.concat(list2);
              var sort=nums.sort()
              console.log('nums',nums);
              return sort
  
          }
    }
  };



//   var list1 = [1,2,4], list2 = [1,3,4]
var list1 = [], list2 = [0]

  var test = mergeTwoLists(list1,list2);
console.log(test);