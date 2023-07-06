import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
    const {id} = useParams()

    const [products, setProducts] = useState([])

    const getProducts = async() =>{
        const response = await fetch (`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        setProducts(data)
    }
    useEffect(()=>{
        getProducts()
    }, [])

    return (
        <div>
            <h1>Product name: {products.title}</h1>
        
        <p>{products.description}</p>
        <span>{products.price}</span>
        </div>

    )
}

export default ProductDetail