import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      fontSize={20}
      marginRight={"20px"}
      justifyContent={"space-between"}
      width={"50px"}
    >
      <FaCartShopping />
      <div>7</div>
    </Flex>
  );
};
