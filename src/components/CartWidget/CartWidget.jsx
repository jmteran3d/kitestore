import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { useProductsStore } from "../../store/useProductsStore";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
  const totalItems = useProductsStore(state => state.getTotalItems());
  const navigate = useNavigate();

  return (
    <Flex
      alignItems={"center"}
      fontSize={20}
      marginRight={"20px"}
      justifyContent={"space-between"}
      width={"50px"}
      onClick={() => navigate('/cart')}
    >
      <FaCartShopping />
      <div>{totalItems}</div>
    </Flex>
  );
};
