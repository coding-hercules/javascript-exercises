const repeatString = function(string, num) {
    
    let text = '';

    if (num < 0) return 'ERROR'
    for (let i = 1; i < num + 1; i++) {
        
        text += string;
         
    }
    return text
};

// Do not edit below this line
module.exports = repeatString;
