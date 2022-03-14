import CartItem from "./CartItem";

function Cart({cartItems, removeItem}){
    return <div className="flex-col w-2/6 mx-24 rounded-md">
         <div className="bg-blue-600 h-16 py-5 text-center text-white rounded-sm">
             <h1 className="font-bold text-xl">Cart Summary</h1></div>
         <div className="w-full px-2 flex-col h-2/4">
         {!cartItems.length ? <h1 className="mx-auto w-3/4 text-center my-24">Your Cart is Empty!</h1> : cartItems.map(item => <CartItem key={item.id} item={item} remove={removeItem}/>)}</div>
    </div>
}

export default Cart;