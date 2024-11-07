import {createStore} from "redux"
import {productList} from "./productList"



const initialState={
    products:productList,
      
    
    cartItems:[],
    wishList:[]
}

function reducer(state=initialState,action){
    console.log(action)
    return state
}
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)
store.dispatch({type:"cart/addItem",payload:{productId:1,quantity:1}})
  