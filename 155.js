var MinStack = function () {
  this.s = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.s.push([val, val]);
  } else {
    let min = Math.min(val, this.s[this.s.length - 1][1]);
    this.s.push([val, min]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
