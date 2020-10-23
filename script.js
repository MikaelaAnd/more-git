
/**
 * Will generate a random number and print it into the DOM
 */
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber)
}

/**
 * Generates random number and return it.
 * @returns {number} the random number that was generated
 */
function getRandomNumber () {
    const randomNumber = Math.random() * 100;
    return Math.round(randomNumber);
}
/**
 * 
 * @param {number} number 
 */
function addNumberToPage(number) {
    const div = document.getElementById('results')
    div.append(number + ' , ');

}