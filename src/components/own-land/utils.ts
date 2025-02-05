export const handleWhatsAppClick = () => {
  const phoneNumber = "5581998427246";
  const message =
    "Olá! Estou interessada em fazer parte da mentoria!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank"); // Opens in a new tab
};