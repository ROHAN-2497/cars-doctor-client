import { FaPhoneAlt, FaRegCalendar, FaSearchLocation } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="bg-black  h-[250px] rounded-lg w-5/6 mb-20 mx-auto items-center justify-around flex ">
        <div>
          <FaRegCalendar className="text-orange-600 mt-3 bg-white rounded-full border w-10 h-10 mr-4 ml-10"></FaRegCalendar>
        </div>
        <div className="">
          <p className="text-white">We are open monday-friday</p>
          <h2 className="text-3xl font-bold text-white">7:00 am - 9:00 pm</h2>
        </div>
        <div>
          <FaPhoneAlt className="text-orange-600 mt-3 bg-white rounded-full border w-10 h-10 mr-4 ml-10"></FaPhoneAlt>
        </div>
        <div className="">
          <p className="text-white">Have a question?</p>
          <h2 className="text-3xl font-bold text-white">+2546 251 2658</h2>
        </div>
        <div>
          <FaSearchLocation className="text-orange-600 mt-3 bg-white rounded-full border w-10 h-10 mr-4 ml-10"></FaSearchLocation>
        </div>
        <div className="">
          <p className="text-white">Need a repair? our address</p>
          <h2 className="text-3xl font-bold text-white">
            Liza Street, New York
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
