import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useAuth } from "./hooks";
/* import { CartProvider } from "./context"; */

const App = () => {

  const {user} = useAuth()
  console.log(user)
  return (
    <ChakraProvider>
      {/* <CartProvider> */}
        <RouterProvider router={router}/>
      {/* </CartProvider> */}
    </ChakraProvider>
  );
};

export default App;
