import { Link } from "react-router-dom";

const Cart = ({cart,total,cartDel,btn,handleRemToCart,handleAddToCart}) => {
    return ( 
        <div className="md:m-auto w-[500px] items-center  ">
            {btn ? (
                <div className="w-full sm:w-[500px] items-center sm:w-[500px] flex flex-col gap-3 justify-start sm:justify-center ml-2 sm:m-auto aligns-center">
                     <div className="w-[500px]  sm:w-[500px] flex flex-col gap-3 justify-start sm:justify-center ml-2 sm:m-auto aligns-center">
                {cart.map(item => (
                    <div className="max-w-[500px] w-[400px] sm:w-[800px] md:m-auto" key={item.id}>
                        <div className="flex justify-between md:m-auto gap-2 aligns-center py-2 px-3 shadow max-w-[500px] md:w-full relative">
                            <div className="sm:flex gap-3">
                                <div className="w-15 rounded-full">
                                    <img src={item.image} alt="" className="w-[100px] h-[100px] rounded-full "/>
                                </div>
                                <div className="flex max-w-[200px] flex-col justify-center aligns-center">
                                        <span className="font-semibold">{item.title}</span>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-left">{item.price}</span>
                                        <span>{item.quantity}</span>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 items-center font-bold">
                                    <p className="cursor-pointer" onClick={()=> handleRemToCart(item)}>-</p>
                                    <p className="cursor-pointer" onClick={()=> handleAddToCart(item)}>+</p>
                                </div>
                            </div>
                            <div className="cartDel flex md:text-center md:justify-center md:m-auto md:mr-0 md:aligns-center ">
                                <p onClick={()=> cartDel(item)}  className="font-semibold cursor-pointer flex text-center">x</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-[400px] md:w-[500px] md:m-auto">
                <p className="font-semibold">Total Price</p>
                <h2 className="font-semibold">{total}</h2>
            </div>
            <div className="flex aligns-center justify-center" >
                <Link to="/Checkout" className="border bg-gray-400 p-2 rounded-md m-auto text-center w-[500px] mt-8">Check Out</Link>
            </div>
                </div>
            ):(
                <div className="md:m-auto w-full sm:w-[500px]  bg-gray-200 h-[400px] flex justify-center rounded-lg items-center">
                    <div className="loader"></div>
                </div>
            )}
        </div>
     );
}
 
export default Cart;
