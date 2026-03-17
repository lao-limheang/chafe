import Logo from './assets/logo.png';
import React, { useState } from 'react';
import './App';
import Cafe from './assets/coffee.jpg';
import myData from './json/drink.json';
import './main.css';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
    return ( 
        <div className="p-2 flex items-center justify-between text-2xl fixed top-0 w-full z-99999 backdrop-blur-md bg-black/50">
            {isCartOpen && (
        <div className="absolute bg-white top-0 right-0 p-4 w-80 shadow-lg z-999999 w-120 ">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button 
              onClick={toggleCart}
              className="text-red-600 font-bold"
            >
              X
            </button>
          </header>

          <hr className='p-2'/>

          <div className='border-1 flex rounded-xl justify-between'>
            <div id='LeftCart' className='flex p-3 gap-5 text-start'>
                <div>
                    <img src={Cafe} className='w-25 rounded-3xl'/>
                </div>
                <div>
                    <h3>{myData.name}</h3>
                    <h3>Price: {myData.Price}$</h3>
                </div>
            </div>
            <div id='rightCart' className='p-3 text-red-600'>
                <i className='fas fa-trash'></i>
            </div>
          </div>

          <p className="mt-5 hidden" id='empty'>Your cart is empty</p>
                <div className='text-start'>
                    <h3>
                        Total qty: <span className='text-red-500 font-bold'>1</span>
                    </h3>
                    <h3>
                        Total Price: <span className='text-red-500 font-bold'>{myData.Price}$</span>
                    </h3>
                </div>
          <button className="bg-black text-white p-2 w-full rounded-xl mt-4">
            Check Out
          </button>
        </div>
      )}
            <div>
                <img src={Logo} className='w-20 p-1 hover:scale-110 transition '/>
            </div>
            <ul className="flex gap-7 text-2xl text-white ">
                <li><a href="/" className='text-[#A52A2A] font-bold'>Home</a></li>
                <li><a href="./" className='font-bold hover:text-[#A52A2A] transition'>Menu</a></li>
                <li><a href="/" className='font-bold hover:text-[#A52A2A] transition'>About Us</a></li>
                <li><a href="/" className='font-bold hover:text-[#A52A2A] transition'>Contact Us</a></li>
                <li><a href="/" className='font-bold hover:text-[#A52A2A] transition'>Visits</a></li>
            </ul>
            <div>
                <ul className='text-white font-bold transition'>
                <li 
                className='border p-2 rounded-full hover:text-[#A52A2A] hover:border-[#A52A2A] transition-colors'
                onClick={toggleCart}
                >
                    <a 
                    href="#" 
                    className="block"
                    
                    >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                    </svg>
                    </a>
                    <p className='absolute right-10 top-13 text-red-700 rounded-full text-xl' id='cartNumber'>1</p>
                </li>
                </ul>
            </div>
        </div>
     );

}
 
export default Navbar;
