// 169 多数元素
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let lens = nums.length
    let counts = Math.floor(lens/2)
    const maps = new Map()
    for(let i=0;i<lens;i++){
        let val = nums[i]
        if(maps.has(val)){
            maps.set(val,maps.get(val)+1)
        }else{
            maps.set(val,1)
        }
        if(maps.get(val)>counts) return val

    }
};