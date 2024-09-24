import Shop from "../component/Shop/Shop";

const Home = ({love,like,product,productClick,confirm,handleAddToCart, btn, addCart}) => {
    return ( 
        <div className="">
            <Shop love={love} like={like} confirm={confirm } product={product} productClick={productClick} handleAddToCart={handleAddToCart} btn={btn} addCart={addCart} />
        </div>
     );
}
 
export default Home;