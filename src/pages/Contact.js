import Position from "../images/position.png"
import Map from "../images/contact-map.png"

const Contact = () => {
    return (
        <div className="contact" style={{paddingTop: '40px'}}>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6 pt-5 pb-5">
                        <div className="contact-title">Nehmen Sie Kontakt auf</div>
                        <div className="contact-title-txt mt-3">
                            Wir sind hier, um zu helfen! Kontaktieren Sie uns bei Fragen, Feedback oder Terminwünschen. Unser Team steht bereit, um Ihnen zu helfen.
                        </div>
                        <div className="d-flex align-items-center  mt-4">
                            <img width={'52'} src={Position}/>
                            <div className="ms-3">
                                <div className="contact-label">Adresse</div>
                                <div className="contact-txt">Roßmarkt 23, 60311 Frankfurt am Main</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center  mt-3">
                            <img width={'52'} src={Position}/>
                            <div className="ms-3">
                                <div className="contact-label">Adresse</div>
                                <div className="contact-txt">Roßmarkt 23, 60311 Frankfurt am Main</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center  mt-3">
                            <img width={'52'} src={Position}/>
                            <div className="ms-3">
                                <div className="contact-label">Adresse</div>
                                <div className="contact-txt">Roßmarkt 23, 60311 Frankfurt am Main</div>
                            </div>
                        </div>
                        <div className="contact-line"></div>
                        <div className="contact-title-txt" style={{fontWeight: '700'}}>Folgen Sie uns</div>
                        <div className="mt-3">
                            <img width={'52'} src={Position}/>
                            <img className="ms-3" width={'52'} src={Position}/>
                            <img className="ms-3" width={'52'} src={Position}/>`
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <div className="contact-title text-center">Nachricht senden</div>
                            <div className="contact-form-label mt-5">Name</div>
                            <input className="form-control mt-2" placeholder="Geben Sie Ihren Namen ein"/>
                            <div className="contact-form-label mt-4">E-Mail-Adresse</div>
                            <input className="form-control mt-2" placeholder="Geben Sie Ihre E-Mail-Adresse ein"/>
                            <div className="contact-form-label mt-4">Nachricht</div>
                            <textarea rows="5" className="form-control mt-2" placeholder="Geben Sie Ihre Nachricht ein"></textarea>

                            <div className="contact-button mt-4">Absenden</div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 mb-5">
                    <div className="contact-title">Standort</div>
                    <div className="mt-3">
                        <img width={'100%'} src={Map}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;