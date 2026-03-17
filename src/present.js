import BG from "./assets/bgs.png";
import './present.css';
import './App';
import AOS from "aos";
import "aos/dist/aos.css";
const Present = () => {
  return (
    <div
      className="bg-cover bg-center h-200 text-3xl flex flex-col justify-center "
      style={{ backgroundImage: `url(${BG})`, backgroundColor: `black`}}
      data-aos="fade-down"
    >
      <p className="text-gray-200">SR. 2026 - Watbo</p>
      <h1 className="text-8xl text-white">Where Every Bean Tells a Story</h1>

      <div className="p-4 flex justify-center gap-10">
        <button className="bg-white p-5 rounded-full text-xl"><a href="#section">ViewMenu Highlight</a></button>
        <button className="border-1 text-white p-5 rounded-full hover:bg-white hover:text-black transition hover:border-gray-100 text-xl"><a href="#footer">Book a Table</a></button>
      </div>
    </div>
  );
};

export default Present;