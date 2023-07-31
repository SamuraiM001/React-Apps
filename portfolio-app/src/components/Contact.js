import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div>
        <p>
          You can reach me through the following channels:
        </p>
        <ul className="contact-list">
          <li>
            <a href="https://github.com/SamuraiM001" target="_blank" rel="noopener noreferrer" className="contact-button">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="mailto:samuraim001@gmail.com" className="contact-button">
              <FontAwesomeIcon icon={faGoogle} />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+9940514550545" target="_blank" rel="noopener noreferrer" className="contact-button">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
