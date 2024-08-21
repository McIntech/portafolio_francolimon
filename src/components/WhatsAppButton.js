import React from 'react';
import whatsappIcon from '../assets/images/whatsapp.png'; // Asegúrate de que la imagen esté en la ruta correcta

function WhatsAppButton() {
  const whatsappLink = "https://wa.me/528117450317"; // Usa tu número de WhatsApp en formato internacional

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110"
    >
      <img
        src={whatsappIcon}  // Usa la imagen importada
        alt="WhatsApp"
        className="w-16 h-16"
      />
    </a>
  );
}

export default WhatsAppButton;