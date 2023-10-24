import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="mt-20 mb-[70px]">
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center left-0 h-full top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white ml-[100px] space-y-7 pl-12 w-1/2">
              <h1 className="text-6xl font-bold ">
                Affordable
                <br /> Price For Car Servicing
              </h1>
              <p className="mb-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>

              <div>
                <button className="btn btn-warning text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide6" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center left-0 h-full top-0 bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0.00) 100%)]">
            <div className="text-white space-y-7 w-1/2 pl-12 ml-[100px]">
              <h1 className="text-6xl text-white font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center top-0 h-full bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0.00)] ">
            <div className="text-white space-y-7 w-1/2 pl-12 ml-[100px]">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                here are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center top-0 h-full bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0.00)] ">
            <div className="text-white space-y-7 w-1/2 pl-12 ml-[100px]">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                here are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner5} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center top-0 h-full bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0.00)] ">
            <div className="text-white space-y-7 w-1/2 pl-12 ml-[100px]">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                here are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner6} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center top-0 h-full bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0.00)] ">
            <div className="text-white space-y-7 w-1/2 pl-12 ml-[100px]">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                here are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
