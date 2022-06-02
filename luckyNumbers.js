function luckyNumbers(n) {
    let randArr = [];
    let currNum = 1;
    for (let i = 0; i < n; i++) {
        while (randArr.includes(currNum)) {
            currNum = Math.floor((Math.random() * 10) + 1);
        }
        randArr.push(currNum);
    }
    return randArr;
}

let finalArr = luckyNumbers(9);
console.log(finalArr);