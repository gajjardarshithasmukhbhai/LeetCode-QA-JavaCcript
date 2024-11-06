
var MinStack = function () {
    this.stack = [];
    this.supportive_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.stack.push(value);
    if (this.supportive_stack.length === 0 || value <= this.supportive_stack[this.supportive_stack.length - 1]) {
        this.supportive_stack.push(value);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length === 0) {
        return -1;
    }
    const removedValue = this.stack.pop();

    if (removedValue === this.supportive_stack[this.supportive_stack.length - 1]) {
        this.supportive_stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length === 0) {
        return -1; // or an error if needed
    }
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.supportive_stack.length === 0) {
        return -1;
    }
    return this.supportive_stack[this.supportive_stack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */