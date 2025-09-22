export const openWhatsApp = () => {
  const phoneNumber = '+971544887771';
  const message = 'Hello, I would like to inquire about your services.';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};