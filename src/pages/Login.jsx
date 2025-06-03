import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../hooks";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast({
        title: "Usuario logueado",
        description: "Se ha iniciado sesión correctamente",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error de login",
        description: "No se ha podido loguear al usuario",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={6}>
          <Text fontSize={"2xl"} mb={"5px"} fontWeight={"600"}>
            Inicia sesión
          </Text>
          <FormControl isRequired>
            <Text mb={"5px"}>Correo Electrónico</Text>
            <Input
              type={"email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Ingresa tu correo electrónico"
            />
          </FormControl>

          <FormControl isRequired>
            <Text mb={"5px"}>Contraseña</Text>
            <Input
              type={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Ingresa tu contraseña"
            />
          </FormControl>

          <Button type="submit" colorScheme={"purple"}>
            Iniciar sesión
          </Button>
        </VStack>
      </form>
      <Text mt={'20px'}>No estas registrado? <Link to={'/signup'}>Hazlo aquí</Link></Text>
    </Box>
  );
};
