import React from 'react'
import {FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const {cart}=useSelector((state)=>state)
  return (
    <div>
        <div className='flex justify-between items-center h-20 max-w-4xl mx-auto'>
            <NavLink to='/' className=' text-slate-100 text-[20px] '>Shopping-App</NavLink>
            <div className='flex items-center font-medium mr-4 space-x-5  text-slate-100' ><NavLink className='text-lg' to='/'>Home</NavLink>
                <NavLink to='/cart' className='relative'>
                  <FaShoppingCart className='text-2xl'/>
                  {cart.length>0 && <span className='absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full' >{ cart.length}</span>}
                  </NavLink> 
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
