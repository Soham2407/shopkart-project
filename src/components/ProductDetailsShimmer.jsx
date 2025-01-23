const ProductDetailsShimmer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 my-5 px-2">
      <div className="basis-1/2 flex flex-col-reverse">
        <div className="flex flex-wrap gap-4">
          <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-[#ccc]`} />
          <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-[#ccc]`} />
          <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-[#ccc]`} />
        </div>
        <div className="w-full flex justify-center mb-5">
          <div className="w-[10rem] h-[12rem] md:w-[14rem] md:h-[16rem] lg:w-[18rem] lg:h-[20rem] bg-[#ccc]" />
        </div>
      </div>
      <div className="basis-1/2">
        <p className="bg-[#ccc] w-10 h-4 mb-2"></p>
        <p className="bg-[#ccc] w-[400px] h-4 mb-2"></p>
        <p className="mb-2 w-28 h-4"></p>
        <div className="flex justify-between items-center mb-2">
          <p className="bg-[#ccc] w-10 h-4"></p>
          <div className="flex items-center">
            <div className="bg-[#ccc] w-5 h-4" />
            <span className="bg-[#ccc] w-5 h-4"></span>
          </div>
        </div>
        <hr className="my-5" />
        <div className="mb-2">
          <p className="mb-1 bg-[#ccc] w-8 h-4"></p>
          <p className="bg-[#ccc] w-[600px] h-4"></p>
        </div>
        <p className="mb-4">
          <span className="inline-block bg-[#ccc] w-8 h-4"></span>{" "}
          <span className="inline-block bg-[#ccc] ml-1 w-8 h-4"></span>
        </p>
        <button className="bg-[#ccc] w-full md:w-[250px] h-12 text-lg rounded-md cursor-pointer"></button>
      </div>
    </div>
  );
};

export default ProductDetailsShimmer;
