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
import { handleWhatsAppClick } from "./utils";

export const FourthSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#F5E6EE", p: 8 }}>
      <Box sx={{ backgroundColor: "#E7D0DD", borderRadius: "12px" }}>
        <Box
          sx={{
            py: { xs: 6, md: 8 }, // Vertical padding
          }}
        >
          <Container maxWidth="md">
            {/* Title */}
            <Typography variant="h3" align="center" gutterBottom>
              O que essa mentoria{!isSmallScreen && <br />} tem para você
            </Typography>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {/* Image Placeholder on the left */}
              <Box
                sx={{
                  height: "300px", // Adjust height as needed
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  flex: 1,
                  mr: { xs: 0, md: 10 },
                  mb: { xs: 4, lg: 0 },
                }}
              >
                <Box
                  component="img"
                  src="/images/bible.png"
                  alt="Bíblia"
                  sx={{
                    display: "block",
                    width: "100%",
                    borderRadius: "8px",
                    maxWidth: 400,
                    flex: 1,
                  }}
                />
              </Box>

              {/* Text and button on the right */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  flex: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}
                >
                  A mentoria tem como foco X pilares de uma vida cristã, que vai
                  de encontro com o que a palavra de Deus diz em etc etc
                </Typography>

                {!isSmallScreen && (
                  <Box sx={{ mt: 6 }}>
                    <Button
                      onClick={handleWhatsAppClick}
                      variant="outlined"
                      sx={{
                        backgroundColor: "#B74F8E",
                        width: "280px",
                        height: "56px",
                        mt: "auto",
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
                )}
              </Box>
            </Box>

            {/* 3-column content */}
            <Grid
              container
              spacing={4}
              justifyContent="center"
              sx={{ mt: { xs: 0, md: 6 } }}
            >
              {/* Oração */}
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Oração
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
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ opacity: "70%" }}
                    >
                      Em constante oração, conseguimos nos aproximar mais de
                      Deus, ter um relacionamento de mais intimidade etc etc
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Fé */}
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
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
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ opacity: "70%" }}
                    >
                      Em constante oração, conseguimos nos aproximar mais de
                      Deus, ter um relacionamento de mais intimidade etc etc
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Perseverança */}
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
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
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ opacity: "70%" }}
                    >
                      Em constante oração, conseguimos nos aproximar mais de
                      Deus, ter um relacionamento de mais intimidade etc etc
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
          {isSmallScreen && (
            <Box sx={{ mt: 6, textAlign: "center" }}>
              <Button
                onClick={handleWhatsAppClick}
                variant="outlined"
                sx={{
                  backgroundColor: "#B74F8E",
                  width: "280px",
                  height: "56px",
                  mt: "auto",
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
          )}
        </Box>
      </Box>
    </Box>
  );
};
