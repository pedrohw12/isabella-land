import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { handleWhatsAppClick } from "./utils";

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5E6EE", // Light pink
        py: { xs: 6, md: 8 }, // Vertical padding
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        maxWidth="lg"
        sx={{
          width: { xs: "80%", lg: "100%" },
          height: "2px",
          backgroundColor: "#B74F8E",
          mb: { xs: 6, md: 8 },
          borderRadius: 2,
        }}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Box
              component="img"
              src="/images/isabella-reading.jpeg"
              alt="Isabella Medeiros"
              sx={{
                display: "block",
                width: "100%",
                borderRadius: "8px",
                maxWidth: 400,
                flex: 1,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", md: "start" },
              flex: 1,
              flexDirection: "column",
              mx: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: { xs: "center", md: "left" },
                mb: 4,
                mt: { xs: 4, md: 0 },
              }}
            >
              Quem é Isabella Medeiros ?
            </Typography>
            <Typography variant="body1" paragraph>
              Líder Espiritual há mais de 10 anos, apaixonada por vidas e por
              ativar-las ao plano original que Deus criou para cada uma delas.
            </Typography>
            <Typography variant="body1" paragraph>
              Mentora e treinadora na área Espiritual e emocional, ama estudar e
              mapear pessoas, direcionando-as a viver a vida em abundância que
              Jesus conquistou na cruz.
            </Typography>
            <Typography variant="body1" paragraph>
              Prova viva de um milagre, curada por Jesus de uma doença incurável
              para medicina fundando o projeto Mergulhadas no Altar que surgiu
              fruto de uma oração em seu quarto, com o objetivo de levar cura
              emocional, física e principalmente cura Espiritual!
            </Typography>

            <Button
              onClick={handleWhatsAppClick}
              variant="outlined"
              sx={{
                backgroundColor: "#B74F8E",
                width: "280px",
                height: "56px",
                borderRadius: 5,
                marginTop: { xs: 8, md: 8 },
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
      </Container>
      <Box
        maxWidth="lg"
        sx={{
          borderRadius: 2,
          width: { xs: "80%", lg: "100%" },
          height: "2px",
          backgroundColor: "#B74F8E",
          mt: { xs: 6, md: 8 },
        }}
      />
    </Box>
  );
}
