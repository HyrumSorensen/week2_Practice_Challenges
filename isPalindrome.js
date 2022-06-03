function checkPalindrome(str) {
    let length = str.length;
    var middle = Math.floor(length/2);
    for ( let i = 0; i < middle; i++ ) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome('hooooh'));
console.log(checkPalindrome('heo'));