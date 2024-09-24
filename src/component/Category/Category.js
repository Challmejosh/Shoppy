import { Link } from "react-router-dom";

const Category = ({product,like,love}) => {

   

    return ( 
        <div className="flex justify-start gap-3">
           <Link to="/Men" className="border p-2 rounded bg-transparent" >Men</Link>
           <Link to="/Women" className="border p-2 rounded bg-transparent" >Women</Link>
           <Link to="/Electronics" className="border p-2 rounded bg-transparent" >Electronics</Link>
           <Link to="/Jewelery" className="border p-2 rounded bg-transparent" >Jewelery</Link>
        </div>
     );
}
 
export default Category;