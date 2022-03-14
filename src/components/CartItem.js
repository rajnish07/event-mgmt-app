function CartItem({item, remove}){
    const removeFromCart = () => {
        remove(item)
    }

    return <div className="w-full flex-col shadow-md py-2 px-2">
        <div className="flex items-center">
            <img className="w-4 h-4 rounded-full mr-2" src={item.image} alt='item'/>
        <span className="w-2/4 font-bold">{item.name}</span> <span className="w-1/4 px-2 text-xs">X{item.qnty}</span><button className="w-1/6 bg-blue-600 text-white rounded-sm my-2 text-xs py-1 del" onClick={removeFromCart}>X</button>
        </div>
        <p>{item.note}</p>
        <hr/> 
        <div className="flex">
            <span className="w-4/5"></span>
            <span className="my-2 float-right">${item.amount}</span>
        </div>
        {item.addOns && (<div className="w-full px-3">
            <h1 className="font-bold">Add On's</h1>
            <ul>
            {item.addOns.map(addOn => <li key={addOn}>{addOn}</li>)}
            </ul>
        </div>)}
        </div>
} 

export default CartItem;