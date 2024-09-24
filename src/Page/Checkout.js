import Check from "../component/Check/Check";

const Checkout = ({total}) => {
    return ( 
        <div className="">
            <Check total ={total}/>
        </div>
     );
}
 
export default Checkout;