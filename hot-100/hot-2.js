
/**
 * 题目描述：
 *  给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 *  字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
 * 
 * 示例 1：
 *  输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 *  输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 示例 2：
 *  输入: strs = [""]
 *  输出: [[""]]
 * 
 * 示例 3：
 *  输入: strs = ["a"]
 *  输出: [["a"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    /**
     * 解题思路：
     *  字母异位词分组，可以考虑用一个map进行分组，将同一种异位词的key作为map的key，value则存储异位词的字符串
     *  那么abc，cba, cab这3个字符串如何使用同一种key呢？答案是排序。通过比较每一个字符串的ASCII编码值来进行排序，排序好之后就是abc
     *  然后将map转成二维数组即可
     */

    const map = {}

    const ans = []

    function sortStr(str) {
        const arr = Array.from(str)
        arr.sort((a, b) => {
            return a.charCodeAt() - b.charCodeAt()
        })

        return arr.join('')
    }

    for (let i = 0; i < strs.length; ++i) {
        let str = sortStr(strs[i])
        if (!map[str]) {
            map[str] = []
        }
        map[str].push(strs[i])
    }

    for(let key in map) {
        ans.push(map[key])
    }

    return ans
};