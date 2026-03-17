import './App.css';
import Profile from './present';
import LatteArt from './assets/art.png';
import Art from './assets/latteArt.png';
import latte from './assets/latte.png';
import Expresso from './assets/expresso.png';
import Product from './assets/product.png';
import Machin1 from './assets/machin1.png';
import Machin2 from './assets/machin2.png';
import Machin3 from './assets/machin3.png';
import React, { useEffect, useRef, useState } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
    const [cart, setCart] = useState([]);
    const products = [
      {id:1, name: 'Espresso Machine', price: 168}
    ]
    const addToCart = (product) => {
    setCart([...cart, product]);
  };
    const [isOpen, setIsOpen] = useState(false);
      const scrollRef = useRef(null);

      useEffect(() => {
        const interval = setInterval(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollLeft += 200;
          }
        }, 2000);
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

      const [isVisible, setIsVisible] = useState(false);

      const [CountNumber, setCountNumber] = useState(0)
      const handle = () => {
          setCountNumber(CountNumber + 1);
      }

      const [Total, setTotal] = useState(0);
      
      const Payment = () => {
        alert("Payment succcess!");
      }
      const [Detail, setDetail] = useState(false);
      
      const totalPrice = cart.reduce((total, products) => total + products.price, 0);
      return (
        
        <div className="App">
      <header
      >
        <nav 
        data-aos="zoom-in"
        className='flex justify-between items-center p-6 md:p-10 text-xl fixed top-0 left-0 w-full text-white backdrop-blur-xl z-[999]'>
          <div>
            <h1 className='text-3xl font-bold'>CHAFÉ</h1>
          </div>

          <ul className={`
            flex flex-col md:flex-row 
            absolute md:static 
            top-[80px] left-0 w-full md:w-auto 
            bg-black/90 md:bg-transparent 
            gap-10 md:gap-20 p-10 md:p-0
            transition-all duration-300 ease-in
            ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <li className='font-bold hover:text-orange-400 transition'><a href='#' onClick={() => setIsOpen(false)}>OUR STORY</a></li>
            <li className='font-bold hover:text-orange-400 transition'><a href='#section' onClick={() => setIsOpen(false)}>THE MENU</a></li>
            <li className='font-bold hover:text-orange-400 transition'><a href='#img' onClick={() => setIsOpen(false)}>GALLERY</a></li>
            <li className='font-bold hover:text-orange-400 transition'><a href='#footer' onClick={() => setIsOpen(false)}>VISIT US</a></li>
            <li className='font-bold hover:text-orange-400 transition'><a onClick={() => setIsVisible(!isVisible)}>CART ({CountNumber})</a></li>
          </ul>
            <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none text-3xl"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
            </div>
        </nav>
      </header>
      {isVisible ? (
        <div 
        className='fixed top-44/100 right-0 bg-white text-black z-99999999999'>
          <div className='w-100 p-2'>
            <div className='flex justify-between'>
              <h1>Your Cart</h1>
              <button onClick={() => setIsVisible(!isVisible)} className='text-xl'><i className='fa-solid fa-xmark'></i></button>
            </div>
            <hr className='text-gray-200'/>
            {cart.length === 0 ? (
      <div className='py-10 text-center text-gray-400'>
        <p>Empty Items.....</p>
      </div>
    ) : (
      <div className='max-h-60 overflow-y-auto mb-4'>
        {cart.map((products, index) => (
          <div key={index}>
            <div className='flex justify-between border-bottom py-2'>
            <h1 className='text-sm'> {products.name}</h1>
            <h1 className='text-sm font-bold'> ${products.price}</h1>
            </div>
          </div>
        ))}
      </div>
    )}
    <hr className='text-gray-200'/>
            <div className='text-start'>
              <h1>Total: <span className='text-red-700 text-xl'>${totalPrice}</span></h1>
            </div>
            <div>
              
              <button 
              className='bg-black text-white p-3 w-full rounded-xl'
              onClick={Payment}
              >Check Out</button>
            </div>
          </div>
          </div>
      ) : (
        <div></div>
      )}
      <main>
        <div>
          <Profile/>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center p-3 gap-8' data-aos="fade-down-right">
          <div id='Right' className='text-2xl md:w-1/2 p-4'>
            <h2 className='text-4xl md:text-6xl font-bold mb-4'>Sourced ethically, brewed with soul.</h2>
            <p className='text-lg text-gray-600'>At Chafé, we believe coffee is more than just a caffeine kick. It's a ritual, a moment of stillness in a busy world. We work directly with small-batch farmers in Ethiopia and Colombia to bring you beans that are roasted to perfection in-house every Tuesday.</p>

            <hr className='mt-5'/>
            <div className='flex gap-10 p-6 justify-center text-start'>
              <div>
                <h2>100%</h2>
                <p>Organic Arabica</p>
              </div>
              <div>
                <h2>Zero</h2>
                <p>Waste Initiatives</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[600px] mx-auto"
          data-aos='zoom-in'>
            <Swiper 
            slidesPerView={1}
            modules={[Navigation]}
            navigation={true}
            >
              <SwiperSlide>
                <img
                 src={LatteArt} 
                 className='w-full h-[400px] object-cover rounded-4xl transition hover:scale-105'
                 />
                </SwiperSlide>
              <SwiperSlide>
                <img 
                src={Art} 
                className='w-full h-[400px] object-cover rounded-4xl transition hover:scale-105'
                alt="Art"
              />
                </SwiperSlide>
              <SwiperSlide>
                <img 
                src={latte} 
                className='w-full h-[400px] object-cover rounded-4xl transition hover:scale-105' 
                />
                </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
          {Detail ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur text-white p-2">
            <div
            data-aos="fade-up-right"
            className="bg-zinc-900 p-10 rounded-3xl border border-white/20 text-center">
          <h1 className="text-white mb-4 text-3xl">Product Details</h1>
          <div className='flex p-3 flex-wrap'>
            <div>
            <img src={Machin2} className='w-120 object-cover rounded-2xl transition hover:scale-102'/>
            </div>
            <div className='p-3 flex flex-wrap gap-5 flex-col'>
              <div className='text-xl text-start'>
              <h1>Price: <span className='text-red-600'>$168</span></h1>
            </div>
              <div className='flex flex-col text-start'>
            <h1 className='text-xl'>Lavender Honey Latte</h1>
            <p>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <ul className='flex flex-start gap-5 flex-wrap'>
              <li
              className='flex justify-center items-center gap-3 text-xm'
              ><i className='fa-solid fa-leaf'
              style={{
                // backgroundColor: 'white',
                backgroundColor: 'rgba(128, 255, 74, 0.49)',
                fontSize: '3em',
                padding: '3px',
                borderRadius: '10px',
                color: 'white',
                border: '0.01px solid white'
              }}
              ></i>
               <p>Wildflower Honey</p>
               </li>
              <li className='flex justify-center items-center gap-3 text-xm'><i className="fa-solid fa-droplet"
              style={{
                // backgroundColor: 'white',
                backgroundColor: 'rgba(74, 234, 255, 0.74)',
                fontSize: '3em',
                padding: '3px',
                borderRadius: '10px',
                color: 'white',
                border: '0.01px solid white'
              }}
              ></i> 
              <p>Organic Oat Milk</p></li>
              <li className='flex justify-center items-center gap-3 text-xm'><i className="fa-solid fa-mug-hot"
              style={{
                // backgroundColor: 'white',
                backgroundColor: 'rgba(255, 102, 0, 0.49)',
                fontSize: '3em',
                padding: '3px',
                borderRadius: '10px',
                color: 'white',
                border: '0.01px solid white'
              }}
              ></i>
               <p>Double Shot Ethiopia Roast</p></li>
            </ul>
            
            </div>
          </div>
          <button 
            onClick={() => setDetail(false)} 
            className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition w-full"
          >
            Close
          </button>
        </div>
      </div>
          ) : (
            <div>
              
            </div>
          )}
        <section 
        data-aos="fade-up"
        id='section'
        className='bg-black text-white'>
          <h1 className='text-6xl pt-5'>The Selection</h1>
          <p>Our signature offerings crafted by master baristas.</p>
          <div 
          className='flex justify-around p-5 text-start overflow-scroll'
          ref={scrollRef}>
            <div className='flex flex-col items-center  p-5'>
              <img src={Art} className='w-60 transition hover:scale-102'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <div className='flex flex-col items-center p-5'>
              <img src={Expresso} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Midnight Cold Brew</h1>
              <p className='text-gray-300 w-60'>18-hour steep, infused with Madagascar vanilla bean and topped with sea-salt cream foam.</p>
            </div>
            <div className='flex flex-col items-center p-5'>
              <img src={Product} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Artisan Flat White</h1>
              <p className='text-gray-300 w-60 '>Double ristretto shot with micro-foam, featuring our seasonal 'Sun-Kissed' bean blend.</p>
            </div>
            <div className='flex flex-col items-center  p-5'>
              <img src={Expresso} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <div className='flex flex-col items-center  p-5'>
              <img src={Product} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <div className='flex flex-col items-center  p-5'>
              <img src={Expresso} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <div className='flex flex-col items-center  p-5'>
              <img src={Art} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <div className='flex flex-col items-center  p-5'>
              <img src={Expresso} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <div className='flex flex-col items-center  p-5'>
              <img src={Product} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
            <div className='flex flex-col items-center  p-5'>
              <img src={Expresso} className='w-60 transition hover:scale-102 rounded-2xl'/>
              <h1 className='text-xl'>Lavender Honey Latte</h1>
              <p className='text-gray-300 w-60'>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
            </div>
          </div>
          
          <div data-aos="fade-up" className='flex flex-wrap justify-center'>
              
              <div className='flex flex-col w-104 p-3'>
                <div>
                  <img src={Machin2} className='w-120 object-cover rounded-2xl transition hover:scale-102'/>
                </div>
                <div className='text-start text-xl'>
                  <h1>Lavender Honey Latte</h1>
                  <p>Espresso, steamed oat milk, house-made lavender syrup, and a drizzle of local wildflower honey.</p>
                </div>
                <div className='flex w-full text-xl gap-3'>
                <button 
                onClick={() => {
                handle(); 
                addToCart(products[0]);
              }}
                className='bg-white text-black rounded-xl p-5 w-50'>Add to Cart</button>
                <button 
                onClick={() => setDetail(true)}
                className='border-1 border-white hover:bg-white hover:text-black transition rounded-xl p-5 w-50'>Detail</button>
                </div>
              </div>
          </div>
        </section>
        <section id='img' data-aos="fade-up">
          <div>
            <div id='txt' className='flex justify-between p-5 flex-wrap'>
              <h1 className='text-4xl'>Your Third Place</h1>
              <p className='text-2xl w-20/50 text-gray-500'>Warm woods, soft jazz, and the aroma of fresh roasting. Designed for work, connection, or quiet reflection.</p>
            </div>
            <div className='flex gap-5 justify-evenly bg-cover bg-center p-5 flex-wrap'>
              <img src={Expresso} className='w-60 object-cover rounded-2xl transition hover:scale-102'/>
              <img src={latte} className='w-60 object-cover rounded-2xl transition hover:scale-102'/>
              <img src={Product} className='w-60 object-cover rounded-2xl transition hover:scale-102'/>
              <img src={Expresso} className='w-60 object-cover rounded-2xl transition hover:scale-102'/>
            </div>
          </div>
        </section>
      </main>
      <footer id='footer' data-aos="fade-up">
        <div className='flex justify-evenly text-start p-4 border-t-1 bg-gray-100 gap-10 flex-wrap'>

          <div className='flex flex-col'>
            <h1 className='text-3xl'>CHAFÉ</h1>
            <p className='w-70 text-xl'>Crafting experiences, one cup at a time. Visit us for the coffee, stay for the community.</p>
            <ul className='flex'>
              <li><a 
              href='https://www.facebook.com/share/18aLg4n21M/?mibextid=wwXIfr'
              target="_blank" 
              rel="noopener noreferrer"
              ><i className='fa-brands fa-facebook'></i></a></li>
              <li><a 
              target="_blank" 
              rel="noopener noreferrer"
              href='https://www.tiktok.com/@chafe_watbo'><i className='fa-brands fa-tiktok'></i></a></li>
            </ul>
          </div>

          <div>
            <h1 className='text-3xl'>Location & Hours</h1>
            <p className='w-70 text-xl'>Wat Bo Rd, & Street 25, Krong Siem Reap</p>
            <br></br>
            <h1>open:</h1>
            <h1>6AM - 10PM</h1>
          </div>
          <div>

            <h1 className='text-3xl'>Contact</h1>
            <p className='w-70 text-xl'>+85587662285</p>
            <button className='bg-black text-white p-2 rounded-xl'><a href='https://maps.app.goo.gl/cYZV6guH8DTJ1kVp8'
            target="_blank" 
            rel="noopener noreferrer"
            title='Chafé watbo'
             >Get Directions</a></button>
          </div>

        </div>
        <div>
          <p className='p-4 text-gray-500 text-xl'>&copy; 2026 Chafé-Cambodia. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
} 

export default App;