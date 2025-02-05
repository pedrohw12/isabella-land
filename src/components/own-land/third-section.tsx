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
        backgroundColor: '#E7D0DD', 
        py: { xs: 6, md: 8 },       
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column: Black box placeholder for the image */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 300,       // limit how wide the "image" can get
                aspectRatio: '3 / 4',// ensures a rectangular shape
                backgroundColor: 'black',
                mx: 'auto',          // center horizontally if smaller than parent
              }}
            />
          </Grid>

          {/* Right Column: Heading & Text */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" gutterBottom>
              A vida espiritual revela muito mais
            </Typography>
            <Typography variant="body1" paragraph>
              A incrível capacidade do cérebro de se adaptar e formar novas conexões 
              neurais ao longo da vida. Você vai descobrir como utilizar isso na sua vida 
              para sair de um estado mental de limitação e negatividade para um estado de 
              realização e prosperidade. Compreender e praticar a reprogramação mental 
              não é apenas uma escolha, mas uma necessidade para quem busca maximizar 
              seu potencial pessoal e profissional.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
