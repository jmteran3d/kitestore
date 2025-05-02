import { Container, Flex, Box } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const ItemListContainer = ({ products }) => {
  return (
    <Box width="100vw" display={"flex"} maxW={"100vw"}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Box>
  );
};