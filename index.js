// Code your solutions in this file
function writeCards(arr, desc) {
    let thankYouMessage = [];
    for (let i = 0; i < arr.length; i++) thankYouMessage.push(`Thank you, ${arr[i]}, for the wonderful ${desc} gift!`);
    return thankYouMessage;
}

function countDown(num) {
    let counter = num;
    while (counter >= 0) {
        console.log(counter);
        counter-=1;
    }
}