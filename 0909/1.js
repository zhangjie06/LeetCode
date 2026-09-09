//101  对称二叉树
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function isSame(p,q){
        if(p === null || q === null) {
            return p === q
        }
        return  p.val === q.val && isSame(p.left,q.right) && isSame(p.right,q.left)
    }
    return isSame(root.left,root.right)
};