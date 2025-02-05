import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

export const FinalCTASection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5E6EE", // Light pink
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="h4" align="center" gutterBottom>
          O que nossas mentoradas dizem
        </Typography>

        {/* 1st Testimonial */}
        <Grid container spacing={2} sx={{ mt: 4 }} alignItems="flex-start">
          {/* Left: Avatar, Name, Role */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: {xs: "flex", md: "block"},
              flexDirection: {xs: "column", md: "row"},
              alignItems: {xs: "center", md: "left"}
            }}
          >
            <Avatar
              alt="Luciana Serpa"
              src="/images/luciana.png"
              sx={{
                width: 100,
                height: 100,
                marginBottom: 1,
              }}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              Luciana Serpa
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Terapeuta, Mentora, Escritora
            </Typography>
          </Grid>

          {/* Right: Testimonial Text */}
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">
              A jornada da minha vida ganhou um novo sentido depois que conheci
              a Isabella Medeiros, minha mentora espiritual. Através do seu
              método, ensinamentos como também sua sabedoria, acolhimento e
              direcionamento, fui guiada a um nível mais profundo de intimidade
              com Deus e isso me fortaleceu muito nos meus momentos de
              incertezas, instabilidade emocional. Aprendi a ouvir a voz de
              Deus, criar o hábito de ler e entender melhor a palavra e
              fortalecer minha fé mesmo diante dos desafios.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Hoje, minha conexão espiritual é mais forte, sinto paz que vem do
              Espírito Santo e minha caminhada com Deus tem sido transformadora.
              Sou imensamente grata por toda inspiração e cuidado de Isabella no
              meu processo.
            </Typography>
          </Grid>
        </Grid>

        {/* 2nd Testimonial */}
        <Grid container spacing={2} sx={{ mt: 6 }} alignItems="flex-start">
          {/* Left: Avatar, Name, Role */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: {xs: "flex", md: "block"},
              flexDirection: {xs: "column", md: "row"},
              alignItems: {xs: "center", md: "left"}
            }}
          >
            <Avatar
              alt="Paula Brielle"
              src="/images/paula.png"
              sx={{
                width: 100,
                height: 100,
                marginBottom: 1,
              }}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              Paula Brielle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nutricionista
            </Typography>
          </Grid>

          {/* Right: Testimonial Text */}
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">
              Participar da mentoria foi um divisor de águas em todas as áreas
              da minha vida! Mesmo eu tendo feito há muitos anos, os
              ensinamentos sobre quem eu sou em Deus e o que Ele tem pra mim, me
              fazem ter certeza de que apesar de qualquer dificuldade, eu sei em
              quem tenho crido!
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Desde a mentoria, eu aprendi a como encarar qualquer situação com
              sabedoria, pedindo o direcionamento de Deus e planejando junto com
              Ele cada passo a dar. Foi uma transformação na minha vida
              espiritual e tenho certeza que também tem sido e será
              transformador para muitas outras vidas!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
