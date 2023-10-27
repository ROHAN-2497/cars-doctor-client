import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen  mb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative ml-[100px] ml-[65px] ">
          <img src={person} className="w-3/4 h-[473px] rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 top-1/2 right-5 h-[332px] border-8 border-white absolute  rounded-lg shadow-2xl"
          />
        </div>{" "}
        <div className="w-1/2 p-5 space-y-5">
          <h1 className="text-2xl font-bold text-orange-500">About Us</h1>
          <h1 className="text-4xl font-bold ">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
          <button className="btn btn-warning text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
