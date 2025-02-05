import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Presencial ou Online ?',
    answer: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat.
    `
  },
  {
    question: 'Quantos encontros ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...'
  },
  {
    question: 'Quais dias e horários ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...'
  },
  {
    question: 'Quais ganhos ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...'
  },
  {
    question: 'Como me inscrever ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...'
  }
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ backgroundColor: '#F5E6EE', py: 6 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Perguntas frequentes
        </Typography>

        {/* A container (Paper) for the Accordions */}
        <Paper
          elevation={2}
          sx={{
            mt: 4,
            overflow: 'hidden', // in case expansions
            borderRadius: 2,
          }}
        >
          {faqs.map((item, index) => {
            const panelId = `panel-${index}`;
            return (
              <Accordion
                key={panelId}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${panelId}-content`}
                  id={`${panelId}-header`}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Paper>
      </Container>
    </Box>
  );
}
