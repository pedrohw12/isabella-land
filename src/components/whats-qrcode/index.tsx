"use client";

import { Box } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppQR = () => {
  const phoneNumber = "5581989867687";
  const message =
    "Olá! Estou interessado(a) em desenvolver um site com você. Poderia me dar mais informações sobre os seus serviços e como podemos começar?";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(128, 131, 245, 0.24)",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: "192px",
        height: "192px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <WhatsAppIcon sx={{ color: "#fff", marginBottom: 2 }} />
      <QRCodeSVG
        value={whatsappURL} // The WhatsApp URL
        size={100} // Size of the QR Code
        fgColor="#000000" // QR Code color
        bgColor="#ffffff" // Background color
      />
    </Box>
  );
};

export default WhatsAppQR;
