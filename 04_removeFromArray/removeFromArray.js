const removeFromArray = function(arr, numRemove) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numRemove) {
            arr.splice(i, 1)
            continue
        }
        continue
    }
    return arr 
};

// Do not edit below this line
module.exports = removeFromArray;
