import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Project from './Project';
import Dashboard from './Dashboard';
import Accordion from './Accordion';
import Test from './Test';
import Product from './Product';
import Home from './Home'
import shoe from './assets/shoe.png'
import shoe1 from './assets/shoe1.jpg'
import shoe2 from './assets/shoe2.jpg'
import san from './assets/san.jpeg'
import san2 from './assets/san2.jpeg'
import san3 from './assets/san3.jpeg'

import Form from './Form';
import Counter from './Counter';
import Getdata from './Getdata';
import Dynamic from './Dynamic';
import Price from './Price';
function App() {
  
  
   
  return (
    <div className="App">
     
       {/* <Routes>
        <Route path='/product' element={<Product productObj={productObj}/>}/>
      </Routes>
       <Routes>
        <Route path='/productSANDAL' element={<Product productObj={productSANDAL}/>}/>
      </Routes>
        <Routes>
        <Route path='/Form' element={<Form />}/>
      </Routes> 
      <Link to='/'>Home</Link>
      <Link to='/product'>Product</Link>
      <Link to='./productSANDAL'>Sandals</Link>
      <Link to='./Form'>Login</Link>
      <Home /> 
      */}
      <Dynamic />
      
    </div>
  );
}

export default App;
