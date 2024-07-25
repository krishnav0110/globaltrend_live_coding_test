const LCSUtil = (str1, str2, str1Len, str2Len, lcsMatrix) => {
    if(str1Len === 0 || str2Len === 0) {
        return 0;
    }
    if(str1[str1Len - 1] === str2[str2Len - 1]) {
        lcsMatrix[str1Len][str2Len] = 1 + LCSUtil(str1, str2, str1Len - 1, str2Len - 1, lcsMatrix);
        return lcsMatrix[str1Len][str2Len];
    }
    if(lcsMatrix[str1Len][str2Len] !== -1) {
        return lcsMatrix[str1Len, str2Len];
    }
    return Math.max(
        LCSUtil(str1, str2, str1Len - 1, str2Len, lcsMatrix),
        LCSUtil(str1, str2, str1Len, str2Len - 1, lcsMatrix)
    );
};

const findLCS = (str1, str2) => {
    let str1Len = str1.length;
    let str2Len = str2.length;

    let lcsMatrix = new Array(str1Len + 1).fill().map(() => new Array(str2Len + 1).fill(-1));
    return LCSUtil(str1, str2, str1Len, str2Len, lcsMatrix);
};



// Driver
var string1 = "ad";
var string2 = "a";

console.log("String 1: " + string1);
console.log("String 2: " + string2);
console.log("LCS: " + findLCS(string1, string2));