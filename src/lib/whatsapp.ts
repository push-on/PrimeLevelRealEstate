export const openWhatsApp = (customMessage?: string) => {
  const phoneNumber = '+97142613610'
  const message = customMessage || 'Hello, I would like to inquire about your services.'
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}