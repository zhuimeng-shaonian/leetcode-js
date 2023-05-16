
/**
 * 题目描述：
 *  给定一个整数数组 nums 和一个整数目标值 target，
 *  请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 *  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *  你可以按任意顺序返回答案。
 * 
 * 示例 1：
 *   输入：nums = [2,7,11,15], target = 9
 *   输出：[0,1]
 *   解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 示例 2：
 *   输入：nums = [3,2,4], target = 6
 *   输出：[1,2]
 * 
 * 示例 3：
 *   输入：nums = [3,3], target = 6
 *   输出：[0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    /**
     * 直接2层遍历。
     * 遍历每个元素，然后将这个元素和他后面的元素相加（不需要和前面的元素比是因为前面的元素都和自己相加判断过了），
     * 找到和等于target进行返回（题目描述可以假设只有一个答案）
     */
    for (var i = 0; i < nums.length; ++i) {
        for (var j = i + 1; j < nums.length; ++j) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        } 
    }
};