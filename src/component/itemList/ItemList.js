import { Link } from "react-router-dom";

const ItemList = ({product,like,love,confirm,productClick,handleAddToCart,btn,addCart}) => {
    return ( 
        <div className="grid sm:grid-cols-2 grid-cols-2 md:grid-cols-4 h-fit w-full gap-2 p-3 my-5">
                {product.map(item => (
                    <div   className="bg-white cursor-pointer  rounded-lg overflow-hidden relative shadow-sm " key={item.id}>
                        <div className="shadow w-full rounded-lg mx-2 min-h-80 flex aligns-center justify-center">
                            <img className="h-[60px] md:h-72" src={item.image} alt="" />
                        </div>
                        
                        <div className="grid justify-start text-justify h-[200px] m-auto">
                            <div className= "flex justify-start">
                                <span className="text-slate-200 p-2 uppercase text-justify">H&M</span>
                                <span className="p-2">star rating</span>
                            </div>
                            <Link to={`/productDetail/${item.id}`} className="">
                                <h2 className="font-semibold p-2 text-justify">{item.title}</h2>
                                <h3 className="text-red-500 p-2 mt-5 text-justify">${item.price}</h3>
                            </Link>
                        </div>
                       <div className="flex justify-start">
                       <button className="border bg-gray-400 p-2 ml-5 rounded-md uppercase" onClick={()=>handleAddToCart(item)}>add to cart</button>
                       </div>
                    </div>
                ))}
                

            </div>
     );
}
 
export default ItemList;
