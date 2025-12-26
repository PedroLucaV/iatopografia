const PHONE = '5582991275633'
const message = 'Olá! Gostaria de solicitar um orçamento.'

export function useWhatsapp() {
  function getLink() {
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
  }

  return {
    getLink
  }
}