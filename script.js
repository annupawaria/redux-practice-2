import {createStore} from "redux"
import {productList} from "./productList"



const initialState={
    products:productList,
      
    
    cartItems:[],
    wishList:[]
}
const CART_ADD_ITEM= "cart/addItem"
const CART_REMOVE_ITEM= "cart/removeItem"
const CART_INCREASE_ITEM_QUANTITY="cart/increaseItemQuantity"
const CART_DECREASE_ITEM_QUANTITY="cart/decreaseItemQuantity"

function reducer(state=initialState,action){
    console.log(state)
   switch(action.type){
    case CART_ADD_ITEM:
    return {...state,cartItems:[...state.cartItems,action.payload]}
    case CART_REMOVE_ITEM:
        return {...state,cartItems:state.cartItems.filter((cartItem)=> cartItem.productId !== action.payload.productId),

   }
   case CART_INCREASE_ITEM_QUANTITY:
    return{
        ...state,cartItems:state.cartItems.map((cartItem)=>{
            if(cartItem.productId===action.payload.productId){
                return {...cartItem,quantity:cartItem.quantity+1}
            }
            return cartItem
        }),
    }
   default:
    return state
    case CART_DECREASE_ITEM_QUANTITY:
        return{
            ...state,cartItems:state.cartItems.map((cartItem)=>{
                if(cartItem.productId===action.payload.productId){
                    return {...cartItem,quantity:cartItem.quantity-1}
                }
                return cartItem
            }),
        }
    
   
}}
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)
store.dispatch({type:CART_ADD_ITEM,payload:{productId:1,quantity:1}})
store.dispatch({type:CART_ADD_ITEM,payload:{productId:12,quantity:1}})
  
store.dispatch({type:CART_ADD_ITEM,payload:{productId:14,quantity:6}})
  
store.dispatch({type:CART_ADD_ITEM,payload:{productId:18,quantity:1}})
store.dispatch({type:CART_REMOVE_ITEM,payload:{productId:1}})
store.dispatch({ type:CART_INCREASE_ITEM_QUANTITY,payload:{productId:12},})
store.dispatch({ type:CART_INCREASE_ITEM_QUANTITY,payload:{productId:12},})
store.dispatch({type:CART_INCREASE_ITEM_QUANTITY,payload:{productId:12},})
store.dispatch({type:CART_INCREASE_ITEM_QUANTITY,payload:{productId:12},})
store.dispatch({type:CART_DECREASE_ITEM_QUANTITY,payload:{productId:1},})