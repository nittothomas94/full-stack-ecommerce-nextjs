'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from '../../../../../utils/axios';
import Button from '@/app/components/common/Button';

const ProductByID = () => {
  const [product, setProduct] = useState([
    {
      id: '101',
      name: 'Canon EOS R50 Mirrorless Camera',
      price: 63999,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur atque consequatur iure dolor excepturi dicta, fugit quia alias nobis! Nesciunt beatae dolores tempora hic tempore animi, obcaecati iure excepturi eos?',
      category: 'Camera',
      images: [
        '/images/products/Nikon-Camara-01.png',
        '/images/products/Nikon-Camara-01.png',
        '/images/products/Nikon-Camara-01.png',
        '/images/products/Nikon-Camara-01.png',
        '/images/products/Nikon-Camara-01.png',
        '/images/products/Nikon-Camara-01.png',
      ],
    },
  ]);
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  // console.log(id);

  // useEffect(() => {
  //   getProductById();
  // }, []);

  // const getProductById = async () => {
  //   const response = await axios.getById(
  //     'https://ecomdummy.onrender.com/api/product/' + id
  //   );
  //   setProduct(response.data);
  // };

  const handleEditClick = id => {
    router.push('/admin/product/editproduct/' + id);
  };

  const handleDeleteClick = async id => {
    await axios.delete();
  };
  return (
    <main className="w-full min-h-screen">
      {product.map(item => {
        console.log(item.images);
        return (
          <div className="w-full min-h-screen flex flex-col gap-5 p-2">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-[28px] font-Poppins font-bold">
                Product Details
              </h1>
              <div className="flex gap-3">
                <Button
                  className="bg-blue-800 text-white px-2 flex items-center gap-2 rounded-[5px] hover:bg-blue-950 cursor-pointer"
                  onClick={() => handleEditClick(item.id)}
                >
                  Edit
                  <i className="material-icons">edit_square</i>
                </Button>
                <Button
                  className="bg-blue-800 text-white px-3 py-2 flex items-center gap-1 rounded-[5px] hover:bg-blue-950 cursor-pointer"
                  onClick={() => {
                    handleDeleteClick(item.id);
                  }}
                >
                  Delete
                  <i className="material-icons">delete</i>
                </Button>
              </div>
            </div>

            {/* product id section */}

            <p className="w-full h-12 bg-gray-300 flex items-center font-bold text-[18px] rounded-[5px] pl-2">
              Product Id : {id}
            </p>

            {/* images */}

            <div className="w-full min-h-30 flex gap-3 px-2 overflow-auto">
              {product[0].images.map(
                (
                  imgUrl,
                  index //product[0].images gives you the images array inside the product object.
                ) => (
                  <div className="px-2 py-3 bg-gray-300 rounded-[5px] hover:shadow-xl/30 hover:scale-105">
                    <div
                      key={index}
                      className="w-35 h-35 flex items-center justify-center bg-white rounded-[5px]"
                    >
                      <img
                        src={imgUrl}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-center object-contain"
                      />
                    </div>
                  </div>
                )
              )}
            </div>

            {/* product details */}
            <div className="w-full min-h-90 xl:min-h-20 lg:w-[80%]  px-1 flex flex-col gap-5 mt-3">
              <div className="flex items-center justify-between mt-4">
                <h1 className="w-2/5 font-bold">Product Name</h1>
                <p className="w-3/5 text-gray-700">{item.name}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <h1 className="w-2/5 font-bold">Price</h1>
                <p className="w-3/5 text-gray-700">{item.price}</p>
              </div>
              <div className="flex  items-center justify-between">
                <h1 className="w-2/5 font-bold">Description</h1>
                <p className="w-3/5 text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ProductByID;
