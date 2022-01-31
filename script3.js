alert('Hi4');

/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/
let items = [1, "2", "5", 6, "4",3,"3", undefined,"2",5]
let items2 = [1, undefined, undefined, 19, "19", 18, true, false, "2", "5", 6, "4",3,"3", undefined,"2",5]

const answerFunction = ( array ) =>
{
    function sortCompare (a,b) 
    {
        return a - b;
    }
    const newarray = items.sort(sortCompare);

    const stringArray = newarray.map( ( item) => 
    {
        if (typeof item === 'string')
            return item;    
    }).filter( item => item )

    const numberArray = array.filter( ( item) => typeof item === 'number').sort(sortCompare)
    // const numberArray = newarray.map( ( item) => 
    // {
    //     if (typeof item === 'number')
    //         return item;    
    // }).filter( item => item )

    const boolArray = array.filter( ( item) => typeof item === 'boolean')
    

    const solutionArray = [];
    if (numberArray?.length > 0)
        solutionArray.push(numberArray);
    if (stringArray?.length > 0)
        solutionArray.push(stringArray);
    if (boolArray?.length > 0)
        solutionArray.push(boolArray);

    return solutionArray;
};

// console.log('input', items);
// let result =  answerFunction(items);
// console.log('result', result);

console.log('input', items2);
result =  answerFunction(items2);
console.log('result', result);

// let uniqueItems = [...new Set(items)]
// console.log('unique', uniqueItems);

// const rez = [];
// uniqueItems.forEach( i => 
//     {
//         let y = items.filter( x => x == i)
//         if (y.length > 1)
//             rez.push(y);
//         else if (y.length == 1)
//         rez.push(y[0]);
//     })    

//     console.log('rez', rez)
// // SORT
// const vals = [7,3,6,1,8,2]
// console.log("vals", vals);

// function sortCompare (a,b) 
// {
//     return a.price - b.price;
// }

// const valsSorted = items.map( i => i).sort( sortCompare);
// console.log("sorted", valsSorted);


// // REDUCE
// const reducedAccumulation = items.reduce( (acc, item) => {
//     console.log("acc:" + acc + " and item:" +item.price);    
//     return acc = acc + item.price;
// }, 11);
// console.log("reducedAccumulation",reducedAccumulation);


// //SOME 
// const includeItem = items.some( (item) => {
//     if (item.name === "Keyboard" || item.price === 520)
//     return true;
// });
// console.log("includeItem",includeItem);

// //EVERY
// const areThereAny2 = items.some( (item) =>  item.price <= 1000)
// console.log('are all under 1000', areThereAny2);

// //SOME
// const areThereAny = items.some( (item) =>  item.price > 1000)
// console.log('are there any over 1000', areThereAny);
// //FIND
// const foundsingleobject = items.find( (item) => 
//         {
//             return item.name.length === 6
//         })
//         console.log('first found', foundsingleobject);

// //MAP
// const actionCouponItems = items.map( (item) => {
//     return {
//         actionItem: item.name + " from last year with price " + item.price + " €",
//         newPrice: item.price - 20,
//       } 
// })
// console.log('special sales offer', actionCouponItems);

// // FILTER
// const cheapOnlyitems = items.filter( (item) => item.price < 500)
// console.log('cheap only', cheapOnlyitems);
// const expensiveOnlyitems = items.filter( (item) => item.price >= 500)
// console.log('expensive only', expensiveOnlyitems);




// console.log('original items', items);