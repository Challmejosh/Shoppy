import Cart from "../component/Cart/Cart";

const CartPage = ({cart,total,cartDel, btn,handleRemToCart,handleAddToCart}) => {
    return ( 
        <div className="">
           
                    <h1>Cart Page</h1>
                    <Cart cart={cart} total={total} cartDel={cartDel} btn={btn} handleRemToCart={handleRemToCart} handleAddToCart={handleAddToCart} />
        </div>
     );
}
 
export default CartPage;