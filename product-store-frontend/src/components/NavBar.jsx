import { 
  Container, 
  Flex, 
  HStack, 
  Text, 
  Button, 
  useColorMode,
  IconButton,
  useColorModeValue,
  Box,
  Image
} from "@chakra-ui/react";
import React from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import bmkLogo from "../assets/bmkloggo/logo.png";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <Box 
      bg={bg} 
      borderBottom="1px" 
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={10}
      backdropFilter="blur(20px)"
      boxShadow="sm"
    >
      <Container maxW="7xl" px={4}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          h={16}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 0 }}
        >
          <Link to="/">
            <Flex 
              alignItems="center" 
              gap={3}
              _hover={{
                transform: "scale(1.05)",
              }}
              transition="all 0.2s"
              cursor="pointer"
            >
              <Image 
                src={bmkLogo} 
                alt="BMK Logo" 
                h={10}
                w="auto"
                objectFit="contain"
              />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, brand.400, brand.600)"
                bgClip="text"
              >
                Product Store
              </Text>
            </Flex>
          </Link>
          
          <HStack spacing={3}>
            <Link to="/create">
              <Button
                leftIcon={<PlusSquareIcon />}
                size="md"
                variant="solid"
                borderRadius="full"
                px={6}
              >
                Add Product
              </Button>
            </Link>
            
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
              onClick={toggleColorMode}
              variant="ghost"
              size="md"
              borderRadius="full"
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{
                bg: useColorModeValue('gray.100', 'gray.700'),
                transform: 'rotate(180deg)',
              }}
              transition="all 0.3s ease"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
