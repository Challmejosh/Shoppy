import ItemList from "../itemList/ItemList";

const Jewelery = ({product,like,love,confirm}) => {
    return ( 
        <div className="">
            {confirm ? 
        (
            <ItemList product={product} like={like} love={love} confirm={confirm} />
        ) : (
            <div className="flex items-center justify-center">
                <div className="loader"></div>
            </div>
        )}
        </div>
     );
}
 
export default Jewelery;