import {
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Eco from '@mui/icons-material/Spa';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { handleWhatsAppClick } from "./utils";

const BenefitsSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const benefits = [
    {
      text: "Se aprofundar na vida espiritual",
      icon: <Eco sx={{ color: "#AD509F" }} />
    },
    {
      text: "Obter respostas de áreas estacionadas",
      icon: <LightbulbIcon sx={{ color: "#AD509F" }} />
    },
    {
      text: "Descobrir em Deus sua identidade",
      icon: <FavoriteIcon sx={{ color: "#AD509F" }} />
    },
    {
      text: "Reativar sua essência",
      icon: <AutoAwesomeIcon sx={{ color: "#AD509F" }} />
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5E6EE",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ opacity: "100%" }}>
          Uma vida com Deus
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          sx={{ opacity: "70%", textAlign: { xs: "center", md: "left" } }}
        >
          Ao buscar um aprofundamento espiritual, respostas de áreas
          estacionadas{!isSmallScreen && <br />} começam a aparecer, a vida se
          torna mais leve e mudanças acontecem.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4, opacity: "90%" }}>
          Prepare-se para:
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  backgroundColor: 'white',
                  boxShadow: 1,
                  '&:hover': {
                    boxShadow: 2,
                  },
                }}
              >
                <CardContent sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1,
                }}>
                  {benefit.icon}
                  <Typography sx={{ opacity: "90%" }}>
                    {benefit.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          onClick={handleWhatsAppClick}
          variant="outlined"
          sx={{
            backgroundColor: "#B74F8E",
            width: "280px",
            height: "56px",
            borderRadius: 5,
            mt: 16,
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#fff", opacity: "90%" }}>
            Quero mudar de vida
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};

export default BenefitsSection;