import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { ItemListContainer, Loader } from "../components";
import { useProducts, useSearch } from "../hooks";

export const Home = () => {
  const { products, loading } = useProducts();
  const { handleClickSearch, handleClickReset, setSearch, productsSearch } =
    useSearch();
  return (
    <>
      <Flex w="50%">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar un producto"
        />
        <Button onClick={handleClickSearch}>Buscar</Button>
        <Button onClick={handleClickReset}>Reset</Button>
      </Flex>

      {loading ? (
        <Loader />
      ) : (
        <ItemListContainer
          products={productsSearch.length > 0 ? productsSearch : products}
        />
      )}
    </>
  );
};
