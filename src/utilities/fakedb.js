//use local storage to manage cart data
//Adding item to cart
const addToDb=id=>{
   
    let shoppingCart;
    //get the shoppingcart
    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
    //  console.log(storedCart);
    shoppingCart=JSON.parse(storedCart);
    }
    else{
    shoppingCart={};
    }
   

    // const quantity=localStorage.getItem(id);


    //If there are only one items we will use it on the else
    //because after addind the button to cart the quantity will be null
    //Therefore it will not save in the localstorage
     //add quantity
    const quantity=shoppingCart[id];
    if(quantity){
    // console.log('already exists');
    //ekhetre id string e thakbe ejnnw int e convert kore felbo
    // const newQuantity=parseInt(quantity)+1;

    //ekhn int e ache ar parseInt dewar drkar nai
    const newQuantity=(quantity)+1
    shoppingCart[id]=newQuantity;
    // localStorage.setItem(id,newQuantity);
    }
    
    else{
        shoppingCart[id]=1;
        // console.log('new item');
        // localStorage.setItem(id,1);
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

    //ekhn if else dui khetre shoppingCart[id] ta localstorage er kaj kortese
}



//removing item from cart
const removeFromDb=id=>{
    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
            // console.log('exists in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
            //delete korar por baki item abr set krbo

        }
    }

}
const deleteShoppingCart=id=>{
    localStorage.removeItem('shopping-cart');
}
export {addToDb,removeFromDb,deleteShoppingCart}