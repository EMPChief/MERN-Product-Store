import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const bg = useColorModeValue(
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #2D3748 0%, #1A202C 100%)"
  );
  
  return (
    <Box 
      minH="100vh" 
      bgGradient={bg}
      position="relative"
    >
      {/* Background overlay for better contrast */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={useColorModeValue("rgba(255,255,255,0.9)", "rgba(0,0,0,0.3)")}
        zIndex={0}
      />
      
      {/* Content */}
      <Box position="relative" zIndex={1}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
