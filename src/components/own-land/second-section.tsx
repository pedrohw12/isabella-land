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
  </Box>
);
