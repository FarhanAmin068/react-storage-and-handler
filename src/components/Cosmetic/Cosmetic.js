import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../utilities/fakedb';
const Cosmetic = (props) => {
    const {name,price,id}=props.cosmetic;//destructuring
    
    const addToCart=(id)=>{
        console.log("item added",id);
        //Saving to localstorage methods
        //Now i want to save the called ids in the local storage(Method-1)
        // localStorage.setItem(id,1);
        //using other function to save data to local storage(Method-2)
        addToDb(id);
    }
    const removeFromCart=id=>{
      removeFromDb(id);
    }
    // const addToCartWithParam=()=>addToCart(id);//means i have used a wrapping paper
                                               //to above function
                                               //it means after pressing the button
                                               //then first addToCartWithParam will
                                               //be called and after that addToCart
                                               //will call

    

    return (
        <div className='product'>
            {/* <h2>Buy this: {props.cosmetic.name}</h2> */}
            <h2>Buy this: {name}</h2>
            
            {/* <p>only for: {props.cosmetic.price}</p> */}
            <p>only for: {price}</p>
            <p><small>is has id:{id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            {/* Shortcut version of the avobe line */}
            <button onClick={()=>addToCart(id)}>Add to cart(Shortcut)</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;