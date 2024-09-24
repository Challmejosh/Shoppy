import Navbar from "../Navbar/Navbar";
import Poster from "../Poster/Poster";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../../Page/Home";
import ProductDetail from "../../Page/productDetail";
import useFetch from "../useFetch/UseFetch";
import { useState } from "react";
import CartPage from "../../Page/CartPage";
import Checkout from "../../Page/Checkout";
import Footer from "../Footer/Footer";
import Comingsoon from "../../Page/Comingsoon";
import Category from "../Category/Category";
import Electronic from "../electronics/Electronics";
import Women from "../Women/Women";
import Men from "../Men/Men";
import Jewelery from "../Jewelery/Jewelery";


const Body = () => {
    const love = "./PixForEcomerce/others/icons8-love-50.png";


    const like = (id)=>{
       if(id){
        alert("./PixForEcomerce/others/icons8-favorite-50.png")
       }
    }

   /* const src = "https://fakestoreapi.com/products";*/
    
    const handleProductClick = (productId) => {
        window.location.href = `productDetail?id=${productId}`;
    }


    const {product,confirm} = useFetch("https://fakestoreapi.com/products");

    const [cart, setCart] = useState([])
   const handleAddToCart = (prod) => {
    setBtn(true)
        const findCart = product.find(item => item.id === prod.id);
            if (findCart){
                const existingProduct = cart.find(item => item.id === prod.id)
                if (existingProduct){
                    setCart(cart.map(item => item.id === prod.id ? {...item, quantity: item.quantity + 1}: item))
                }else{
                    setCart([...cart, {...findCart,  quantity: 1}])
                }
            }
        }
        const handleRemToCart = (prod) => {
            setBtn(true)
                const findCart = product.find(item => item.id === prod.id);
                    if (findCart){
                        const existingProduct = cart.find(item => item.id === prod.id)
                        if (existingProduct){
                            setCart(cart.map(item => item.id === prod.id ? {...item, quantity: item.quantity - 1}: item))
                        }else{
                            setCart([...cart, {...findCart,  quantity: 1}])
                        }
                    }
                }

        const [btn, setBtn] = useState(false)
        const addCart = (prod)=>{
            if(prod){
            setCart(cart.map(item => item.id === prod.id ?  {...item, quantity: item.quantity + 1 }: item))
            }
        }
      
      const total = cart.reduce((acct, item) => acct + item.price * item.quantity, 0)
      const cartQuantity = cart.reduce((acct, item)=> acct + item.quantity, 0)
      const cartDel = (prod) => {
        const del = cart.filter(item => item.id !== prod.id)
        setCart(del);
        }
    return ( 
        <BrowserRouter>

        <div className="">
            <Navbar cartQuantity ={cartQuantity} />
            <Poster />
           
             <Category />  
            <Routes>
                
                    <Route path='/' exact element={<Home love={love} like={like} confirm={confirm} product={product} productClick={handleProductClick} handleAddToCart={handleAddToCart} btn={btn} addCart={addCart} total={total}/>}/>

                    <Route path="/electronics" element={<Electronic confirm={confirm} product ={product.filter((item) => item.category === "electronics")} like={like} love={love} />} />

                    <Route path="/Women" element={<Women confirm={confirm} product ={product.filter((item) => item.category === "women's clothing")} like={like} love={love} />} />

                    <Route path="/Men" element={<Men confirm={confirm} product ={product.filter((item) => item.category === "men's clothing")} like={like} love={love} />} />

                    <Route path="/jewelery" element={<Jewelery confirm={confirm} product ={product.filter((item) => item.category === "jewelery")} like={like} love={love} />} />


                    

                    <Route path="/checkout" element={<Checkout total={total}/>}/>

                    <Route path='/productDetail/:id' element={<ProductDetail love={love} like={like} confirm={confirm} product={product} productClick={handleProductClick} handleAddToCart={handleAddToCart} />} />

                    <Route path="/Cart" element={<CartPage cart={cart} btn = {btn} total={total} cartDel={cartDel} handleRemToCart={handleRemToCart} handleAddToCart={handleAddToCart} /> }/>
                    
                    <Route path='/Comingsoon' element={<Comingsoon />} />
            </Routes>   
            <Footer />
        </div>
        </BrowserRouter>  

     );
}
 
export default Body;