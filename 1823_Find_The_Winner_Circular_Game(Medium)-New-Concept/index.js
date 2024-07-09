// Basically In array, if starting number given and based on the k if someone asking to removed
// -In that case used this math Formula => i+k-1

// 1 2 3 4 5 and k is 2. so in that case i=0. so 0+2-1 => 1 position is removed
// But Problem is when it goes out of the Array Position, so in that case used %2,
// -so if removed, come again that on 0th position 


Approach: https://www.youtube.com/watch?v=lq3RMxKST-Y

var findTheWinner = function(n, k) {
    let afterRemovedArray = [];
    let index = 0;
    for(let i=1;i<=n;i++) {
        afterRemovedArray.push(i);
    }
    while(afterRemovedArray.length>1) {
        index = (index+k-1)%afterRemovedArray.length;
        afterRemovedArray.splice(index,1);
    }
    return afterRemovedArray[0];
};