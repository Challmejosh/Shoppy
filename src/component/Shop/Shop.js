import ItemList from "../itemList/ItemList";

const Shop = ({tShirt,love,like,setLove,confirm,product,productClick,handleAddToCart,btn,addCart,}) => {
    return ( 
        <div className="m-3">
            

           {confirm ? 
        (
            <ItemList product={product} like={like} love={love} confirm={confirm} productClick={productClick} handleAddToCart={handleAddToCart} btn={btn} addCart={addCart} />
        ) : (
            <div className="flex items-center justify-center">
                <div className="loader"></div>
            </div>
        )}
            
        </div>
     );
}
 
export default Shop;