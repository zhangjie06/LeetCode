// 160 相交链表
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const sets = new Set()
    let temp = headA
    while(temp !== null){
        sets.add(temp)
        temp = temp.next
    }     
    temp = headB
    while(temp !== null){
        if(sets.has(temp))
        return temp
        temp = temp.next
    }
    return null
};