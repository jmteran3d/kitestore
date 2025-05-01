import { useEffect, useState } from "react";
import { Button, ChakraProvider, Flex, Input } from "@chakra-ui/react";
import { ItemListContainer, Loader } from "./components";
import { MainLayout } from "./layout/MainLayout";
import {
  // addProduct,
  // deleteProduct,
  getProducts,
  searchProduct,
  // updateProduct,
} from "./services";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  // const handleClickAdd = () => {
  //   const newProduct = {
  //     title: "Producto Coder",
  //     description: "Producto creado para coder",
  //     price: 10,
  //   };

  //   addProduct(newProduct).then((res) => {
  //     console.log(res);
  //   });
  // };

  // const handleClickUpdate = () => {
  //   const newData = {
  //     title: "Iphone 16 Pro",
  //     description: "Nuevo Iphone Coder",
  //     price: 1000,
  //   };

  //   updateProduct(1, newData).then((res) => {
  //     console.log(res);
  //   });
  // };

  // const handleClickDelete = () => {
  //   deleteProduct(1).then((res) => {
  //     console.log(res);
  //   });
  // };

  const handleClickSearch = () => {
    setLoading(true);
    searchProduct(search)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleClickReset = () => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ChakraProvider>
      <MainLayout>
        {/* <Button onClick={handleClickAdd}>Agregar Item</Button>
        <Button onClick={handleClickUpdate}>Update Item</Button>
        <Button onClick={handleClickDelete}>Delete Item</Button> */}

        <Flex w='50%'>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar un producto"
          />
          <Button onClick={handleClickSearch}>Buscar</Button>
          <Button onClick={handleClickReset}>Reset</Button>
        </Flex>

        {loading ? <Loader /> : <ItemListContainer products={products} />}
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;