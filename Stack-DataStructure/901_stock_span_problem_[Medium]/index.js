
var StockSpanner = function () {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let span = 1;

    // Pop elements from stack while the current price is greater than or equal to the price at the top of the stack
    while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1][0]) {
        span = span + this.stack[this.stack.length - 1][1];
        this.stack.pop();
    }

    this.stack.push([price, span])
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */