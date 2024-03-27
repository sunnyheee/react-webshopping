import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ul>
      {productList.map((data, i) => (
        <li key={i}>
          <ProductCard data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ProductAll;
