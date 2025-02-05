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
        backgroundColor: "#E7D0DD",
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
              justifyContent: { xs: "center", md: "left" },
            }}
          >
            <Box
              component="img"
              src="/images/isabella-lendo.png"
              alt="Isabella Medeiros"
              sx={{
                display: "block",
                width: "100%",
                maxWidth: 400,
                flex: 1,
              }}
            />
          </Box>

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
            <Typography variant="h4" gutterBottom>
              A vida espiritual revela muito mais
            </Typography>
            <Typography variant="body1" paragraph>
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
