import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        gap: 4, // Space between anchors
        zIndex: 2,
      }}
    >
      <Typography
        variant="h6"
        component="a"
        href="#descubra"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          opacity: 0.9,
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": { opacity: 1 },
        }}
      >
        Descubra
      </Typography>
      <Typography
      variant="h6"
        component="a"
        href="#features"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          opacity: 0.9,
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": { opacity: 1 },
        }}
      >
        Features
      </Typography>
      <Typography
      variant="h6"
        component="a"
        href="#planos"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          opacity: 0.9,
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": { opacity: 1 },
        }}
      >
        Planos
      </Typography>
    </Box>
  );
};
