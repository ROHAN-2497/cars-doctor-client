import { FaArrowRight} from 'react-icons/fa';
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-3xl font-bold mb-5">{title}</h2>
        <div className="card-actions items-center w-full h-full">
        <p className="text-2xl font-bold text-orange-500">Price :${price}</p>

          <button className="text-orange-500"><FaArrowRight></FaArrowRight></button>
        </div>
      </div>
        
    </div>
  );
};

export default ServiceCard;
