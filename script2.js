alert('Hi3');

let items = [1,2,4,591,392,2,5,10,2,1,1,1,20,20];
console.log('items', items);

function sortCompare (a,b) 
{
    return a - b;
}
const newarray = items.sort(sortCompare);
console.log('new array', newarray);

let uniqueItems = [...new Set(items)]
console.log('unique', uniqueItems);

const rez = [];
uniqueItems.forEach( i => 
    {
        let y = items.filter( x => x == i)
        if (y.length > 1)
            rez.push(y);
        else if (y.length == 1)
        rez.push(y[0]);
    })    

    console.log('rez', rez)
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