import React from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  Divider,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bmkLogo from "../assets/bmkloggo/logo.png";

const Footer = () => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const linkColor = useColorModeValue("brand.500", "brand.300");

  return (
    <Box bg={bg} borderTop="1px" borderColor={borderColor} mt={16}>
      <Container maxW="7xl" py={8} px={4}>
        <VStack spacing={6}>
          {/* Main Footer Content */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "center", md: "start" }}
            w="full"
            gap={8}
          >
            {/* Logo and Company Info */}
            <VStack
              align={{ base: "center", md: "start" }}
              spacing={4}
              flex={1}
            >
              <Flex align="center" gap={3}>
                <Image src={bmkLogo} alt="BMK Logo" h={8} w="auto" />
                <Text fontSize="lg" fontWeight="bold" color={linkColor}>
                  BMK Product Store
                </Text>
              </Flex>
              <Text
                color={textColor}
                textAlign={{ base: "center", md: "left" }}
                maxW="300px"
              >
                Your trusted partner for quality products and exceptional
                service.
              </Text>
            </VStack>

            {/* Quick Links */}
            <VStack align={{ base: "center", md: "start" }} spacing={3}>
              <Text
                fontWeight="semibold"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Quick Links
              </Text>
              <VStack spacing={2} align={{ base: "center", md: "start" }}>
                <Link to="/">
                  <Text
                    color={textColor}
                    _hover={{ color: linkColor }}
                    transition="color 0.2s"
                  >
                    Home
                  </Text>
                </Link>
                <Link to="/create">
                  <Text
                    color={textColor}
                    _hover={{ color: linkColor }}
                    transition="color 0.2s"
                  >
                    Add Product
                  </Text>
                </Link>
              </VStack>
            </VStack>

            {/* Legal Links */}
            <VStack align={{ base: "center", md: "start" }} spacing={3}>
              <Text
                fontWeight="semibold"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Legal
              </Text>
              <VStack spacing={2} align={{ base: "center", md: "start" }}>
                <Link to="/privacy-policy">
                  <Text
                    color={textColor}
                    _hover={{ color: linkColor }}
                    transition="color 0.2s"
                  >
                    Privacy Policy
                  </Text>
                </Link>
                <Link to="/terms-of-service">
                  <Text
                    color={textColor}
                    _hover={{ color: linkColor }}
                    transition="color 0.2s"
                  >
                    Terms of Service
                  </Text>
                </Link>
              </VStack>
            </VStack>

            {/* Contact Info */}
            <VStack align={{ base: "center", md: "start" }} spacing={3}>
              <Text
                fontWeight="semibold"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Contact
              </Text>
              <VStack spacing={2} align={{ base: "center", md: "start" }}>
                <ChakraLink
                  href="mailto:support@empchief.tech"
                  color={textColor}
                  _hover={{ color: linkColor }}
                >
                  support@empchief.tech
                </ChakraLink>
                <ChakraLink
                  href="tel:+4700000000"
                  color={textColor}
                  _hover={{ color: linkColor }}
                >
                  +47 00000000
                </ChakraLink>
                <Text
                  color={textColor}
                  fontSize="sm"
                  textAlign={{ base: "center", md: "left" }}
                >
                  123 Business St
                  <br />
                  City, State 12345
                </Text>
              </VStack>
            </VStack>
          </Flex>

          <Divider />

          {/* Bottom Footer */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            w="full"
            gap={4}
          >
            <Text color={textColor} fontSize="sm" textAlign="center">
              © {new Date().getFullYear()} BMK Product Store. All rights
              reserved.
            </Text>
            <HStack spacing={4}>
              <Text color={textColor} fontSize="sm">
                Made with ❤️ for better inventory management
              </Text>
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
