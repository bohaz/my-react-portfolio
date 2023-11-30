import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppButton() {
  const whatsappNumber = '+56984506314';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const iconStyle = { color: 'white' };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje de WhatsApp">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" style={iconStyle} />
    </a>
  );
}

export default WhatsAppButton;
