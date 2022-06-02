// This is the google method
// function checkForUnique(str){
//     let checker = {};
//     for(var i=0; i < str.length; i++){
//         if (checker[str[i]] != null){
//             checker[str[i]] = 1;
//             return false;
//         }else{
//             checker[str[i]] = 0;
//         }
//     }
//     return true;
// }

// console.log(checkForUnique('uniq'));
// console.log(checkForUnique('not unique'));

//This is mine and my partner's method
function checkForUnique(str) {
    strArray = str.split("")

    for(let i = 0; i < strArray.length - 1; i++) {
        for(let j = i+1; j < strArray.length; j++) {
            if (strArray[i] === strArray[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkForUnique('uniq'));
console.log(checkForUnique('not unique'));