import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './Login'
import Product from './Products';
import AddProduct from './AddProduct/addproduct';
import ProductDetails from './ProductDetails/productsdetails';

function App() {
  return (
  
       <div>
       <Router>
       <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/addProduct' element ={<AddProduct/>}/>
      </Routes>
       </Router>
    
        
        
      
    </div>

   
   
  );
}
export default App;



