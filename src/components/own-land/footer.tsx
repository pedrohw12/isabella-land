import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack
} from '@mui/material';
// Example Material Icons (install @mui/icons-material if not present)
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff',
        py: 4, // vertical padding
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" align="center" gutterBottom>
          Siga nas redes sociais
        </Typography>

        {/* Icon Buttons in a row */}
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* Instagram */}
          <IconButton
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              border: '2px solid #B74F8E', // pink outline
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>

          {/* Facebook */}
          <IconButton
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              border: '2px solid #B74F8E',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>

          {/* LinkedIn */}
          <IconButton
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              border: '2px solid #B74F8E',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
