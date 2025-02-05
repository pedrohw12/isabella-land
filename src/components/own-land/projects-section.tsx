import { Box, Typography } from "@mui/material";
import { Carousel } from "@/once-ui/components";

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#040407",
        px: { xs: 4, md: 0 },
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "#fff",
            opacity: "90%",
            fontSize: "40px",
            lineHeight: 1.2,
          }}
        >
          O que fazemos ?
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            opacity: "70%",
            fontSize: "24px",
            lineHeight: 1.2,
            textAlign: "center",
          }}
          gutterBottom
        >
          Veja alguns dos projetos que temos feito com as tecnologias <br />
          mais modernas para estilização de páginas web
        </Typography>
      </Box>
      <div style={{ backgroundColor: "#040407", marginBottom: 50 }} />
      <Carousel
        width="clamp(300px, 80%, 800px)" // Min 300px, max 800px, scales with screen size
        aspectRatio="16 / 9"
        indicator="line"
        images={[
          {
            alt: "Sample image 1",
            src: "/images/projects/cover-01.jpg",
          },
          {
            alt: "Sample image 2",
            src: "/images/projects/cover-02.jpg",
          },
          {
            alt: "Sample image 3",
            src: "/images/projects/cover-03.jpg",
          },
        ]}
      />
    </Box>
  );
}
