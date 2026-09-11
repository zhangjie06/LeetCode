//121 买卖股票的最佳时机
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let result = 0;
    for(let i = 0;i<prices.length;i++){
        if(prices[i]>min){
            result = Math.max(prices[i]-min,result);
        }
        min = Math.min(min,prices[i])
    }
    return result;
};