/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let customerWaitingTime = 0;
    let customerArrivingTime = customers[0][0];
    let cookingTime = customers[0][1];
    let customerCurrentTime = 0;
    let totalWaitingTime = 0;

    for(let i = 0; i < customers.length; i++) {
        customerCurrentTime = customers[i][0];
        cookingTime = customers[i][1];

        // Calculate when the chef will start cooking this customer's order
        customerArrivingTime = Math.max(customerArrivingTime, customerCurrentTime);

        // Update the waiting time
        customerWaitingTime = (customerArrivingTime + cookingTime) - customerCurrentTime;
        totalWaitingTime = totalWaitingTime+customerWaitingTime;

        // Update the arriving time to reflect the end of this customer's order
        customerArrivingTime = customerArrivingTime+cookingTime;
    }
    
    // Calculate the average waiting time
    return totalWaitingTime / customers.length;
};