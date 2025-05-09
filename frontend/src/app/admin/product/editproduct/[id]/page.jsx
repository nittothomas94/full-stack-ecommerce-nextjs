// edit product Page by id from url

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from '../../../../../../utils/axios';
import Button from '@/app/components/common/Button';
import Input from '@/app/components/common/Input';
import UploadImage from '@/app/components/admin/Uploadimage';

import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from 'react-toastify';
import Modal from '../../../../components/common/Modal';

const EditProductpage = () => {
  const idOfProductToUpdate = usePathname();
  const [ProductByID, setProductById] = useState([
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
  const router = useRouter();
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   getProductById();
  // }, []);

  // const getProductById = async () => {
  //   const response = await axios.getById(idOfProductToUpdate);
  //   setProductById(response.data);
  // };

  const handleCancelClick = () => {
    console.log('cancel cliked');
    router.push('/admin/product');
  };

  const handleChange = (e, key) => {
    const updatedProduct = {
      ...ProductByID[0],
      [key]: e.target.value,
    };

    setProductById([updatedProduct]); // Maintain array structure
  };

  // console.log(ProductByID);

  const handleSaveClick = async () => {
    // const response = await axios.patch('https:e-com/', ProductByID);

    console.log(ProductByID);

    // toast.success('Updated Successfully');
    // setTimeout(() => {
    //   router.push('/admin/products');
    // }, 2000);

    setModal(true);
  };

  const handleAddImage = () => {
    console.log('add image api here');
  };

  return (
    <main className="w-full min-h-screen px-2 py-3 lg:p-2 lg:px-3">
      {/* {modal ? <Modal /> : ''} */}
      {ProductByID.map(item => {
        return (
          <div
            className="w-full min-h-screen flex flex-col gap-5"
            key={item.id}
          >
            <div className="w-full flex items-center justify-between lg:pr-3">
              <h1 className="text-[28px] font-Poppins font-bold">
                Edit Product
              </h1>
              <div className="flex gap-3">
                <Button
                  className="bg-blue-800 text-white px-2 flex items-center gap-2 rounded-[5px] hover:bg-blue-950 cursor-pointer"
                  onClick={() => handleCancelClick(item.id)}
                >
                  Cancel
                  <i className="material-icons">cancel</i>
                </Button>
                <Button
                  className="bg-blue-800 text-white px-3 py-2 flex items-center gap-1 rounded-[5px] hover:bg-blue-950 cursor-pointer"
                  onClick={() => {
                    handleSaveClick(item.id);
                  }}
                >
                  Save
                  <i className="material-icons">download</i>
                </Button>
              </div>
            </div>

            {/* product id section */}
            <p className="w-full h-12 bg-gray-300 flex items-center font-bold text-[18px] rounded-[5px] pl-2">
              {item.id}
            </p>

            {/* images */}
            <div className="w-full min-h-30 flex gap-3 px-2 overflow-auto">
              {ProductByID[0].images.map((imgUrl, index) => (
                <div
                  className="px-2 py-3 pb-8 bg-gray-300 rounded-[5px] rounded-b-[20px] hover:shadow-xl/30 hover:scale-105 relative"
                  key={`${imgUrl}-${index}`}
                >
                  <div className="w-43 h-35 flex items-center justify-center bg-white rounded-[5px]">
                    <img
                      src={imgUrl}
                      alt={`Product image ${index + 1}`}
                      className="w-full h-full object-center object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-[#382ee9] text-white h-12 rounded-b-[20px] flex items-center justify-between px-2">
                    <h1>Replace</h1>
                    <i className="material-icons">change_circle</i>
                  </div>
                </div>
              ))}
              <UploadImage onClick={handleAddImage} />
            </div>

            {/* product details */}
            <div className="w-full lg:w-[80%]  px-1 flex flex-col gap-4 mt-3">
              <div className="flex flex-col gap-2">
                <h1 className="w-2/5 font-bold">Product Name</h1>
                <Input
                  className="w-3/5 text-gray-700 border border-gray-600 rounded-[5px] p-2"
                  value={item.name}
                  onChange={e => handleChange(e, 'name')}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="w-2/5 font-bold">Price</h1>
                <Input
                  className="w-3/5 text-gray-700 border border-gray-600 rounded-[5px] p-2"
                  value={item.price}
                  onChange={e => handleChange(e, 'price')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="w-2/5 font-bold">Description</h1>
                <textarea
                  className="w-3/5 min-h-[150px] text-gray-700 border border-gray-600 rounded-[5px] p-2 resize-y"
                  value={item.description}
                  onChange={e => handleChange(e, 'description')}
                />
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default EditProductpage;
