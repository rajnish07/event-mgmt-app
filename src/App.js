import Catalog from './components/Catalog';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Cart from './components/Cart';
import { useEffect, useState } from "react";

function App() {
  const [store, setStore] = useState({})
  const [selected, setSelected] = useState('Consumables')
  const [cartItems, setCartItems] = useState([]);

  const handleSelect = (label) => {
      setSelected(label)
  }

  const addToCart = (args) => {
    const items = cartItems.filter(item => item.id !== args.id)
    setCartItems([...items, args])
  }

  useEffect(()=>{
    fetch('https://smartqdemo.firebaseio.com/events-data.json')
    .then(response => response.json())
    .then(data => setStore(data))
    .catch(err => console.error(err))
},[])

  return (
    <div className="flex-col full">
      <Header />
      <h1 className='text-blue-700 text-5xl mx-3 my-2'>Build Your Menu</h1>
      <div className='flex px-2'>
      <SideBar menus={store.extras?.categories} selected={selected} handleSelect={handleSelect}/>
      <Catalog products={store.menu} selected={selected} addToCart={addToCart}/>
      <Cart cartItems={cartItems}/>
        </div>
    </div>
  );
}

export default App;
