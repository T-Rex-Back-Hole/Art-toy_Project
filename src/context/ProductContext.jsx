import React, { createContext, useContext, useState, useEffect } from 'react';
// import * as productApi from '../API/productsApi';

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async (filters) => {
    try {
      const res = await productApi.getAllProducts(filters);
      const products = res.data;
      setProductList(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts({});
  }, []);

  const productObj = { productList, fetchProducts };

  return (
    <ProductContext.Provider value={productObj}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);
export { ProductContext };
export default ProductContextProvider;