import { Button, Flex, Input } from "@chakra-ui/react";
import { ItemListContainer, Loader } from "../components";
import { useProducts, useSearch, useTitle } from "../hooks";

export const Home = () => {
  const { products, loading } = useProducts();
  const { handleClickSearch, handleClickReset, setSearch, productsSearch } =
    useSearch();
    useTitle({ title: "Inicio" });

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  const handleInputClick = () => {
    console.log("Input clickeado");
  };
  const handleScroll = () => {
    console.log("Scrolling...");
  };

  //useEffect(() => {
    //document.addEventListener("scroll", handleScroll);

    //funcion clean up
    //return () => {
      //console.log("se destruye");
      //document.addEventListener("scroll", handleScroll);
    //};
  //}, []);

  return (
    <>
      <Flex w="50%">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar un producto"
        />
        <Input
          id="myInput"
          w={"50%"}
          onChange={(e) => {
            handleInputChange(e);
          }}
          onClick={handleInputClick}
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
