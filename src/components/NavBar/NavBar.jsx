import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";

//Fake data (mock)
const FAKE_CATEGORIES = [
  {
    id: 1,
    label: 'Tablas',
  },
  {
    id: 2,
    label: 'Kites + Barras',
  },
  {
    id: 3,
    label: 'Arneses',
  },
  {
    id: 4,
    label: 'Bolsos',
  },
  {
    id: 5,
    label: 'Accesorios',
  }
]

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>KiteStore</Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Tienda
            </MenuButton>
            <MenuList>
             {FAKE_CATEGORIES.map((category) => {
                return <MenuItem key={category.id}>{category.label}</MenuItem>;
              })}
            </MenuList>
          </Menu>
          
          <Flex alignItems={"center"}>
            <CartWidget />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"./images/avatar.jpg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"./images/avatar.jpg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Jesús M. Terán D.</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Servicios</MenuItem>
                  <MenuItem>Configuración</MenuItem>
                  <MenuItem>Cerrar sesión</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
