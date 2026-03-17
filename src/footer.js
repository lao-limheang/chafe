import Logo from './assets/logo.png';
import Poster from './assets/poster.jpg';
const Footer = () => {
    return ( 
        <div className='bg-[#152238] text-gray-400 cursor-pointer'>
            <div id='logo' className='flex items-center justify-between p-2'>
                <ul className='flex justify-start text-2xl gap-5 p-3'>
                    <li>
                        <a>
                            <i className='fa-brands fa-facebook '></i>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className='fa-brands fa-instagram '></i>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className='fa-brands fa-github '></i>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className='fa-brands fa-youtube '></i>
                        </a>
                    </li>
                </ul>
                <div className='text-red-600 text-3xl bg-white rounded-full p-2' title='Up'>
                   <a href='#home'> <i className='fas fa-arrow-up'></i></a>
                </div>
            </div>

            <div id='menu' className='flex justify-between p-10 flex-col md:flex-row gap-3'>
                <div>
                    {/* title1 */}
                    <div>
                        <h2 className='text-xl font-bold text-white'>Solutions</h2>
                    </div>
                    <div>
                        <ul>
                            <li><a>Coffee</a></li>
                            <li><a>Milk Tea</a></li>
                            <li><a>Matcha</a></li>
                            <li><a>Fruit tea</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* title1 */}
                    <div>
                        <h2 className='text-xl font-bold text-white'>Support</h2>
                    </div>
                    <div>
                        <ul>
                            <li><a>Guides</a></li>
                            <li><a>Documentation</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* title1 */}
                    <div>
                        <h2 className='text-xl font-bold text-white'>Legal</h2>
                    </div>
                    <div>
                        <ul>
                            <li><a>Terms of service</a></li>
                            <li><a>Privacy policy</a></li>
                            <li><a>Center</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* title1 */}
                    <div>
                        <h2 className='text-xl font-bold text-white'>Company</h2>
                    </div>
                    <div>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Menu</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className='flex p-2'>
                <p>&copy; 2024 Chafé, Inc. All rights reserved.</p>
            </footer>
        </div>
     );
}
 
export default Footer;