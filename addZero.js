function addToZero(randArr) {
    let doesAdd = false;

    for(let i = 0; i < randArr.length - 1; i++) {
        for(let j = i + 1; j < randArr.length; j++) {
            if (randArr[i] + randArr[j] === 0) {
                doesAdd = true;
            }
        }
    }
    return doesAdd;
}

let falseArr = [2,5,4,7,100,45];
let trueArr = [-4,5,6,-2,4];

console.log(addToZero(falseArr));
console.log(addToZero(trueArr));