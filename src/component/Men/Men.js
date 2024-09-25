import ItemList from "../itemList/ItemList";

const Men = ({product,like,love,confirm,handleAddToCart}) => {
    return ( 
        <div className="">
            {confirm ? 
        (
            <ItemList product={product} like={like} love={love} confirm={confirm} handleAddToCart={handleAddToCart}/>
        ) : (
            <div className="flex items-center justify-center">
                <div className="loader"></div>
            </div>
        )}
        </div>
     );
}
 
export default Men;
