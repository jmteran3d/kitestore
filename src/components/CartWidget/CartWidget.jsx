import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { useCounterStore } from "../../store/useCounterStore";
/* import { useContext } from "react"; */
/* import { CartContext } from "../../context"; */

export const CartWidget = () => {

  const cartState = useCounterStore(state => state.cartState);

  /* const {cartState} = useContext(CartContext); */

  return (
    <Flex
      alignItems={"center"}
      fontSize={20}
      marginRight={"20px"}
      justifyContent={"space-between"}
      width={"50px"}
    >
      <FaCartShopping />
      <div>{cartState}</div>
    </Flex>
  );
};
