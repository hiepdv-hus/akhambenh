

import VoucherImg from "../images/voucher-detail.png"
import Clock from "../images/Clock.png"

const VoucherDetail = () => {

    return (
        <div className="product">
            <section className="product-banner">
                <div className="container">
                    <h1 className="heading">
                        GRACEFUL TOUCHES, INSPIRED BY YOU
                    </h1>
                    <div className="txt">
                        Discover a wide variety of premium beauty services tailored to your needs. From revitalizing <br/> facials to indulgent manicures, our treatments are designed to leave you feeling refreshed and radiant.
                    </div>
                </div>
            </section>
            <section className="container">
                <div className=" marginY-detail">
                    <div className="product-text">
                    Startseite / Gutscheine / <span style={{color: '#626664'}}>Classic manicure</span>
                    </div>
                    <div className="voucher-detail-row mt-5">
                        <div className="voucher-detail-column">
                            <img className="object-cover w-100" height={'640'} src={VoucherImg} />
                        </div>
                        <div className="voucher-detail-column">
                            <div className="productDetail-title">Spa Gift Experience</div>
                            <div className="productDetail-price">$200</div>
                            <div className="productDetail-time">
                                <img src={Clock} width={'24'}/>
                                <span className="ps-2">45 min</span>
                            </div>
                            <div className="mt-5 mb-5">
                                <div className="voucherDetail-label">Übersicht</div>
                                <div className="voucherDetail-txt">
                                    Treat your loved ones to a moment of self-care with this exclusive spa experience. Perfect for birthdays, anniversaries, or any special occasion.
                                </div>
                                <div className="voucherDetail-label">Was enthalten ist</div>
                                <div className="voucherDetail-txt">
                                    <ul>
                                        <li>A 60-minute relaxing aromatherapy massage</li>
                                        <li>Complimentary wellness drink</li>
                                        <li>Exclusive access to our wellness lounge</li>
                                    </ul>
                                </div>
                                <div className="voucherDetail-label">Gültigkeit</div>
                                <div className="voucherDetail-txt">
                                    Redeemable within 6 months of purchase                        
                                </div>
                            </div>
                            <div className="productDetail-button">
                                Jetzt kaufen
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VoucherDetail;