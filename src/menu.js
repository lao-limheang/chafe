import Cafe from './assets/coffee.jpg';
import milkTea from './assets/milktea.jpg';
import './navbar';
import './footer';
import myDrink from './json/drink.json';
import { useState } from 'react';
const Menu = () => {
    const handleAdd = () => {
        const cartElement = document.getElementById("cartNumber");
        if (cartElement) {
            let currentCount = parseInt(cartElement.innerText) || 0;
            cartElement.innerText = currentCount + 1;
        }
    };

    const [activeTab, setActiveTab] = useState('All');
    const activeStyle = { color: 'red', fontWeight: 'bold', cursor: 'pointer' };
  const normalStyle = { color: 'black', cursor: 'pointer' };
    return ( 
        <div>
            
            <h1 className="text-5xl">Menu</h1>

            <div className="p-10">
                <ul className="flex text-2xl gap-5 cursor-pointer transition">
                    <li className="border-gray-500/50 p-4 rounded-4xl border-1 transition hover:bg-[#A52A2A] hover:text-white inactive-style" onClick={() => setActiveTab('Coffee')} style={activeTab === 'Coffee' ? activeStyle : normalStyle}>
                        <a>
                            Coffee
                        </a>
                    </li>
                    <li className="border-gray-500/50 p-4 rounded-4xl border-1 transition hover:bg-[#A52A2A] hover:text-white inactive-style" onClick={() => setActiveTab('Milk')} style={activeTab === 'Milk' ? activeStyle : normalStyle}>
                        <a>
                            Milk Tea
                        </a>
                    </li>
                </ul>
            </div>
            <div id="Items">
                <ul className='flex p-10 gap-9 '>
                    {activeTab === 'Coffee' && <li id='Coffee' className='border-2 rounded-xl overflow-hidden'>
                        <p className='absolute border-2 p-1 m-2 rounded-full w-20 bg-[#A52A2A] text-white z-9999'>Coffee</p>
                        <a>
                        <img src={Cafe} className='w-60 rounded-xl hover:scale-120 transition'/>
                        </a>
                        <span className='flex justify-between p-2 text-xl'>
                            <h2>Palm coffee</h2>
                            <h2 className='font-bold text-red-800'>1.75$</h2>
                        </span>
                        <button 
                        className='bg-gray-200 w-full rounded-b-xl h-15 text-xl'
                        onClick={handleAdd}
                        >+ Add to Cart</button>
                    </li>}
                    {activeTab === 'Milk' && <li id='Milk Tea' className='border-2 rounded-xl overflow-hidden'>
                        <p className='absolute border-2 p-1 m-2 rounded-full w-20 bg-[#DCBC93] text-white z-999'>Milk Tea</p>
                        <a>
                        <img src={milkTea} className='w-60 rounded-xl hover:scale-120 transition'/>
                        </a>
                        <span className='flex justify-between p-2 text-xl'>
                            <h2>Super Milk tea</h2>
                            <h2 className='font-bold text-red-800'>1.75$</h2>
                        </span>
                        <button 
                        className='bg-gray-200 w-full rounded-b-xl h-15 text-xl'
                        onClick={handleAdd}
                        >+ Add to Cart</button>
                    </li>}
                    {activeTab === 'Coffee' && <li id='Coffee' className='border-2 rounded-xl overflow-hidden'>
                        <p className='absolute border-2 p-1 m-2 rounded-full w-20 bg-[#A52A2A] text-white z-9999'>Coffee</p>
                        <a>
                        <img src={Cafe} className='w-60 rounded-xl hover:scale-120 transition'/>
                        </a>
                        <span className='flex justify-between p-2 text-xl'>
                            <h2>{myDrink.name}</h2>
                            <h2 className='font-bold text-red-800'>{myDrink.Price}$</h2>
                        </span>
                    <button 
                        className='bg-gray-200 w-full rounded-b-xl h-15 text-xl'
                        onClick={handleAdd}
                        >+ Add to Cart</button>
                    </li>}
                </ul>
            </div>
        </div>
     );
}
 
export default Menu;