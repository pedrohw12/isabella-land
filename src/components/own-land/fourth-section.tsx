"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { handleWhatsAppClick } from "./utils";

export const FourthSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#F5E6EE", // Pink-ish background
        py: { xs: 6, md: 8 }, // Vertical padding
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          O que essa mentoria{!isSmallScreen && <br />} tem para você
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          A mentoria tem como foco X pilares de uma vida cristã, que vai de
          {!isSmallScreen && <br />} encontro com o que a palavra de Deus diz em
          etc etc
        </Typography>

        {/* 3-column content */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {/* Oração */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center">
              Oração
            </Typography>
            {/* Underline / divider (optional) */}
            <Box
              sx={{
                width: 40,
                height: 3,
                backgroundColor: "#AD509F",
                mx: "auto",
                my: 1,
              }}
            />
            <Typography variant="body2" align="center">
              Em constante oração, conseguimos nos aproximar mais de Deus, ter
              um relacionamento de mais intimidade etc etc
            </Typography>
          </Grid>

          {/* Fé */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center">
              Fé
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 3,
                backgroundColor: "#AD509F",
                mx: "auto",
                my: 1,
              }}
            />
            <Typography variant="body2" align="center">
              Em constante oração, conseguimos nos aproximar mais de Deus, ter
              um relacionamento de mais intimidade etc etc
            </Typography>
          </Grid>

          {/* Perseverança */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center">
              Perseverança
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 3,
                backgroundColor: "#AD509F",
                mx: "auto",
                my: 1,
              }}
            />
            <Typography variant="body2" align="center">
              Em constante oração, conseguimos nos aproximar mais de Deus, ter
              um relacionamento de mais intimidade etc etc
            </Typography>
          </Grid>
        </Grid>

        {/* Call-to-action button */}
        <Box textAlign="center" sx={{ mt: 6 }}>
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
      </Container>
    </Box>
  );
};
