import { Button, ChakraProvider, Flex, Input } from "@chakra-ui/react";
import { ItemListContainer, Loader, UserStatus } from "./components";
import { MainLayout } from "./layout/MainLayout";
import { useProducts, useSearch } from "./hooks";
import { withOnlineStatus } from "./hoc";

const UserStatusWithHoc = withOnlineStatus(UserStatus);

const App = () => {
  const { products, loading } = useProducts();
  const { handleClickSearch, handleClickReset, setSearch, productsSearch } =
    useSearch();

  return (
    <ChakraProvider>
      <MainLayout>
        <UserStatusWithHoc name="Jesus" lastName="Teran" />

        {/* <Flex w="50%">
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
        )} */}
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;