const ProductCard = ({ productname, price, description, onClick }) => {
  return (
    <div
      className="md:w-50 lg:w-60 2xl:w-70 h-120 lg:h-100 p-1 lg:p-3 bg-gray-300 flex flex-col justify-between rounded-[5px] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-30 lg:h-40 2xl:h-43 object-center object-contain bg-white rounded-[5px]">
        <img
          src="/images/products/Nikon-Camara-01.png"
          alt="first image of product from the image array"
          className=""
        />
      </div>

      <div className="w-full flex justify-between ">
        <p className="text-[14px] text-gray-600 xl:text-[15px]">Product Name</p>
        <p className=" text-[15px] font-medium text-end lg:font-semibold">
          {productname}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-gray-600 xl:text-[15px]">Price</p>
        <p className=" text-[15px] font-medium text-end lg:font-semibold">
          ${price}
        </p>
      </div>
      <div className="flex justify-between">
        <p>Description</p>
        <p className=" text-[15px] font-medium text-end lg:font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
