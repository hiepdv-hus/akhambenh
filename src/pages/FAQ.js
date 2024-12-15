import Sum from "../images/sum.png"
import Clock from "../images/Clock.png"

const FAQ = () => {

    const dataVoucher = [
        {
            id: 1,
            img: ''
        },
        {
            id: 2,
            img: ''
        },
        {
            id: 3,
            img: ''
        },
        {
            id: 4,
            img: ''
        },
        {
            id: 5,
            img: ''
        },
        {
            id: 6,
            img: ''
        },
        {
            id: 7,
            img: ''
        },
        {
            id: 8,
            img: ''
        },
        {
            id: 9,
            img: ''
        },
    ]
    return (
        <div className="product">
            <section className="product-banner">
                <div className="container">
                    <h1 className="heading">
                        FAQ
                    </h1>
                    <div className="txt">
                    Haben Sie Fragen? Wir sind hier, um Ihnen zu helfen.
                    </div>
                    <div className="mt-4">
                        <input className="form-control" placeholder="Suchen"/>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {dataVoucher.length > 0 && dataVoucher.map((product, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-6 d-flex mt-5">
                                <div className="faq-item cursor-pointer w-100">
                                    <img width={'30'} src={Sum} />
                                    <div className="faq-item-content mt-3">
                                        <div className="faq-label mt-2">What is your cancellation policy?</div>
                                        <div className="faq-txt mt-2">You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between fag-fragen align-items-center">
                            <div>
                                <div className="faq-label">Haben Sie noch Fragen?</div>
                                <div className="faq-txt">Können Sie die Antwort, die Sie suchen, nicht finden? Chatten Sie mit unserem <br/> freundlichen Team.</div>
                            </div>
                            <div className="faq-button">Kontaktieren</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ;