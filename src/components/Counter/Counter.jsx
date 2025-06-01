import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

export const Counter = ({ product }) => {
  //Store Zustand

  const [count, setCount] = useState(0); //Valor inicial de 0 (se le pasa dentro del useState)

  const handleAdd = () => {
    addProduct();
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (cartState === 0) return;

    removeProduct();
    setCount(count - 1);
  };

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Button onClick={handleRemove}>-1</Button>
      <Text fontSize={30} margin={"0 10px 0 10px"}>
        {count}
      </Text>
      <Button onClick={handleAdd}>+1</Button>
    </Flex>
  );
};
