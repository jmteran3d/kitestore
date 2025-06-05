import React from "react";
import { ItemListContainer, Loader } from "../components";
import { useProductsByCategory, useTitle } from "../hooks";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { id } = useParams();

  const { products, loading } = useProductsByCategory(id);

  useTitle({ title: id });

  return loading ? <Loader /> : <ItemListContainer products={products} />;
};
