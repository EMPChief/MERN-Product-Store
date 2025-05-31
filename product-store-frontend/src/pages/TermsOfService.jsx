import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Divider,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const TermsOfService = () => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Container maxW="4xl" py={8} px={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box>
          <Flex justify="space-between" align="center" mb={6}>
            <Link to="/">
              <Button
                leftIcon={<ArrowBackIcon />}
                variant="ghost"
                borderRadius="full"
                pl={4}
              >
                Back to Store
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
            Terms of Service
          </Heading>
          <Text color={textColor} fontSize="lg">
            Last updated: {new Date().toLocaleDateString()}
          </Text>
        </Box>

        {/* Content */}
        <Box
          bg={bg}
          p={8}
          borderRadius="2xl"
          boxShadow="xl"
          border="1px"
          borderColor={borderColor}
        >
          <VStack spacing={6} align="stretch">
            <Box>
              <Heading size="md" mb={3}>
                1. Acceptance of Terms
              </Heading>
              <Text color={textColor} lineHeight="tall">
                By accessing and using BMK Product Store, you accept and agree
                to be bound by the terms and provision of this agreement. If you
                do not agree to abide by the above, please do not use this
                service.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                2. Use License
              </Heading>
              <Text color={textColor} lineHeight="tall" mb={3}>
                Permission is granted to temporarily download one copy of the
                materials on BMK Product Store for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </Text>
              <VStack align="start" spacing={2} pl={4}>
                <Text color={textColor}>• Modify or copy the materials</Text>
                <Text color={textColor}>
                  • Use the materials for any commercial purpose or for any
                  public display
                </Text>
                <Text color={textColor}>
                  • Attempt to reverse engineer any software contained on the
                  website
                </Text>
                <Text color={textColor}>
                  • Remove any copyright or other proprietary notations from the
                  materials
                </Text>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                3. Product Information
              </Heading>
              <Text color={textColor} lineHeight="tall">
                We strive to provide accurate product information, including
                descriptions, pricing, and availability. However, we do not
                warrant that product descriptions or other content is accurate,
                complete, reliable, current, or error-free.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                4. Pricing and Payment
              </Heading>
              <Text color={textColor} lineHeight="tall" mb={3}>
                All prices are subject to change without notice. We reserve the
                right to:
              </Text>
              <VStack align="start" spacing={2} pl={4}>
                <Text color={textColor}>
                  • Modify or discontinue products at any time
                </Text>
                <Text color={textColor}>
                  • Refuse or cancel orders for any reason
                </Text>
                <Text color={textColor}>
                  • Limit quantities purchased per person or household
                </Text>
                <Text color={textColor}>
                  • Verify payment information before processing orders
                </Text>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                5. Shipping and Returns
              </Heading>
              <Text color={textColor} lineHeight="tall">
                Shipping times and costs vary by location and product. Return
                policies are subject to our return policy guidelines. Items must
                be returned in original condition within the specified return
                period.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                6. User Accounts
              </Heading>
              <Text color={textColor} lineHeight="tall" mb={3}>
                When creating an account, you agree to:
              </Text>
              <VStack align="start" spacing={2} pl={4}>
                <Text color={textColor}>
                  • Provide accurate and complete information
                </Text>
                <Text color={textColor}>
                  • Maintain the security of your password
                </Text>
                <Text color={textColor}>
                  • Accept responsibility for all activities under your account
                </Text>
                <Text color={textColor}>
                  • Notify us immediately of any unauthorized use
                </Text>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                7. Prohibited Uses
              </Heading>
              <Text color={textColor} lineHeight="tall" mb={3}>
                You may not use our service:
              </Text>
              <VStack align="start" spacing={2} pl={4}>
                <Text color={textColor}>
                  • For any unlawful purpose or to solicit others to unlawful
                  acts
                </Text>
                <Text color={textColor}>
                  • To violate any international, federal, provincial, or state
                  regulations or laws
                </Text>
                <Text color={textColor}>
                  • To transmit or procure the sending of any advertising or
                  promotional material
                </Text>
                <Text color={textColor}>
                  • To impersonate or attempt to impersonate the company or
                  other users
                </Text>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                8. Disclaimer
              </Heading>
              <Text color={textColor} lineHeight="tall">
                The materials on BMK Product Store are provided on an 'as is'
                basis. BMK Product Store makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                9. Limitations
              </Heading>
              <Text color={textColor} lineHeight="tall">
                In no event shall BMK Product Store or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on BMK Product
                Store, even if BMK Product Store or an authorized representative
                has been notified orally or in writing of the possibility of
                such damage.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                10. Revisions and Errata
              </Heading>
              <Text color={textColor} lineHeight="tall">
                The materials appearing on BMK Product Store could include
                technical, typographical, or photographic errors. BMK Product
                Store does not warrant that any of the materials on its website
                are accurate, complete, or current.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                11. Governing Law
              </Heading>
              <Text color={textColor} lineHeight="tall">
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your State/Country] and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that state or location.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                12. Contact Information
              </Heading>
              <Text color={textColor} lineHeight="tall">
                If you have any questions about these Terms of Service, please
                contact us at:
              </Text>
              <VStack align="start" spacing={1} mt={3} pl={4}>
                <Text color={textColor}>Email: support@empchief.tech</Text>{" "}
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default TermsOfService;
