// group of Anagrams
const groupAnagrams = (strs) => {
    const result = {};
    const sortArray = [];
    for (let i = 0; i < strs.length; i++) {
        sortArray[i] = strs[i].split('').sort().join('')
    }
    for (let i = 0; i < sortArray.length; i++) {
        let string = strs[i].split('').sort().join('');

        if (result[string]) {
            result[string].push(strs[i]);
        }
        else {
            result[string] = [strs[i]]
        }
    }
    return Object.values(result);

}
console.log(groupAnagrams(["a"]));