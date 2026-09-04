//1.两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
};
var twoSum = function(nums, target) {
    let map = new Map()
    let n = nums.length
    for(let i=0;i<n;i++){
        if(map.has(nums[i])){
            return [map.get(nums[i]),i]
        }else{
            map.set(target - nums[i],i)
        }
    }
};