import { Link } from "react-router-dom";

const Navbar = ({cartQuantity}) => {
    const nav = document.querySelector("#nav");

    const hamburger = () => {
        if(nav.classList.contains('hidden')){
            nav.classList.remove('hidden');
        }else{
            nav.classList.add('hidden')
        }
    }
    return ( 
        <div className="flex justify-evenly items-center align-center">
            <div className="flex justify-start w-full aligns-center items-center gap-3 ">
                <img src="./NavPix/IMG-20240915-WA0039.jpg" className="w-10 h-10 rounded-full ml-2 mt-2 flex align-center justify-center" alt="" />
                <h1 className="italic font-bold text-center text-xl">Shoppy</h1>
            </div>

            <nav className="absolute top-14 right-0 sm:relative justify-center sm:items-center sm:aligns-center hidden sm:block" id="nav">
                <ul className="sm:flex gap-5 sm:justify-center sm:aligns-center items-center relative bottom-6 sm:bottom-12">
                    <Link to="/" className="p-2 cursor-pointer text-center flex items-center">
                        <img className="sm:hidden block w-6 " src="./NavPix/icons8-home-24.png" alt="" />
                        <p className="link">Home</p>
                    </Link>
                    <Link to="/Comingsoon" className="p-2 cursor-pointer text-center flex items-center">
                        <img className="sm:hidden block w-6" src="./NavPix/icons8-search-26.png" alt="" />
                        <p className="link" >Explore</p>
                    </Link>
                    <Link to="/Comingsoon" className="p-2 cursor-pointer text-center flex items-center">
                        <img className="sm:hidden block w-6" src="./NavPix/icons8-notification-32.png" alt="" />
                        <p className="link">Notification</p>
                    </Link>
                    <Link to="/Comingsoon" className="p-2 cursor-pointer text-center flex items-center">
                        <img className="sm:hidden block w-6" src="./NavPix/icons8-administrator-male-24.png" alt="" />
                        <p className="link">Profile</p>
                    </Link>
                </ul>
            </nav>

            <div className="flex justify-end w-full gap-3 aligns-center p-2 mr-2 mt-2 items-center">
                <Link to="/Cart" className="aligns-center relative">
                    <img src="./NavPix/icons8-cart-32.png" className="w-8" alt="" />
                    <p className="bg-[red] w-4 text-sm  rounded-full absolute top-0 right-0">{cartQuantity}</p>
                </Link>
                <div className=" flex cursor-pointer sm:hidden" id="hamburger" onClick={hamburger}>
                <img src="./NavPix/icons8-menu-30.png" className="w-8" alt="" />
                    
                </div>
               <div className="bg-gray-400 p-3 hidden sm:block rounded-full aligns-center justify-center">
                <img src="./NavPix/icons8-administrator-male-24.png" alt="" />
               </div>
            </div>
        </div>
     );
}
 
export default Navbar;