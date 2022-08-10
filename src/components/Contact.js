import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export function Contact() {
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
        <h2>me</h2>
        <p>
          contactame para mas informacion ya sea por el formulario debajo o por telefono, recuerda que todo empieza con una
          idea.
        </p>
      </div>
      <div className='form-container'>
        <form className='form-item' onSubmit={handleSubmit}>
          <div className='inputs-container'>
            <input type='text' name='name' placeholder='Nombre' />
            <input type='email' name='email' placeholder='Email' />
            <input type='text' name='subject' placeholder='Asunto' />
          </div>
          <div className='message-input'>
            <textarea
              style={{ resize: 'none' }}
              placeholder='Mensaje'
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
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
