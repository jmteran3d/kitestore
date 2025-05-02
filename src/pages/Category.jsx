import React from "react";
import { ItemListContainer, Loader } from "../components";
import { useProductsByCategory } from "../hooks";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { categoryId } = useParams();

  const { products, loading } = useProductsByCategory(categoryId);
  return loading ? (
    <Loader />
  ) : (
    <ItemListContainer
      products={products}
    />
  );
};
