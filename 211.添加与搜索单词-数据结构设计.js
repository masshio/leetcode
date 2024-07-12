/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

var WordDictionary = function() {
  this.words = []
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  this.words.push(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let str = '^'
  let num = 0
  const wordArr = word.split('')
  wordArr.map((item, index) => {
    if(item != '.') {
      if(num == 0) {
        str += item
      } else {
        str += '.{'+ num + '}'
        str += item
        num = 0
      }
    } else {
      num++
    }
    if(index == wordArr.length - 1 && item == '.') {
      str += '.{'+ num + '}'
    }
  })
  str += '$'
  return this.words.findIndex((item) => new RegExp(str).test(item)) != -1
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

