import { Box, Typography, Button, Grid } from "@mui/material";

import React from "react";

export const SecondSection = () => (
  <Box
    id="descubra"
    sx={{
      backgroundColor: "#E7D0DD",
      position: "relative",
      py: 8,
      paddingTop: { xs: "50px", md: "150px" },
      paddingBottom: { xs: "80px", md: "150px" },
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ p: 4, width: '85%', maxWidth: 'lg' }} // optional padding around the grid
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={3} // 4 columns at md (>=960px)
        >
          {/* Dark square box (placeholder icon) */}
          <Box
            sx={{
              width: 80,
              height: 80,
              margin: "0 auto", // center horizontally
              backgroundColor: "black",
            }}
          />
          <Typography variant="body2" align="center" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada at enim non convallis.
          </Typography>
        </Grid>
      ))}
    </Grid>
    {/* <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" }, // Responsive layout
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        mx: "auto",
        px: 4,
      }}
    >
      <Typography
        fontWeight="bold"
        variant="h3"
        sx={{
          textAlign: "center",
          mb: { xs: 1, md: 2 },
          color: "#fff",
          opacity: "90%",
          mt: { xs: 5, md: 0 },
          maxWidth: "700px",
        }}
      >
        Descubra o poder de um website com design moderno
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          color: "#fff",
          opacity: "70%",
          textAlign: "center",
          maxWidth: "720px",
        }}
      >
        Experimente a diferença que um design exclusivo pode fazer. Na Landhere,
        criamos sites sob medida que se destacam da concorrência, evitando a
        aparência comum dos templates prontos.
      </Typography>
    </Box> */}
  </Box>
);
