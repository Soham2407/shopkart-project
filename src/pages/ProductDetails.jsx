import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import ProductDetailsShimmer from "../components/ProductDetailsShimmer";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [showImage, setShowImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const getProduct = async () => {
    setIsLoading(true);
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setIsLoading(false);
    setShowImage(data.images[0]);
    setProduct(data);
  };

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id]);

  const handleImage = (image, index) => {
    setShowImage(image);
    setSelectedIndex(index);
  };

  return (
    <>
      <FaChevronLeft onClick={() => navigate("/")} />
      {isLoading ? (
        <ProductDetailsShimmer />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 my-5 px-2">
          <div className="basis-1/2 flex flex-col-reverse">
            <div className="flex flex-wrap gap-4">
              {product?.images?.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className={`w-20 h-20 lg:w-24 lg:h-24 border ${
                    selectedIndex === index
                      ? "border-4 border-blue-500"
                      : "border-gray-500"
                  } p-2  cursor-pointer`}
                  onClick={() => handleImage(image, index)}
                />
              ))}
            </div>
            <div className="w-full flex justify-center mb-5">
              <img
                src={showImage}
                alt={product?.title}
                className="w-[10rem] h-[12rem] md:w-[14rem] md:h-[16rem] lg:w-[18rem] lg:h-[20rem]"
              />
            </div>
          </div>

          <div className="basis-1/2">
            <p className="text-gray-500 text-lg mb-2">{product?.brand}</p>
            <p className="text-3xl font-bold mb-2">{product?.title}</p>
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-xl">{product?.price}</p>
              <div className="flex items-center">
                <FaStar />
                <span className="text-lg font-bold">
                  {parseFloat(product?.rating?.toFixed(1))}
                </span>
              </div>
            </div>
            <hr className="my-5" />
            <div className="mb-2">
              <p className="font-bold text-lg mb-1">Description:</p>
              <p className="text-gray-500">{product?.description}</p>
            </div>
            <p className="mb-4">
              <span className="text-lg font-bold">Stock:</span>{" "}
              <span className="text-gray-500 ml-1">{product?.stock}</span>
            </p>
            <button className="bg-blue-400 text-white w-full md:w-[250px] py-3 text-lg rounded-md cursor-pointer">
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
