// 141  环形链表
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head, fast = head; // 乌龟和兔子同时从起点出发
    while (fast && fast.next) {
        slow = slow.next; // 乌龟走一步
        fast = fast.next.next; // 兔子走两步
        if (fast === slow) { // 兔子追上乌龟（套圈），说明有环
            return true;
        }
    }
    return false; // 访问到了链表末尾，无环
};

//0（n）
var hasCycle = function(head) {
    const sets = new Set()
    let temp = head
    while(temp !== null){
        if(sets.has(temp)) return temp
        sets.add(temp)
        temp = temp.next
    }
    return false
    
};