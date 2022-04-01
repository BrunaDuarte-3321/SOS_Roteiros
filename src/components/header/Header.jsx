import React from 'react'
import './style.css'
import Sos from '../../img/SOS.png'


const Header = () => {
  return (
    <header>
    {/* Navbar */}
    <nav className="navbar d-flex justify-content-between p-5" >
      <div>
        <a href="./index.html">
          <img src={Sos} alt=""/>
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Nossa proposta</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cadastrar/Logar</a>
        </li>
      </ul>
    </nav>
    {/* Img background  */}
    <div className="banner">
      <img src="https://media.istockphoto.com/photos/architecture-from-marco-zero-square-in-recife-downtown-picture-id1162468341?b=1&k=20&m=1162468341&s=170667a&w=0&h=_v6JqjFA6MuzQxFsYu5LS7VwBM-l0dUIrtmr2_vpUHY=" alt=""/>
    </div>
    <blockquote className="blockquote p-4">
      <h3 className="display-1">
        <em>"Os melhores roteiros para você."</em>
      </h3>
    </blockquote>
    {/* filter */}
    <section className="row filter shadow p-5 ">
      <div className="col-sm input-group mb-3">
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Destino</option>
          <option value="1">Recife</option>
          <option value="2">Salvador</option>
          <option value="3">Fortaleza</option>
        </select>
      </div>
      <div className="col-sm input-group mb-3">
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Dias</option>
          <option value="1">3</option>
          <option value="2">5</option>
          <option value="3">7</option>
        </select>
      </div>
      <div className="col-sm">
        <button>Buscar</button>
      </div>
    </section>
  </header>
  )
}

export default Header