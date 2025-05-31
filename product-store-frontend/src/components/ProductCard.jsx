import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
  Badge,
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useProductStore from "../store/product";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category,
    stock: product.stock,
  });

  const handleDeleteProduct = async (productId) => {
    const result = await deleteProduct(productId);
    if (result.success) {
      toast({
        title: result.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: result.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async () => {
    const productToUpdate = {
      ...updatedProduct,
      price: Number(updatedProduct.price),
      stock: Number(updatedProduct.stock),
    };

    const result = await updateProduct(product._id, productToUpdate);
    if (result.success) {
      toast({
        title: result.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Error",
        description: result.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        bg={cardBg}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="lg"
        border="1px"
        borderColor={borderColor}
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "2xl",
          borderColor: "brand.200",
        }}
        cursor="pointer"
      >
        {/* Product Image */}
        <Box position="relative">
          <Image
            src={product.image}
            alt={product.name}
            h={48}
            w="full"
            objectFit="cover"
            loading="lazy"
          />
          <Badge
            position="absolute"
            top={3}
            right={3}
            colorScheme={product.stock > 0 ? "green" : "red"}
            borderRadius="full"
            px={3}
            py={1}
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </Badge>
        </Box>

        {/* Product Info */}
        <Box p={6}>
          <VStack align="stretch" spacing={4}>
            <Box>
              <Heading size="md" mb={2} noOfLines={2}>
                {product.name}
              </Heading>
              <Text color={textColor} fontSize="sm" noOfLines={2} lineHeight="tall">
                {product.description}
              </Text>
            </Box>

            <Flex justify="space-between" align="center">
              <Text fontSize="2xl" fontWeight="bold" color="green.500">
                ${product.price}
              </Text>
              <Badge variant="subtle" colorScheme="brand" borderRadius="full" px={3}>
                {product.category}
              </Badge>
            </Flex>

            <Divider />

            {/* Action Buttons */}
            <HStack justify="center" spacing={3}>
              <IconButton
                aria-label="Edit product"
                icon={<EditIcon />}
                onClick={onOpen}
                variant="ghost"
                colorScheme="brand"
                size="lg"
                borderRadius="full"
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s"
              />
              <IconButton
                aria-label="Delete product"
                icon={<DeleteIcon />}
                onClick={() => handleDeleteProduct(product._id)}
                variant="ghost"
                colorScheme="red"
                size="lg"
                borderRadius="full"
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s"
              />
            </HStack>
          </VStack>
        </Box>
      </Box>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent borderRadius="2xl" mx={4}>
          <ModalHeader>
            <Text fontSize="xl" fontWeight="bold">
              Edit Product
            </Text>
          </ModalHeader>
          <ModalCloseButton borderRadius="full" />
          
          <ModalBody pb={6}>
            <VStack spacing={5}>
              <FormControl>
                <FormLabel fontWeight="semibold">Product Name</FormLabel>
                <Input
                  placeholder="Enter product name"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="semibold">Description</FormLabel>
                <Input
                  placeholder="Describe your product"
                  value={updatedProduct.description}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      description: e.target.value,
                    })
                  }
                />
              </FormControl>

              <HStack w="full" spacing={4}>
                <FormControl>
                  <FormLabel fontWeight="semibold">Price ($)</FormLabel>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="semibold">Stock</FormLabel>
                  <Input
                    type="number"
                    placeholder="0"
                    value={updatedProduct.stock}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        stock: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel fontWeight="semibold">Category</FormLabel>
                <Input
                  placeholder="Product category"
                  value={updatedProduct.category}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      category: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="semibold">Image URL</FormLabel>
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={3}>
              <Button 
                onClick={onClose} 
                variant="ghost"
                borderRadius="full"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpdateProduct}
                borderRadius="full"
                px={8}
              >
                Update Product
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
