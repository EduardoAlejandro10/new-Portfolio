import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import { useTranslation } from 'react-i18next';


export function Contact() {


const [t] = useTranslation("global")

  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((res) => {
        e.target.reset();

        setMessage({
          type: 'success',
          msg: 'Hemos recibido tu mensaje, pronto nos pondremos en contacto contigo.',
        });
      })
      .catch((err) => {
        console.log(err);

        setMessage({
          type: 'error',
          msg: 'Algo ha salido mal, por favor intentalo nuevamente.',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
  };

  return (
    <section id='contact' className='form-section'>
      <div className='form-title'>
        <h2><span className='span'>{t("contact.title")}</span>{t("contact.title2")}</h2>
        <p>
        {t("contact.description")}
        </p>
      </div>
      <div className='form-container'>
        <form className='form-item' onSubmit={handleSubmit}>
          <div className='inputs-container'>
            <input type='text' name='name' placeholder={t("contact.holder1")} />
            <input type='email' name='email' placeholder={t("contact.holder2")} />
            <input type='text' name='subject' placeholder={t("contact.holder3")} />
          </div>
          <div className='message-input'>
            <textarea
              style={{ resize: 'none' }}
              placeholder={t("contact.holder4")}
              name='message'
              cols='100'
              rows='5'
            ></textarea>
          </div>
          {message && (
            <div className={`message ${message.type}`}>
              <small>{message.msg}</small>
            </div>
          )}
          <button type='submit' className='form-button'>
            {t("contact.button")}
          </button>
        </form>
      </div>
    </section>
  );
}
