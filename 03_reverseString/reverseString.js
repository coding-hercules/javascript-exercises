const reverseString = function(string) {
    let reversedString = '';
    
    // split word/phrase into individual characters
    let arr = string.split("") 
    // put last character (index = length - 1) at index=0.
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedString += arr[i];
    }
    //return final string

    return reversedString
    
};

// Do not edit below this line
module.exports = reverseString;
