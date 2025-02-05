export const handleWhatsAppClick = () => {
  const phoneNumber = "5581989867687";
  const message =
    "Olá! Estou interessado(a) em desenvolver um site com você. Poderia me dar mais informações sobre os seus serviços e como podemos começar?";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank"); // Opens in a new tab
};