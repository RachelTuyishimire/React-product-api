import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Products from './Shop';
import ProductDetail from './Shop/productsdetails';
import AddProduct from './Shop/addproduct';

function App() {
  return (
    <main>
       <div>
        <Routes>
        <Route path = "/" exact element={<Products/>}/>
        <Route path = "/product/:id" exact element={<ProductDetail/>}/>
        <Route path = "/addProduct" exact element={<AddProduct/>}/>

        </Routes>
      
    </div>

    </main>
   
  );
}

export default App;
