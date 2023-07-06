import React, {useState, useEffect} from "react";
import './style.css'


const Products = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        (async()=>{
    await getProducts();
}) ()
    }, [])

    const getProducts = async () =>{
        try{
            setLoading(true);
            const response = await fetch ('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    };
    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div>
            <div className="product">
            <h1 className="title">All Products</h1>
            {products.map(item=>(

                <div key={item.id}>
                    <img src={item.images[2]}/>
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}%</p>
                </div>
                    
 
                   
                    

           )) }

         </div>   
        </div>
    );
};
export default Products
