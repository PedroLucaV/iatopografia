const PHONE = '5582999999999'
const message = 'Olá! Gostaria de solicitar um orçamento.'

export function useWhatsapp() {
  function getLink() {
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
  }

  return {
    getLink
  }
}