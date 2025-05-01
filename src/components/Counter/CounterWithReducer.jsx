import { Button, Flex, Text } from "@chakra-ui/react";
import { useReducer } from "react";

//Estado inicial: es un objeto con el valor inicial del estado (en este caso count)
const initialState = { count: 0 };

//Reducer (funcion) que recibe el estado, action (type obligatorio + payload opcional)
function counterReducer(state, action) {
  switch (action.type) {
    case "incrementar":
      return { count: state.count + 1 };
    //   return { count: state.count + action.payload };
    case "decrementar":
      return { count: state.count - 1 };
    case "resetear":
      return initialState;
    default:
      break;
  }
}

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Button onClick={() => dispatch({ type: "decrementar" })}>-1</Button>
      <Text fontSize={30} margin={"0 10px 0 10px"}>
        {state.count}
      </Text>
      <Button onClick={() => dispatch({ type: "incrementar" })}>+1</Button>
      {/* <Button onClick={() => dispatch({ type: "incrementar", payload: 10 })}>+10</Button> */}
      <Button onClick={() => dispatch({ type: "resetear" })}>Resetear</Button>
    </Flex>
  );
};