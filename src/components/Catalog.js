import Item from "./Item";

function Catalog({ products, selected, addToCart }) {

    const addItemToCart = (args) => {
        addToCart(args)
    }

    const getSelectedBanner = ()=>{
        if(selected === 'Decorations') return 'https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/free_banner_ads_corel_format.jpg';
        else if(selected === 'Pizza') return 'https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/vector-italian-pizza-horizontal-banners.jpg';
        else return 'https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/6.jpg';
    }
    return <div className="flex-col w-2/4 mx-2">
        <img src={getSelectedBanner()} alt="cateogy" className="h-60 w-full rounded shadow-md"/>
        {products?.filter(product => product.category === selected).map(product => <Item key={product.foodid} item={product} addToCart={addItemToCart}/>)}
    </div>
}

export default Catalog;