import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Icon,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductStore from "../store/product";
import ProductCard from "../components/ProductCard";
import { PlusSquareIcon, CheckIcon } from "@chakra-ui/icons";
import bmkLogo from "../assets/bmkloggo/logo.png";

const HomePage = () => {
  const { fetchProducts, products, createProduct } = useProductStore();
  const emptyStateBg = useColorModeValue("white", "gray.800");
  const emptyStateBorder = useColorModeValue("gray.200", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
        description: "",
        price: "",
        image: "",
        category: "",
        stock: "",
      });

      onClose();
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
    <>
      <Container maxW="7xl" py={8} px={4}>
        <VStack spacing={8} align="stretch">
          {/* Hero Section */}
          <Box textAlign="center" py={8}>
            <VStack spacing={6}>
              <Image
                src={bmkLogo}
                alt="BMK Logo"
                h={20}
                w="auto"
                objectFit="contain"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3s ease"
              />
              <VStack spacing={4}>
                <Heading
                  size="2xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, brand.400, brand.600)"
                  bgClip="text"
                >
                  Welcome to BMK Product Store
                </Heading>
                <Text
                  fontSize="lg"
                  color={useColorModeValue("gray.600", "gray.400")}
                  maxW="2xl"
                  mx="auto"
                >
                  Discover amazing products and manage your inventory with ease
                </Text>
              </VStack>
            </VStack>
          </Box>

          {/* Products Grid */}
          {products.length > 0 ? (
            <Box>
              <Flex justify="space-between" align="center" mb={6}>
                <Heading
                  size="lg"
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  Products ({products.length})
                </Heading>
                <Button
                  leftIcon={<PlusSquareIcon />}
                  size="sm"
                  variant="outline"
                  borderRadius="full"
                  onClick={onOpen}
                >
                  Add New
                </Button>
              </Flex>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                spacing={6}
                w="full"
              >
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </SimpleGrid>
            </Box>
          ) : (
            // Empty State
            <Box
              bg={emptyStateBg}
              border="2px dashed"
              borderColor={emptyStateBorder}
              borderRadius="2xl"
              p={12}
              textAlign="center"
              maxW="md"
              mx="auto"
            >
              <VStack spacing={6}>
                <Box
                  w={20}
                  h={20}
                  bg={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={PlusSquareIcon} w={8} h={8} color="brand.500" />
                </Box>

                <VStack spacing={3}>
                  <Heading
                    size="md"
                    color={useColorModeValue("gray.700", "gray.200")}
                  >
                    No products yet
                  </Heading>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="sm"
                    lineHeight="tall"
                  >
                    Start building your product catalog by adding your first
                    product
                  </Text>
                </VStack>

                <Button
                  leftIcon={<PlusSquareIcon />}
                  size="lg"
                  borderRadius="full"
                  px={8}
                  onClick={onOpen}
                >
                  Create Your First Product
                </Button>
              </VStack>
            </Box>
          )}
        </VStack>
      </Container>

      {/* Create Product Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent borderRadius="2xl" mx={4}>
          <ModalHeader>
            <Text fontSize="xl" fontWeight="bold">
              Create New Product
            </Text>
          </ModalHeader>
          <ModalCloseButton borderRadius="full" />

          <ModalBody pb={6}>
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel fontWeight="semibold">Product Name</FormLabel>
                <Input
                  placeholder="Enter product name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="semibold">Description</FormLabel>
                <Input
                  placeholder="Describe your product"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
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
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontWeight="semibold">Stock</FormLabel>
                  <Input
                    type="number"
                    placeholder="0"
                    value={newProduct.stock}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, stock: e.target.value })
                    }
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
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={3}>
              <Button onClick={onClose} variant="ghost" borderRadius="full">
                Cancel
              </Button>
              <Button
                leftIcon={<CheckIcon />}
                onClick={handleCreateProduct}
                borderRadius="full"
                px={8}
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HomePage;
