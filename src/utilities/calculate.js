const add=(first,second)=>{
    return first+second;
}
//export default add;
//export default korar karon jate ei function ta onno utilities e use korte pari
const multiply=(first,second)=>{
    return first*second;
}
// const numbers=[10,20,30,40,50];
// const sumReducer=(previous,current)=>previous+current;
// const total=numbers.reduce(sumReducer,0);


// const items=[
//         {id:1,name:'Alta',price:100},
//         {id:2,name:'palis',price:200},
//         {id:3,name:'malis',price:300},
//         {id:4,name:'balis',price:400},
//         {id:5,name:'nalis',price:500},
// ]
// const itemSumReducer=(previous,current)=>previous+current;
// //prev ar current jog kore jogfol current e rakhe eivabe cholte thake ebong final
// //sum ta paowa jay
// const itemTotal=items.reduce(itemSumReducer,0);

const getTotalPrice=products=>{
    const reducer=(previous,current)=>previous+current.price;
    const total=products.reduce(reducer,0);
    return total;
}

//If I want to add more than one object to export
export{add,multiply,getTotalPrice as getTotal};


