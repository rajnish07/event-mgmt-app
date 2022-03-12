import CartItem from "./CartItem";

function Cart({cartItems}){
    return <div className="flex-col w-2/6 mx-24 rounded-md shadow-md h-auto">
         <div className="bg-blue-600 h-16 py-5 text-center text-white rounded-sm">
             <h1>Cart Summary</h1></div>
         <div className="w-full px-2 flex-col py-2">
         {!cartItems.length ? <h1>Your Cart is Empty!</h1> : cartItems.map(item => <CartItem key={item.id} item={item}/>)}</div>
    </div>
}

export default Cart;