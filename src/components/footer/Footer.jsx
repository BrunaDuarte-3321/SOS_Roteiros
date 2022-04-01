import React from 'react';
import './footer.css';
import insta from '../../img/instagram.png';
import face from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import what from '../../img/whatsapp.png';
import Sos from '../../img/SOS.png';

const Footer = () => {
  return (
    <footer className="row justify-content-around pt-5">
      <div className="col-md-4 mb-4 ">
        <a href="./index.html">
          <img src={Sos} alt="" />
        </a>
        <p className="my-4">Fique por dentro de todas as novidades</p>
        <form action="">
          <input type="text" placeholder="Seu e-mail" />
          <button className="my-3">Inscrever</button>
        </form>
      </div>
      <nav className="col-md-4">
        <ul className="nav-footer px-0">
          <li>
            <ul className="px-0 d-flex">
              <li>
                <a href="#">
                  <img src={insta} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={face} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={what} alt="" />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Nossa proposta</a>
          </li>
          <li>
            <a href="#">Cadastrar/Logar</a>
          </li>
        </ul>
        <p className="mt-4">© 2022 SOS Roteiros. All rights reserved.</p>
      </nav>
    </footer>
  );
};

export default Footer;
