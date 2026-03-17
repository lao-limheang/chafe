import Banner from './assets/banner.jpg';
import Poster from './assets/poster.jpg';
import './main.css';
import './menu';
import { ArrowLongRightIcon } from './assets/icon/arrow';
const Header = () => {
    return ( 
        <div>
            <div className="bg-cover bg-center h-220 w-full text-center items-center justify-center flex flex-col" 
                style={{ backgroundImage: `url(${Banner})` }}>
                    <div className='flex flex-wrap items-center justify-center flex-col'>
                        <h1 className='pt-40 text-7xl'>Welcome to <span className='bg-white p-1'>Chafé</span></h1>
                        <p className=' text-white pt-5 md:text-xl'>
                            Whether you are a lover of bold coffee or the creamy sweetness of milk tea, we have something for everyone. We combine the art of brewing with the creativity of tea to craft the perfect drink.
                        </p>
                    </div>
                    <div>
                        <ul className='flex items-center justify-center gap-5 p-2 m-10 flex-wrap'>
                            <li className='bg-[#DCBC93] p-4 rounded-full w-70 text-white text-bold hover:translate-x-3 transition'>
                                <a href="#Items" className="flex items-center gap-2 justify-center">
                            Explore menu
                            <svg 
                                data-slot="icon" 
                                fill="currentColor" 
                                viewBox="0 0 16 16" 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true"
                                className="w-6 h-6">
                                <path 
                                clipRule="evenodd" 
                                fillRule="evenodd" 
                                d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" 
                                />
                            </svg>
                            </a>
                            </li>
                            <li className='bg-white p-4 rounded-full w-70 text-black text-bold'>
                                <a src='/'>
                                Visits Us
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div className='flex items-center justify-evenly wrap flex-row p-10 mt-20 flex-wrap-reverse'>
                <div id='Left' className='text-xl w-150'>
                    <div>
                    <p className='absolute top-230 font-bold text-[#A52A2A]'>
                        The Philosophy
                    </p>
                    <h2>
                        Steeped in Tradition, Brewed with Passion.
                    </h2>
                    <p>
                        At Chafé, we don't choose sides. We believe the bright acidity of a Panama Geisha can coexist beautifully with the earthy depth of a Tieguanyin Oolong. Our space is designed as an "Organic Industrial" sanctuary—raw concrete meets lush greenery to create the perfect urban escape.
                    </p>
                    </div>
                    <div className='flex p-2 gap-2'>
                        <div className='border rounded-xl text-start p-5'>
                            <h2 className='font-bold text-[#A52A2A]'><i className='fas fa-leaf text-green-500'> </i> The Leaf</h2>
                            <p>Sourced from high-altitude estates, hand-rolled and carefully steeped.</p>
                        </div>
                        <div className='border rounded-xl text-start p-5'>
                            <h2 className='font-bold text-[#A52A2A]'><i className='fas fa-egg'></i> he Bean</h2>
                            <p>Ethically sourced single-origins, roasted to highlight unique terroirs.</p>
                        </div>
                    </div>
                </div>
                <div id='Right' className='overflow-hidden rounded-xl'>
                    <img src={Poster} className='w-80 rounded-xl transition hover:scale-105' />
                </div>
            </div>
        </div>
     );
}
export default Header;