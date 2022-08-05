import React from 'react';

const NavBar = () => {
  return (
<<<<<<< HEAD
    <div  style={{ position: 'sticky', top: '0', zIndex: '999' }}>
      <nav  className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div  className='container-fluid'>
=======
    <div style={{ position: 'sticky', top: '0', zIndex: '999' }}>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
>>>>>>> 67686bec3be32bac30071eeb186e853bcf13d47b
          <a id='main' className='navbar-brand' href='#main'>
            Eduardo Alejandro
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarColor02'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link active' href='#main'>
                  <span className='visually-hidden'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
<<<<<<< HEAD
                <a  className='nav-link' href='#skills'>
=======
                <a className='nav-link' href='#skills'>
>>>>>>> 67686bec3be32bac30071eeb186e853bcf13d47b
                  Habilidades
                </a>
              </li>
              <li className='nav-item'>
<<<<<<< HEAD
                <a className='nav-link' href='#proyects'>
=======
                <a className='nav-link' href='#projects'>
>>>>>>> 67686bec3be32bac30071eeb186e853bcf13d47b
                  Proyectos
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
