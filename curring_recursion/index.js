function add(a) {
    return function inner(b) {
        if (b === "") {
            return a;
        }
        else {
            return add(a + b);
        }
    }
}
console.log(add(2)(3)(4)(""));