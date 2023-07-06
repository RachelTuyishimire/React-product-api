// import logo from './logo.svg';
// import './App.css';
// import {Routes, Route} from 'react-router-dom'
// import Products from './Shop';
// import ProductDetail from './Shop/productsdetails';
// import AddProduct from './Shop/addproduct';

// function App() {
//   return (
  
//        <div>
//         <Products/>
    
        
        
      
//     </div>

   
   
//   );
// }

// export default App;
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import AddProduct from './components/AddProduct'

export default function App() {
  return (
    <main>
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/addProduct' element ={<AddProduct/>}/>
      </Routes>
    </main>
  )
}

