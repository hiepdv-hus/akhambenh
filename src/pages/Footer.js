import "./Footer.css"
import LogoFooter from "../images/Logo-footer.png"
import MapPin from "../images/MapPin.png"
import Email from "../images/EnvelopeSimple.png"
import Phone from "../images/Phone.png"
import FB from "../images/FacebookLogo.png"
import IG from "../images/InstagramLogo.png"
import WhatApp from "../images/WhatsappLogo.png"
import Payment1 from "../images/Money.png"
import Payment2 from "../images/Payment Method.png"
import Payment3 from "../images/Payment Method (1).png"
import Payment4 from "../images/Payment Method (2).png"
import Payment5 from "../images/Payment Method (3).png"
const Footer = () => {
    return (
      <footer>
          <div className="container">
            <div className="footer-lst">
                <div className="footer-item">
                    <img className="footer-logo" width={'115'} src={LogoFooter}/>
                </div>
                <div className="footer-item">
                    <div className="footer-title">DIENSTLEISTUNGEN</div>
                    <div className="footer-txt">Gesichts- und Hautpflege</div>
                    <div className="footer-txt">Wimpern & Augenbrauen</div>
                    <div className="footer-txt">Massagen</div>
                    <div className="footer-txt">Haarentfernung</div>
                    <div className="footer-txt">Nagelservices</div>
                    <div className="footer-txt">Pediküre</div>
                </div>
                <div className="footer-item">
                    <div className="footer-title">HILFE ERHALTEN</div>
                    <div className="footer-txt">Kontakt</div>
                    <div className="footer-txt">FAQ</div>
                </div>
                <div className="footer-item">
                    <div className="footer-title">ÖFFNUNGSZEITEN</div>
                    <div className="footer-txt">Montag – Freitag<br/>
                    10:00 AM – 7:00 PM</div>
                    <div className="footer-txt">Samstag<br/>
                    09:00 AM – 6:00 PM</div>
                </div>
                <div className="footer-item">
                    <div className="footer-title">KONTAKT</div>
                    <div className="footer-txt footer-contact">
                        <img className="me-2" src={MapPin} width={'22'}/> 
                        Roßmarkt 23,
                        60311 Frankfurt am Main
                    </div>
                    <div className="footer-txt footer-contact">
                        <img className="me-2" src={Email} width={'22'}/> 
                        info@terrabeauty.de
                    </div>
                    <div className="footer-txt footer-contact">
                        <img className="me-2" src={Phone} width={'22'}/> 
                        +49 (0) 69 26 944 050
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-bottom-title">Weitere Informationen erhalten</div>
                        <div className="d-flex">
                            <input className="form-control" placeholder="Ihre E-Mail eingeben"/>
                            <button className="ms-2 btn-abonnieren">Abonnieren</button>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 mt-4">
                        <div className="footer-bottom-right text-end">
                            <div className="">
                                <img className="ms-3" src={FB} height={'32'}/>
                                <img className="ms-3" src={IG} height={'32'}/>
                                <img className="ms-3" src={WhatApp} height={'32'}/>
                                <img className="ms-5" src={Payment1} height={'32'}/>
                                <img className="ms-3" src={Payment2} height={'32'}/>
                                <img className="ms-3" src={Payment5} height={'32'}/>
                                <img className="ms-3" src={Payment3} height={'32'}/>
                                <img className="ms-3" src={Payment4} height={'32'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </footer>
    )
  };
  
  export default Footer;
  