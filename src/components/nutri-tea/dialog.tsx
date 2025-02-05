"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

const AddPatientForm = ({}: {}) => {
  const [open, setOpen] = useState(false);
  const [openPatient, setOpenPatient] = useState(false);
  const [sendMessage, setSendMessage] = useState(true);
  const [gender, setGender] = useState("");
  const [messageTemplate, setMessageTemplate] = useState("");

  const handleClose = () => setOpen(false);
  const onClosePatient = () => setOpenPatient(false);

  return (
    <Box
      display="flex" // Use Flexbox
      justifyContent="center" // Horizontal centering
      alignItems="center" // Vertical centering
      height="100vh"
    >
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Adicionar novo paciente</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nome completo"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="gender-label">Gênero do paciente</InputLabel>
                  <Select
                    labelId="gender-label"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value="Feminino">Feminino</MenuItem>
                    <MenuItem value="Masculino">Masculino</MenuItem>
                    <MenuItem value="Outro">Outro</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Data de nascimento"
                  variant="outlined"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Número do CPF"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Celular com DDD"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="ddi-label">DDI do paciente</InputLabel>
                  <Select
                    labelId="ddi-label"
                    value={"+55"}
                    disabled
                    onChange={() => {}}
                  >
                    <MenuItem value="+55">BR Brasil (+55)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email de contato"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tags para o paciente"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#f8f8f8",
                    p: 2,
                    borderRadius: 1,
                  }}
                >
                  <Box>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={sendMessage}
                          onChange={() => setSendMessage(!sendMessage)}
                        />
                      }
                      label="Enviar mensagem de boas-vindas para este paciente"
                    />
                    <Box
                      component="span"
                      sx={{ fontSize: "12px", color: "#999" }}
                    >
                      Personalize o texto em <a href="#">clicando aqui</a>.
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="message-template-label">
                    Selecione o modelo de mensagem
                  </InputLabel>
                  <Select
                    labelId="message-template-label"
                    value={messageTemplate}
                    onChange={(e) => setMessageTemplate(e.target.value)}
                  >
                    <MenuItem value="welcome">Mensagem de boas vindas</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", mt: 2, mb: 2 }}>
                <Button variant="contained" color="success">
                  cadastrar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openPatient}
        onClose={onClosePatient}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>Paciente Thalita De Oliveira Santos, 28 anos.</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {/* Sidebar */}
            <Grid item xs={3}>
              <List>
                {/* @ts-ignore */}
                <ListItem button selected>
                  <ListItemText primary="Perfil do paciente" />
                </ListItem>
                {[
                  "Histórico de consultas",
                  "Anamnese geral",
                  "Questionários de saúde",
                  "Exames laboratoriais",
                  "Evolução fotográfica",
                  "Antropometria geral",
                  "Acompanhamento gestacional",
                  "Cálculo energético",
                  "Planejamento alimentar",
                  "Suplementos e produtos",
                  "Prescrição de metas",
                  "Prescrição de manipulados",
                  "Orientações nutricionais",
                  "Arquivos anexos",
                  "Prontuário do paciente",
                ].map((item, index) => (
                  // @ts-ignore
                  <ListItem button key={index}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Main Content */}
            <Grid item xs={9}>
              {/* Basic Info */}
              <Box mb={3}>
                <Typography variant="h6">Dados básicos</Typography>
                <Divider />
                <Grid container spacing={2} alignItems="center" mt={1}>
                  <Grid item>
                    <Avatar sx={{ width: 80, height: 80 }}>T</Avatar>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      label="Nome completo"
                      defaultValue="Thalita De Oliveira Santos"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      label="Data de nascimento"
                      defaultValue="10/11/1996"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      label="Telefone com DDD"
                      defaultValue="(81) 98642-1701"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} mt={1}>
                  <Grid item xs>
                    <TextField
                      label="Link do paciente"
                      defaultValue="https://paciente.me/244178493033"
                      fullWidth
                      InputProps={{
                        endAdornment: <Button>Copiar</Button>,
                      }}
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      label="Já logou no aplicativo?"
                      defaultValue="Sim, em 07/12/2024"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Actions */}
              <Box mb={3}>
                <Typography variant="h6">Fluxo de consulta</Typography>
                <Divider />
                <Grid container spacing={2} mt={1}>
                  {[
                    "registrar consulta",
                    "agendar paciente",
                    "adicionar anamnese",
                    "adicionar antropometria",
                    "adicionar planejamento",
                    "adicionar orientação",
                    "adicionar manipulados",
                  ].map((action, index) => (
                    <Grid item key={index}>
                      <Button variant="contained" color="success" fullWidth>
                        {action}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Patient Adjustments */}
              <Box mb={3}>
                <Typography variant="h6">Ajustes do paciente</Typography>
                <Divider />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Habilitar acesso ao link do paciente"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Habilitar acesso ao aplicativo"
                />
                <Button variant="outlined" color="primary">
                  Configurar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Button variant="contained" onClick={() => setOpen(true)}>
        <Typography>Cadastrar novo paciente</Typography>
      </Button>
      <Button variant="contained" onClick={() => setOpenPatient(true)}>
        <Typography>Ver paciente</Typography>
      </Button>
    </Box>
  );
};

export default AddPatientForm;
