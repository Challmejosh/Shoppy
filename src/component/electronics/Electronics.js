import ItemList from "../itemList/ItemList";

const Electronic = ({product,like,love,confirm}) => {
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
 
export default Electronic;