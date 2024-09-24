import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="p-3 bg-gray-200 h-[250px] mt-8 h-auto">
            <div className="sm:grid sm:grid-cols-6 gap-3 mx-3 grid grid-cols-2">
                <div className="sm:col-span-2 p-2">
                    <h2 className="uppercase font-semibold">Shoppy</h2>
                    <div className="flex justify-start">
                        <p className="flex justify-start text-left text-sm">Specializes in providing high-quality,stylish products for your wardrobe</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="uppercase font-semibold">shop</h2>
                    <div className="grid  gap-4">
                        <Link to="/" className="">All Collections</Link>
                        <Link to="/Women" className="">Women</Link>
                        <Link to="/Men" className="">Men</Link>
                        <Link to="/electronics" className="">Electronics</Link>
                        <Link to="/Jewelery" className="">Jewelery</Link>
                    </div>
                </div>
                <div className="">
                    <h2 className="uppercase font-semibold">Company</h2>
                    <div className="grid  gap-4">
                        <Link to="/Comingsoon" className="">About Us</Link>
                        <Link to="/Comingsoon" className="">Contact</Link>
                        <Link to="/Comingsoon" className="">Affiliates</Link>
                    </div>
                </div>
                <div className="">
                    <h2 className="uppercase font-semibold">support</h2>
                    <div className="grid  gap-4">
                        <Link to="/Comingsoon" className="">FAQs</Link>
                        <Link to="/Comingsoon" className="">Cookies Policy</Link>
                        <Link to="/Comingsoon" className="">Terms of Use</Link>
                    </div>
                </div>
                <div className="">
                    <h2 className="uppercase font-semibold">Payment</h2>
                    <div className="grid">
                       payment Channels
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;