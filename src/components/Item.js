import { useState } from "react";

function Item({ item, addToCart }) {
    const [status, setStatus] = useState(false)
    const [qntyErr, setQntyErr] = useState(false);
    const [product, setProduct] = useState({
        id: item.foodid,
        name: item.foodname,
        qnty: 0,
        amount: 0,
        note: "",
        session: "BreakFast",
        image: item.imageurl,
        addOns: []
    })

    const handleChange = (e) => {
        if(e.target.value >= 0){
            setProduct({...product, qnty: Number(e.target.value), amount: Math.round(item.price * Number(e.target.value) * 100) / 100})
            if(qntyErr) setQntyErr(!qntyErr)
        }
        else setQntyErr(!qntyErr)
    }

    const handleAddToCart = () => {
        addToCart(product)
    }

    return <div className="my-8 px-2 py-4 shadow-md rounded-md">
        <div className="flex">
            <img src={item.imageurl} alt='item img' className="rounded-full w-28 h-28 mx-2 border-2" />
            <div className="flex-col w-full">
                <div className="flex">
                    <span className="w-4/5 font-bold text-lg">{item.foodname}</span>
                    <span className="ml-16 font-bold text-xl text-blue-700 ">${item.price}</span>
                </div>
                <span className="text-sm text-slate-500">{item.fooddescription}</span>
                <br />
                <span className="text-md text-slate-500">{item.category}</span>
                <br />
                { item.submenu && (!status ? <button className="bg-blue-600 font-bold text-white py-1 px-3 rounded-md" onClick={() => setStatus(!status)}>Add On's</button> : <div className="w-full mx-2 flex-col">
                    <div className="w-full px-4">
                    <button className="text-blue-600 float-right font-bold" onClick={() => setStatus(!status)}>Cancel</button>
                    </div>
                    <hr />
                    {item.submenu?.map(smenu => <div className="flex w-full items-center">
                        <input type="checkbox" value={smenu} className="bg-blue-500"/>
                    <span className="w-3/4 mx-4">{smenu}</span>
                </div>)}</div>)}
            </div>
        </div>
        <hr className="my-2" />
        <div className="flex grow w-full px-2 font-bold">
            <div className="w-1/4 mr-2">
                <h1 >Quantity</h1>
                <input type="number" placeholder="Qty" value={product.qnty} onChange={handleChange} className={`outline-none shadow-md w-full px-4 rounded-md h-12${qntyErr ? ' text-red-500' : ''}`} />
            </div>
            <div className="w-2/4 mr-2">
                <h1 >Session</h1>
                <select className="outline-none w-full shadow-md rounded-md h-12 px-4" onChange={(e) => {setProduct({...product, session: e.target.selectedOptions[0].value})}}>
                    {item.sessionlist.map((sessionItem, index) => <option key={index} value={sessionItem}>{sessionItem}</option>)}
                </select>
            </div>
            <div className="w-1/4">
                <h1 >Sub Total</h1>
                <input type="text" placeholder="$0.00" value={product.qnty > 0 ? product.amount: ''} onChange={() => {}} className="outline-none shadow-md w-full rounded-md h-12 px-4" />
            </div>
        </div>
        <div className="mx-2 font-bold">
            <h1>Note to the Kitchen</h1>
            <div className="flex grow w-full">
                <input type="text" placeholder="add a note...." value={product.note} onChange={(e) => setProduct({...product, note: e.target.value})} className="w-3/4 mr-4 shadow-md outline-none rounded-md h-12 px-4" />
                <button className={`${product.qnty === 0 ? 'bg-gray-300' : 'bg-blue-600'} w-1/4 font-bold text-white px-3 rounded-md`} onClick={handleAddToCart} disabled={product.qnty == 0}>Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Item;