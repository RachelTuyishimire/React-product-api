import { useParams, Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

const ProductDetail =()=> {
  const {id} = useParams()

  const [product, setProduct] = useState([])

  const getProducts = async() => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
  
    setProduct(data)
   
  
  }

  useEffect(()=> {
    getProducts()
  }, [])
  
  return(
    <>
    <h1>
      Product name:  {product.title} 🛍️👝
    </h1>
      <div>
        {/* <img src={product.images[0]} /> */}
        <p>
          {product.description}
        </p>
        <span>{product.price}</span>
      </div>
      
      <Link to="/">
        <button>
          go back
        </button>  
      </Link>
    </>
  )
}

export default ProductDetail