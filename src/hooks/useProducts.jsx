import { useEffect, useState } from "react";
import { getProducts } from "../services";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};