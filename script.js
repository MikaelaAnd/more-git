function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber)
}


function getRandomNumber () {
    const randomNumber = Math.random() * 100;
    return Math.round(randomNumber);
}

function addNumberToPage(number) {
    console.log(number);
}