import React from "react";
import { Box, Typography } from "@mui/material";

const PurpleBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "158px",
        backgroundColor: "#7B6EFF", // Purple color
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2, // Padding for vertical spacing
        position: "relative", // To ensure it stays in context
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#000", // Black text color for contrast
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "8px", // Space between text and icon
        }}
      >
        Vamos desenhar o seu futuro
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <img src="/images/bolt.png" alt="bolt" />
      </Box>
    </Box>
  );
};

export default PurpleBar;
