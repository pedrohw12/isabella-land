import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { handleWhatsAppClick } from "./utils";

export const ThirdSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        // backgroundColor: "#E7D0DD",
        backgroundColor: "#F5E6EE",
        backgroundImage: "url(/images/gardenbg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "column", md: "space-between" },
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              mt: { xs: 4, md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" gutterBottom>
              A vida espiritual revela muito mais
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                maxWidth: { xs: "100%", md: "80%", lg: "60%" },
              }}
            >
              A incrível capacidade do cérebro de se adaptar e formar novas
              conexões neurais ao longo da vida. Você vai descobrir como
              utilizar isso na sua vida para sair de um estado mental de
              limitação e negatividade para um estado de realização e
              prosperidade. Compreender e praticar a reprogramação mental não é
              apenas uma escolha, mas uma necessidade para quem busca maximizar
              seu potencial pessoal e profissional.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
