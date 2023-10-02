
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Cart from './page/Cart';
function App() {
  return (
       <div>
        <div className='bg-slate-900'>
        <Navbar></Navbar>
        </div>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>       
  
       </div>
  );
}

export default App;
