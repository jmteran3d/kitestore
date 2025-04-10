import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, ItemListContainer } from './components';


const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a KiteStore! Viento, playa y sol."}/>
    </ChakraProvider>
  );
};

export default App;
