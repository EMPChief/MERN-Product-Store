import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
  HStack,
  Text,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import useProductStore from "../store/product";

const CreatePage = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();

  const formBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const handleCreateProduct = async () => {
    const result = await createProduct(newProduct);

    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset form
      setNewProduct({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
        stock: "",
      });

      // Navigate back to home
      setTimeout(() => navigate("/"), 1000);
    } else {
      toast({
        title: "Error",
        description: result.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="2xl" py={8} px={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Flex justify="space-between" align="center" mb={6}>
            <Link to="/">
              <Button
                leftIcon={<ArrowBackIcon />}
                variant="ghost"
                borderRadius="full"
                pl={4}
              >
                Back to Products
              </Button>
            </Link>
            <Box />
          </Flex>

          <Heading
            size="xl"
            fontWeight="bold"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
            mb={3}
          >
            Create New Product
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="lg">
            Add a new product to your inventory
          </Text>
        </Box>

        {/* Form */}
        <Box
          bg={formBg}
          p={8}
          borderRadius="2xl"
          boxShadow="xl"
          border="1px"
          borderColor={borderColor}
        >
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel fontWeight="semibold">Product Name</FormLabel>
              <Input
                placeholder="Enter product name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                size="lg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="semibold">Description</FormLabel>
              <Input
                placeholder="Describe your product"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                size="lg"
              />
            </FormControl>

            <HStack w="full" spacing={4}>
              <FormControl isRequired>
                <FormLabel fontWeight="semibold">Price ($)</FormLabel>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="semibold">Stock Quantity</FormLabel>
                <Input
                  type="number"
                  placeholder="0"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: e.target.value })
                  }
                  size="lg"
                />
              </FormControl>
            </HStack>

            <FormControl isRequired>
              <FormLabel fontWeight="semibold">Category</FormLabel>
              <Input
                placeholder="e.g., Electronics, Clothing, Books"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                size="lg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="semibold">Image URL</FormLabel>
              <Input
                placeholder="https://example.com/image.jpg"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                size="lg"
              />
            </FormControl>

            <Divider />

            <HStack w="full" spacing={4}>
              <Button
                variant="ghost"
                size="lg"
                borderRadius="full"
                flex={1}
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Button
                leftIcon={<CheckIcon />}
                size="lg"
                borderRadius="full"
                flex={2}
                onClick={handleCreateProduct}
                isDisabled={
                  !newProduct.name ||
                  !newProduct.price ||
                  !newProduct.description ||
                  !newProduct.image ||
                  !newProduct.category ||
                  !newProduct.stock
                }
              >
                Create Product
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
