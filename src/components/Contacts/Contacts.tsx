import './Contacts.scss';

import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

const contactsColors = {
  telegram: '#2aabee',
  linkedinBlue: '#0077b5',
};

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__buttons">
        <p className="contacts__buttons_call-to-action">Text me if you need a website</p>
        <a
          href="https://ginzart.t.me"
          target="_blank"
          rel="noreferrer"
          className="contacts__button"
          // @ts-expect-error valid CSS property
          style={{ '--active-color': contactsColors.telegram }}
        >
          @ginzart
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.linkedin.com/in/artginzburg/"
          target="_blank"
          rel="noreferrer"
          className="contacts__button"
          // @ts-expect-error valid CSS property
          style={{ '--active-color': contactsColors.linkedinBlue }}
        >
          @artginzburg
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
