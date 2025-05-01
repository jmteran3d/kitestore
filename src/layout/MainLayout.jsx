import { Box, Container } from "@chakra-ui/react";
import { NavBar } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box w={'100vw'}>{children}</Box>
    </>
  );
};
