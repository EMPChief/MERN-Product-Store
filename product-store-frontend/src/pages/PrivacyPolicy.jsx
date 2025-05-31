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

const PrivacyPolicy = () => {
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
            Privacy Policy
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
                1. Information We Collect
              </Heading>
              <Text color={textColor} lineHeight="tall">
                BMK Product Store collects information you provide directly to
                us, such as when you create an account, make a purchase, or
                contact us for support. This may include your name, email
                address, phone number, shipping address, and payment
                information.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                2. How We Use Your Information
              </Heading>
              <Text color={textColor} lineHeight="tall" mb={3}>
                We use the information we collect to:
              </Text>
              <VStack align="start" spacing={2} pl={4}>
                <Text color={textColor}>• Process and fulfill your orders</Text>
                <Text color={textColor}>
                  • Communicate with you about your account and orders
                </Text>
                <Text color={textColor}>• Provide customer support</Text>
                <Text color={textColor}>
                  • Improve our products and services
                </Text>
                <Text color={textColor}>
                  • Send you promotional communications (with your consent)
                </Text>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                3. Information Sharing
              </Heading>
              <Text color={textColor} lineHeight="tall">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy. We may share your information with
                trusted service providers who assist us in operating our website
                and conducting our business.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                4. Data Security
              </Heading>
              <Text color={textColor} lineHeight="tall">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                5. Cookies and Tracking
              </Heading>
              <Text color={textColor} lineHeight="tall">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience, analyze site traffic, and
                understand where our visitors are coming from.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                6. Your Rights
              </Heading>
              <Text color={textColor} lineHeight="tall" mb={3}>
                You have the right to:
              </Text>
              <VStack align="start" spacing={2} pl={4}>
                <Text color={textColor}>
                  • Access your personal information
                </Text>
                <Text color={textColor}>• Correct inaccurate information</Text>
                <Text color={textColor}>
                  • Request deletion of your information
                </Text>
                <Text color={textColor}>
                  • Opt-out of marketing communications
                </Text>
                <Text color={textColor}>• Data portability</Text>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                7. Children's Privacy
              </Heading>
              <Text color={textColor} lineHeight="tall">
                Our service is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                8. Changes to This Policy
              </Heading>
              <Text color={textColor} lineHeight="tall">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" mb={3}>
                9. Contact Us
              </Heading>
              <Text color={textColor} lineHeight="tall">
                If you have any questions about this Privacy Policy, please
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

export default PrivacyPolicy;
