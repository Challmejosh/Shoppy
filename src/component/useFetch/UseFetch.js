import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [product, setProduct] = useState([]);
    const [confirm,setConfirm] = useState(false);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProduct(data)
            setConfirm(true)
        })
    },[url])
    return {product,confirm}
}
 
export default useFetch;