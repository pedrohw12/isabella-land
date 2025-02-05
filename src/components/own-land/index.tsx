"use client";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { SecondSection } from "./second-section";
import { ThirdSection } from "./third-section";
import { FourthSection } from "./fourth-section";
import { FinalCTASection } from "./cta-section";
import { Header } from "./header";
import Footer  from "./footer";
import BenefitsSection from "./benefits-section";
import { handleWhatsAppClick } from "./utils";
import FaqSection from "./faq-section";
import AboutSection from "./about-section";

export const Website = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          zIndex: 1,
          backgroundColor: '#F5E6EE',
          backgroundImage: 'url(/images/heroback.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: { xs: 8, md: 18 },
          paddingBottom: { xs: 8, md: 18 },
          position: "relative",
          px: 4,
          overflow: "visible",
        }}
      >
        {/* <Header /> */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: "#000",
              opacity: "90%",
              lineHeight: 1,
              fontFamily: "roboto",
            }}
          >
            Aqui você encontrará{!isSmallScreen && <br />} o real sentido da vida
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "#000",
              opacity: "70%",
            }}
          >
            Ajudando mulheres há mais de X anos a{!isSmallScreen && <br />} encontrarem o real sentido da
            vida
          </Typography>
          <Button
            onClick={handleWhatsAppClick}
            variant="outlined"
            sx={{
              backgroundColor: "#B74F8E",
              width: "280px",
              height: "56px",
              borderRadius: 5,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#fff", opacity: "90%" }}
            >
              Quero mudar de vida
            </Typography>
          </Button>
        </Box>
      </Box>

      <SecondSection />
      <BenefitsSection />
      <ThirdSection />
      <FourthSection />
      <FinalCTASection />
      <FaqSection />
      <AboutSection />
      <Footer />
    </>
  );
};
