// Code your solutions in this file
function writeCards(array, beemo) {
   let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(`Thank you, ${array[i]}, for the wonderful ${beemo} gift!`);
    }
    return result;
}


function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}