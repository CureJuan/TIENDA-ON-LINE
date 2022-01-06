import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'

export const Footer = () => {
    return (
        <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Acerca</h6>
              <p className="text-justify">ShopShoes<i> TU TIENDA ONLINE DE ZAPALLITAS </i> La mas grande cadena de zapatillas on-line</p>
            </div>
            <br/>  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#">Acerca</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">Politica de Privacidad</a></li>
                </ul>
            </div>
          </div>
          <br/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Derechos Reservados | QK-System™ 
             </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://es-la.facebook.com/" target="_black"><i className="fa fa-facebook"><BsFacebook/></i></a></li>
                <li><a className="twitter" href="https://twitter.com/?lang=es" target="_black"><i className="fa fa-twitter"><BsTwitter /></i></a></li>
                <li><a className="dribbble" href="https://www.instagram.com/" target="_black"><i className="fa fa-dribbble"><BsInstagram/></i></a></li>
                <li><a className="linkedin" href="https://ar.linkedin.com" target="_black"><i className="fa fa-linkedin"><BsLinkedin/></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
      )
}

