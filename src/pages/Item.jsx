import React from "react";
import { ItemDetailContainer, Loader } from "../components";
import { useProductById, useTitle } from "../hooks";
import { useParams } from "react-router-dom";

export const Item = () => {
    const {id} = useParams()
  const { product, loading } = useProductById(id);

  useTitle({ title: id });

  return loading ? <Loader/> : <ItemDetailContainer product={product} />;
};
