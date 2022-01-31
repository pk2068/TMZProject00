alert('Hi4');

/*Question 2: Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together, 
give the target number. 
For example: answer([1,2,3], 4)should return [1,3]
*/
let items = [1,2,8,4,15,6]

const answerFunction = ( arraym, targetNumber ) =>
{
    for (let i = 0; i < arraym.length-1; i++)    
    {
        for(let j = 1; j < arraym.length; j++)
        {
            if ( arraym[i] + arraym[j] == targetNumber)
            return [ arraym[i], arraym[j] ];
        }
    }
};

console.log('input', items);
result =  answerFunction(items, 9);
console.log('result', result);

