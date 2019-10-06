/* as alternative we can use ternar operator:

    function task2() {
        for(let i = 1; i < 100; i += 1) {
            i % 3 === 0 && i % 7 === 0 ? console.log('OpenSource') 
            : i % 7 === 0 ? console.log('Source')
            : i % 3 === 0 ? console.log('Open')
            : console.log(i);       
        }
    }
*/

function task2() {
    for (let i = 1; i < 100; i += 1) {
        if (i % 3 === 0 && i % 7 === 0) console.log('OpenSource')
        else if (i % 7 === 0) console.log('Source')
        else if (i % 3 === 0) console.log('Open')
        else console.log(i);
    }
    return;
}