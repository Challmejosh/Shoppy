import { useState } from "react";
import { Link } from "react-router-dom";

const Check = ({total}) => {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [cvv,setCvv] = useState("");
    const country = ["Nigeria","Usa","Uk","Canada"]

    return ( 
        <div className="w-full sm:w-[500px] md:w-[500px] m-auto">
                <h2 className="font-semibold text-2xl">Enter Payment Detail</h2>
            <form action="" className=" rounded-3xl  shadow m-auto p-3 grid gap-3">
                <div className="grid gap-3">
                    <div className="grid">
                        <label htmlFor="email" className="flex justify-start">Email</label>
                        <input type="email" name="" id="email" className="form w-full m-auto rounded-sm bg-gray-200 pl-5" placeholder="support@ourmedia.com"/>
                    </div> 

                    <div className="grid">
                        <div className="grid">
                            <label htmlFor="cardInfo" className="flex justify-start">Card Information</label>
                            <input type="numeric" name="" id="cardInfo" className="form w-full m-auto rounded-sm bg-gray-200 pl-5" placeholder="**** **** 1234 1234"/>
                        </div>
                        <div className="mt-3 flex">
                            <input t className="form w-1/2 mr-3 m-auto pl-5 rounded-sm bg-gray-200" type="date" name="" id="" placeholder="09/28" />
                            <input t className="form w-1/2 m-auto rounded-sm pl-5 bg-gray-200" type="password" name="" id="" placeholder="123" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <div className="grid">
                            <label htmlFor="name"  className="flex justify-start">Cardholder Name</label>
                            <input type="text" name="" id="name" className="form w-full m-auto rounded-sm bg-gray-200" />
                        </div>
                        <div className="mt-3"> 
                            <label htmlFor="country" className="flex justify-start">Billing address</label>
                            <div className="border-8 border-collapse m-auto w-full  grid ">
                                <select name="" id="country" className=" w-full pl-5 ">
                                    {country.map(item => (
                                    <option key={item} value="">{item}</option>
                                    ))}
                                </select>
                                <input type="text" name="" id="" className=" w-full pl-5 border-t-4" placeholder="Address" />                        
                            </div>
                            <Link to="/AddressManual" className="text-[blue] underline flex justify-start">Enter Address Manually</Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <p>Amount</p>
                            <p className="">{total}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Fee</p>
                            <p>{Math.round(total * 5 / 100).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Discount</p>
                            <p>{Math.round(total * 0.2 / 100).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Total</p>
                            <p>{Math.round(total + total * 5 / 100 - total * 0.2 /100).toFixed(2)}</p>

                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" className="flex aligns-start w-5" />
                            <div className="grid justify-start aligns-center text-sm">
                                <p className="font-semibold text-left">Securely save my information for 1-click checkout</p>
                                <p className="text-left">Pay faster on Shoppy ltd. and everywhere link is accepted</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input type="submit" value="Make payment" className="border-8 w-full rounded-sm bg-gray-200 pl-3 pr-5"/>
                        </div>
                    </div>
                </div>
                
            </form>
            {name}{cvv}

        </div>
     );
}
 
export default Check;
