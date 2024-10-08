import ItemList from "../itemList/ItemList";

const Electronic = ({product,handleAddToCart,like,love,confirm}) => {
    return ( 
        <div className="">
            {confirm ? 
        (
            <ItemList product={product} handleAddToCart={handleAddToCart} like={like} love={love} confirm={confirm} />
        ) : (
            <div className="flex items-center justify-center">
                <div className="loader"></div>
            </div>
        )}
        </div>
     );
}
 
export default Electronic;
