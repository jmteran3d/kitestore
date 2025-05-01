/* eslint-disable no-unused-vars */
"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

function Rating({ rating }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill key={i} style={{ marginLeft: "2px" }} />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "2px" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "2px" }} />;
        })}
    </Box>
  );
}

export function ProductCard({ product }) {
  return (
    <Flex p={4} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w="250px"               // fixed width
        minH="400px"            // minimum height
        maxH="400px"            // maximum height
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        display="flex"
        flexDirection="column"
      >
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />

        <Image
          src={product.thumbnail}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          objectFit="cover"
          h="180px"            // fixed image height
          w="100%"
        />

        <Box p="4" flex="1" display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>

            <Box
              mt="2"
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}      // limits title to 2 lines
            >
              {product.title}
            </Box>
          </Box>

          <Flex mt="2" justifyContent="space-between" alignItems="center">
            <Rating rating={product.rating} />
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={6} w={6} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Box mt="2" fontSize="xl" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              £
            </Box>
            {product.price.toFixed(2)}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
