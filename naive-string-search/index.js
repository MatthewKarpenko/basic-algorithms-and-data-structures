function findSubstringsNumber(string, substring) {
    const stringArr = string.split(''),
          substringArr = substring.split(''),
          substringLength = substringArr.length;

    let matchesNumber = 0;

    for (let i = 0; i < stringArr.length; ++i) {
        
        for (let j = 0; j < substringArr.length; ++j) {
            const stringChar = stringArr[i + j],
                  substringChar = substringArr[j];
            
            if(substringChar === stringChar) {
                if(j === substringLength - 1) matchesNumber ++;
            }else {
                break;
            }
        }
    }

    return matchesNumber;
}

const matchesQuantity = findSubstringsNumber('hello, hello , hello', 'll');

console.log(matchesQuantity);