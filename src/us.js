const Visit = () => {
  const userName = document.getElementById('username');
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <div id="contacts" className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Visit Here</h2>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label>Username</label>
            <input id="username" className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label>Subjects</label>
            <input id="subjects" className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label>Message</label>
            <textarea id="message" className="border p-2 rounded" />
          </div>
          
          <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded" onClick={ () => alert(`Thank You!!`)}>
            Send
          </button>
        </form>
      </div>

      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.790537288468!2d103.86233050000001!3d13.3632967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311017006c1414f7%3A0x2896caa5d2d6fe28!2sChaf%C3%A9%20Cambodia!5e0!3m2!1sen!2skh!4v1772196218457!5m2!1sen!2skh"
          width="100%"
          height="350"
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"  
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Visit;