// /app/admin/products/page.js

'use client';
import SearchBar from '../../../../components/common/SearchBar/Searchbar';
import ReactPaginate from 'react-paginate';
import axios from '../../../../utils/axios';
import { useState, useEffect } from 'react';
import ProductCard from '../../../../components/admin/ProductCard/ProductCard';
import { useRouter } from 'next/navigation';

const AdminProductspage = () => {
  const [currentpage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([
    {
      name: 'Apple iPhone 15 Pro',
      price: 134900,
      description:
        'A17 Pro chip, 48MP camera, titanium design, and USB-C support.',
      category: 'Smartphone',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
    {
      name: 'Sony WH-1000XM5',
      price: 29990,
      description: 'Industry-leading noise cancellation wireless headphones.',
      category: 'Audio',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
    {
      name: 'Samsung 55-inch QLED 4K TV',
      price: 78999,
      description:
        'Smart QLED display with Quantum HDR and 120Hz refresh rate.',
      category: 'Television',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
    {
      name: 'Apple MacBook Air M2',
      price: 114900,
      description: 'Ultra-thin laptop with M2 chip and 18-hour battery life.',
      category: 'Laptop',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
    {
      name: 'Dyson V15 Detect Cordless Vacuum',
      price: 62900,
      description: 'Powerful vacuum cleaner with laser dust detection.',
      category: 'Home Appliance',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
    {
      name: 'Canon EOS R50 Mirrorless Camera',
      price: 63999,
      description:
        'Compact mirrorless camera ideal for beginners and vloggers.',
      category: 'Camera',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
    {
      name: 'Nike Air Max 270',
      price: 13995,
      description: 'Comfortable lifestyle shoes with Air Max cushioning.',
      category: 'Footwear',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
    {
      name: 'Logitech MX Master 3S',
      price: 8995,
      description: 'Ergonomic wireless mouse with ultra-fast scrolling.',
      category: 'Accessories',
      images: [
        '/images/products/Nikon-Camara-01.png',
        'https://store.storeimages.cdn-apple.com/iphone15-side.jpg',
        'https://store.storeimages.cdn-apple.com/iphone15-back.jpg',
      ],
    },
  ]);
  const router = useRouter();

  useEffect(() => {
    paginatedProducts();
  }, []);

  const handlePageClick = e => {
    setCurrentPage(e.selected + 1);
  };

  // console.log('current page = ', currentpage);

  const paginatedProducts = async () => {
    // const response = await axios.get(
    //   `/products?page=${currentpage}&limit=${limit}`
    // );
    // console.log(response);

    console.log(
      'https://ecomdummy.onrender.com/api/products?page=' + currentpage
    );
  };

  const handleProductClick = id => {
    router.push('/admin/product/' + id);
  };

  return (
    <main className="w-full min-h-50 py-3 pb-8 pl-5 flex flex-col gap-5">
      <h1 className="text-[20px] lg:text-[30px] font-bold">
        Products Management
      </h1>

      {/* search bar */}
      <div className="flex h-10 items-center gap-3">
        <SearchBar className="w-60  h-full flex items-center gap-3 border border-gray-400 rounded-[5px] px-4 lg:w-75" />
        <i className="material-icons size-8 bg-blue-700 text-white p-[4px] rounded-[5px]">
          arrow_downward
        </i>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-[80%] gap-5 relative">
        <div className="w-full 2xl:w-[1202px] min-h-50 py-4 grid grid-cols-3 gap-2 xl:grid-cols-4 lg:grid-rows-2 place-items-center">
          {products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                productname={item.name}
                price={item.price}
                description={item.description}
                onClick={() => {
                  handleProductClick(index);
                }}
              />
            );
          })}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<i className="fa-solid fa-arrow-down"></i>}
          previousLabel={<i className="fa-solid fa-arrow-up"></i>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={8}
          pageCount={10}
          forcePage={currentpage - 1}
          renderOnZeroPageCount={null}
          containerClassName="flex items-center justify-center gap-2 mt-6 bg-gray-200 p-3 rounded-md lg:flex-col"
          pageClassName="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer"
          activeClassName="bg-blue-900 text-white"
          previousClassName="cursor-pointer"
          nextClassName="cursor-pointer"
        />
      </div>
    </main>
  );
};

export default AdminProductspage;
