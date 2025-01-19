const ProductItemShimmer = () => {
  return (
    <div className="w-72 lg:w-64 h-[380px] border rounded-lg overflow-hidden shadow-lg relative hover:scale-105 cursor-pointer transition-all ease-in-out">
      <div className="w-full h-40 object-cover bg-[#ccc]" />
      <div className="my-2 px-2">
        <p className="font-semibold text-xl bg-[#ccc] w-full h-4"></p>
        <p className="mt-2 w-full h-4 bg-[#ccc]"></p>
      </div>
      <div className="w-full flex justify-between items-center mt-2 px-2 absolute bottom-12">
        <p className="font-medium text-lg bg-[#ccc] w-16 h-4"></p>
        <p className="bg-[#ccc] w-24 h-4"></p>
      </div>
      <div className="bg-[#ccc] w-full py-2 absolute bottom-0"></div>
    </div>
  );
};

export default ProductItemShimmer;
