// Code your solutions in this file
function writeCards(arystr, event) {
    let output = []

    for (let i =0; i < arystr.length; i++)
    {
        output.push(`Thank you, ${arystr[i]}, for the wonderful ${event} gift!`)
    }

    return output

}

function countDown (num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
    return num
}