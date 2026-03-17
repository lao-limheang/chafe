import Profile from './assets/pf.png';
import Shap from './assets/bg.png';
import Logo from './assets/logo.png';

const About = () => {
    return ( 
        <div className='bg-black'>
            <h2 className="text-5xl p-4 text-white">
                About Us
            <hr className='text-white w-25 md:absolute lg:right-130 md:right-130'/>
            </h2>
            <p className='text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, enim.</p>
            <main>
        <div id='contentAbout' className='flex items-center justify-evenly text-white text-2xl p-10 flex-wrap-reverse' >
        <div id='textAbout' className='w-120'>
            <h2>
                Lao Limheang
            </h2>
        <p>
            <i class="fa-solid fa-quote-right"></i><br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, enim.</p>
            <i class="fa-solid fa-quote-right"></i>
        <ul className='flex justify-center gap-3 p-3'>
            <li className='text-black rounded-full'>
                <a>
                    <i className="fa-brands fa-telegram text-blue-600"></i>
                    
                </a>
            </li>
            <li className=''> 
                <a>
                    <i className="fa-brands fa-facebook text-blue-600"></i>
                    
                </a>
            </li>
        </ul>
        </div>
        <div>
            <img src={Logo} className='w-60 '/>
        </div>

        </div>

            </main>
        </div>
     );
}
 
export default About;