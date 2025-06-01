import { useState, useEffect, useContext } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useCounterStore } from "../../store/useCounterStore";
/* import { CartContext } from "../../context"; */


export const Counter = () => {
  /* const {cartState, setCartState} = useContext(CartContext) */

  //Store Zustand
  const addProduct = useCounterStore((state) => state.addProduct);
  const removeProduct = useCounterStore((state) => state.removeProduct);

  /* const cartState = useCounterStore(state => state.cartState); */

  const [count, setCount] = useState(0); //Valor inicial de 0 (se le pasa dentro del useState)

   const handleAdd = () => {
    addProduct();
    setCount(count + 1);
  };

  const handleRemove = () => {
    removeProduct();
    setCount(count - 1);
  };


  useEffect(() => {
    console.log("Cambio el contador");
  }, [count]);

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
