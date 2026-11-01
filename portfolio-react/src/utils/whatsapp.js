export function buildWhatsAppLink(phoneNumber, message) {
  const baseUrl = `https://wa.me/${phoneNumber}`
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}
