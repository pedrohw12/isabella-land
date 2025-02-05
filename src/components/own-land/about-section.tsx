import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { handleWhatsAppClick } from "./utils";

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5E6EE", // Light pink
        py: { xs: 6, md: 8 }, // Vertical padding
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* "Sobre" heading above the two columns (optional approach) */}
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Sobre
            </Typography>
          </Grid>

          {/* Left Column: Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              // Replace with your actual image
              src="/images/isabella-cadeira.png"
              alt="Isabella Medeiros"
              sx={{
                display: "block",
                width: "100%",
                maxWidth: 300,
                mx: "auto", // center horizontally if narrower than parent
              }}
            />
          </Grid>

          {/* Right Column: Headings, Paragraph, CTA Button */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              Quem é Isabella Medeiros ?
            </Typography>
            <Typography variant="body1" paragraph>
              Líder Espiritual há mais de 10 anos, apaixonada por vidas e por
              ativar-las ao plano original que Deus criou para cada uma delas,
              mentora e treinadora na área Espiritual e emocional, ama estudar e
              mapear pessoas, direcionando-as a viver a vida em abundância que
              Jesus conquistou na cruz . Prova viva de um milagre, curada por
              Jesus de uma doença incurável para medicina fundando o projeto
              Mergulhadas no Altar que surgiu fruto de uma oração em seu quarto,
              com o objetivo de levar cura emocional, física e principalmente
              cura Espiritual!
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
