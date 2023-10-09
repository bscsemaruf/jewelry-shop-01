/** @format */

import bannerImg from "../../../assets/banner/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="object-fill w-full h-[70vh] bg-center bg-auto"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
      >
        <div className="flex justify-center items-center h-full ">
          <div className="text-5xl font-extrabold w-2/4  h-1/5 flex  justify-center items-center">
            <h1 className=" bg-clip-text   text-transparent bg-gradient-to-r from-black to-white">
              Ethical Handmade Jewelry <br />
              <span className="uppercase text-2xl text-white">
                from ancient to modern day
              </span>
              <br />
              <span>
                <button className="btn btn-outline text-white bg-amber-900">
                  Shop Now ---
                </button>
              </span>
            </h1>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
