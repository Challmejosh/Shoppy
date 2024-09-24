import { Link } from "react-router-dom";


const Detail = ({product,confirm,id,handleAddToCart}) => {


    return ( 
        <div className="">
           <h1 className="">Product Details</h1>
          {confirm ?(  
          
              <div  className="bg-white cursor-pointer mx-5 rounded-lg justify-start overflow-hidden relative shadow-sm " >
                  <div className="shadow w-full sm:w-96 rounded-lg mx-2 min-h-80 flex sm:aligns-center aligns-center justify-center sm:justify-center sm:m-auto">
                      <img className="" src={product.image} alt="" />
                  </div>
                  
                  <div className="grid justify-start text-justify  sm:m-auto sm:justify-center">
                      <div className= "flex justify-start">
                          <span className="text-slate-200 p-2 uppercase text-justify">H&M</span>
                          <span className="p-2">star rating</span>
                      </div>
                      <div className="">
                          <h2 className="font-semibold p-2 text-justify">{product.title}</h2>
                          <h3 className="text-red-500 p-2 text-justify">${product.price}</h3>
                      </div>
                      <div className="p-2 w-96 text-justify text-[#333333]" id="">
                        {product.description}
                      </div>
                  </div>  
                  <div className="sm:m-auto">
                      <button onClick={()=>handleAddToCart(product)} className="bg-[red] border-gray-200 hover:bg-gray-200 text-black font-bold py-
                      3 px-4  uppercase">Add to Cart</button>
                    <Link to="/Checkout" className="bg-[red] border-gray-400 hover:bg-gray-200 text-black font-bold py-
                      2 px-4 rounded uppercase">Buy Now</Link>
                  </div>
    
                  
              </div>
        
              
              
          ):
          (
            <div className="">Loading...</div>
          )}
        </div>
     );
}
 
export default Detail;