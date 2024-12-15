
import ProductDetail1 from "../images/product-detail1.png"
import ProductDetail2 from "../images/product-detail2.png"
import ProductDetail3 from "../images/product-detail3.png"
import ProductDetail4 from "../images/product-detail4.png"
import Clock from "../images/Clock.png"

const ProductDetail = () => {

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
                <div className="product-text marginY-detail">
                Home / Service / Shop all / <span style={{color: '#626664'}}>Classic manicure</span>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="object-cover w-100" height={'600'} src={ProductDetail1} />
                        <div className="row mt-3">
                            <div className="col-4">
                                <img className="object-cover w-100" height={'150'} src={ProductDetail2} />
                            </div>
                            <div className="col-4">
                                <img className="object-cover w-100" height={'150'} src={ProductDetail3} />
                            </div>
                            <div className="col-4">
                                <img className="object-cover w-100" height={'150'} src={ProductDetail4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="productDetail-title">Classic Manicure</div>
                        <div className="productDetail-price">$200</div>
                        <div className="productDetail-time">
                            <img src={Clock} width={'24'}/>
                            <span className="ps-2">45 min</span>
                        </div>
                        <div className="product-txt mt-3 mb-3">
                            Gönnen Sie sich ein sorgfältig gestaltetes Maniküre-Erlebnis, das darauf abzielt, Ihre Hände zu verwöhnen und Ihren Stil zu perfektionieren. Diese 45-minütige Behandlung beginnt mit einer gründlichen Nagelreinigung und sanfter Peeling, um sicherzustellen, dass Ihre Nägel gesund und vorbereitet sind. Unsere erfahrenen Techniker formen Ihre Nägel sorgfältig, ganz nach Ihrem gewünschten Stil – sei es ein natürlicher Look oder ein mutiges, modisches Design.
                            <br/><br/>
                            Anschließend widmen wir uns der Nagelhautpflege, um diese zu erweichen und zu säubern und einen makellosen Abschluss zu gewährleisten. Genießen Sie eine beruhigende Handmassage mit unserer signierten Feuchtigkeitslotion, die Ihre Hände seidig glatt hinterlässt. Zum Abschluss wählen Sie Ihren Lieblingsnagellack aus einer umfangreichen Palette hochwertiger Farben, einschließlich saisonaler Töne und klassischer Favoriten.
                            <br/><br/>
                            Für eine langanhaltende Wirkung können Sie auf Gel-Nagellack umsteigen, der zusätzliche Haltbarkeit und Glanz bietet – ideal für besondere Anlässe oder hektische Zeitpläne. Ob Sie sich auf ein großes Event vorbereiten oder sich einfach etwas gönnen möchten, unsere klassische Maniküre sorgt dafür, dass Ihre Hände makellos aussehen und sich verjüngt anfühlen.
                        </div>
                        <div className="productDetail-button">
                            Termin
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail;