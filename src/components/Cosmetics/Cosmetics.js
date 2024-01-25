import React, { useEffect, useState } from 'react';
import { add, getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    
    // const cosmetics=[
    //     // {id:1,name:'Alta',price:100},
    //     // {id:2,name:'palis',price:200},
    //     // {id:3,name:'malis',price:300},
    //     // {id:4,name:'balis',price:400},
    //     // {id:5,name:'nalis',price:500},

    //     //Now we will use json data
        
    //         {
    //           "id": "65b26f1cba1f5fa774aa7e6f",
    //           "price": 438,
    //           "name": "Whitfield Gross"
    //         },
    //         {
    //           "id": "65b26f1c4f19b4a6193ce9fc",
    //           "price": 475,
    //           "name": "Lawanda Beach"
    //         },
    //         {
    //           "id": "65b26f1ca69277fd18c56f5e",
    //           "price": 437,
    //           "name": "Anna Kirk"
    //         },
    //         {
    //           "id": "65b26f1cc0c8670408c917ed",
    //           "price": 235,
    //           "name": "Ladonna Oconnor"
    //         },
    //         {
    //           "id": "65b26f1ca829be052f05079c",
    //           "price": 86,
    //           "name": "Kristine Gutierrez"
    //         },
    //         {
    //           "id": "65b26f1cca7f657d068af230",
    //           "price": 449,
    //           "name": "Watson Beard"
    //         }
          
    // ]

    //Now we will fetch json api
    //ekhetre public folder e data.json namer file create krbo
    const[cosmetics,setCosmetics]=useState([]);
    useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setCosmetics(data))
    },[])
    const first=55;
    const second=66;
    const total=add(first,second);
    const total2=getTotal(cosmetics);
    return (
        <div>
            <h1>welcome to my cosmetics store</h1>
            <p>Total:{total}</p>
            <p>Money needed:{total2}</p>
            {    //ekhetre amr unique value pass korano lagbe jehutu onk gula object
                cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id}
                cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;