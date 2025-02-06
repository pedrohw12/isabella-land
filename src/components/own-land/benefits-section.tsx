import {
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { handleWhatsAppClick } from "./utils";

const BenefitsSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5E6EE",
        py: { xs: 6, md: 8 }, // Top/bottom padding
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
        {/* Left Column */}
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

        {/* Right Column */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, opacity: "90%" }}>
          Prepare-se para:
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#AD509F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Se aprofundar na vida espiritual"
              sx={{ opacity: "70%" }}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#AD509F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Obter respostas de áreas estacionadas"
              sx={{ opacity: "70%" }}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#AD509F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Descobrir em Deus sua identidade"
              sx={{ opacity: "70%" }}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#AD509F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Reativar sua essência"
              sx={{ opacity: "70%" }}
            />
          </ListItem>
        </List>
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
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", opacity: "90%" }}
          >
            Quero mudar de vida
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
