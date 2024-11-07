import {createStore} from "redux"
import {productList} from "./productList"



const initialState={
    products:productList,
      
    
    cartItems:[],
    wishList:[]
}
const CART_ADD_ITEM= "cart/addItem"
const CART_REMOVE_ITEM= "cart/removeItem"

function reducer(state=initialState,action){
    console.log(state)
   switch(action.type){
    case"cart/addItem":
    return {...state,cartItems:[...state.cartItems,action.payload]}

   }
   
}
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)
store.dispatch({type:CART_ADD_ITEM,payload:{productId:1,quantity:1}})
store.dispatch({type:CART_ADD_ITEM,payload:{productId:12,quantity:1}})
  
store.dispatch({type:CART_ADD_ITEM,payload:{productId:14,quantity:6}})
  
store.dispatch({type:CART_ADD_ITEM,payload:{productId:18,quantity:1}})
store.dispatch({type:CART_REMOVE_ITEM,payload:{productId:1}})
  