import Detail from "../component/Detail/Detail";
import { useParams } from "react-router-dom";
import useFetch from "../component/useFetch/UseFetch";


const ProductDetail = ({love,like,productClick,handleAddToCart}) => {
    const { id } = useParams();
    const {product,confirm} = useFetch("https://fakestoreapi.com/products/"+id);
    console.log(product);
    return ( 
        <div className="">
            <Detail love={love} like={like} confirm={confirm } product={product} id={id} handleAddToCart={handleAddToCart} />
            
        </div>
     );
}
 
export default ProductDetail;
