import logoBanner from "../images/logo-vang-co-hinh.png"
import ArrowRight from "../images/ArrowRight.png"
import Care from "../images/care.png"
import CareLogo from "../images/care-logo.png"
import ArrowUpRight from "../images/ArrowUpRight.png"
import Event from "../images/Event.png"
import Clock from "../images/Clock.png"
import Home1 from "../images/home-1.png"
import Home2 from "../images/home-2.png"
import Home3 from "../images/home-3.png"
import Home4 from "../images/home-4.png"
import Home5 from "../images/home-5.png"
import Home6 from "../images/home-6.png"
const Home = () => {
  return (
    <div>
        <section className="banner">
            <div className="banner-container">
                <img src={logoBanner} width={'233'}/>
                <h1 className="banner-heading">
                    GRACEFUL TOUCHES, <br/>
                    INSPIRED BY YOU
                </h1>
                <div className="jetztBuchen">
                    Jetzt buchen
                    <img src={ArrowRight} width={'22'}/>
                </div>
            </div>
        </section>
        <section>
            <div className="care">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 m-md-0 p-md-0 d-flex">
                        <div className="care-left">
                            <div className="care-left-txt">Strahlende Schönheit, neu definiert – nur für Sie. </div>
                            <img src={Care} width={'100%'}/>
                        </div>
                    </div>
                    <div className="col-md-6 m-md-0 p-md-0 d-flex">
                        <div className="care-right text-center">
                            <img src={CareLogo} width={'240'}/>
                            <div className="care-right-title mt-2">
                                Mit Herz und Leidenschaft
                            </div>
                            <div className="care-right-txt mt-2">
                                Bei Terra Beauty & Care, feiern wir Ihre natürliche Schönheit. Unser Team kombiniert moderne Techniken mit individueller Pflege für revitalisierende Gesichtsbehandlungen, elegante Nägel und entspannende Massagen – ganz auf Sie abgestimmt.
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div style={{marginTop: '112px', marginBottom: '72px'}}>
                    <div className="section-title text-center">
                        Genießen Sie unsere einzigartigen Behandlungen.
                    </div>
                    <div className="section-txt text-center">
                        Genießen Sie unsere einzigartigen Behandlungen.
                    </div>
                </div>
                <div className="row category-lst">
                    <div className="col-lg-4 col-md-6">
                        <div className="category-item category-item1 position-relative mb-4">
                            <div className="category-content">
                                <div className="title">
                                    Gesichts- und Hautpflege
                                </div>
                                <div className="content">
                                    Umfassende Gesichtspflege, einschließlich aufhellender, verjüngender und kombinierter Therapien für strahlende Haut.
                                </div>
                                <div className="bottom">
                                    mehr Details
                                    <img width={'16px'} src={ArrowUpRight}/>
                                </div>
                            </div>
                        </div>
                        <div className="category-item category-item2 position-relative mb-4">
                            <div className="category-content">
                                <div className="title">
                                    Gesichts- und Hautpflege
                                </div>
                                <div className="content">
                                    Umfassende Gesichtspflege, einschließlich aufhellender, verjüngender und kombinierter Therapien für strahlende Haut.
                                </div>
                                <div className="bottom">
                                    mehr Details
                                    <img width={'16px'} src={ArrowUpRight}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="category-item category-item3 position-relative mb-4">
                            <div className="category-content">
                                <div className="title">
                                    Gesichts- und Hautpflege
                                </div>
                                <div className="content">
                                    Umfassende Gesichtspflege, einschließlich aufhellender, verjüngender und kombinierter Therapien für strahlende Haut.
                                </div>
                                <div className="bottom">
                                    mehr Details
                                    <img width={'16px'} src={ArrowUpRight}/>
                                </div>
                            </div>
                        </div>
                        <div className="category-item category-item4 position-relative mb-4">
                            <div className="category-content">
                                <div className="title">
                                    Gesichts- und Hautpflege
                                </div>
                                <div className="content">
                                    Umfassende Gesichtspflege, einschließlich aufhellender, verjüngender und kombinierter Therapien für strahlende Haut.
                                </div>
                                <div className="bottom">
                                    mehr Details
                                    <img width={'16px'} src={ArrowUpRight}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="category-item category-item5 position-relative mb-4">
                            <div className="category-content">
                                <div className="title">
                                    Gesichts- und Hautpflege
                                </div>
                                <div className="content">
                                    Umfassende Gesichtspflege, einschließlich aufhellender, verjüngender und kombinierter Therapien für strahlende Haut.
                                </div>
                                <div className="bottom">
                                    mehr Details
                                    <img width={'16px'} src={ArrowUpRight}/>
                                </div>
                            </div>
                        </div>
                        <div className="category-item category-item6 position-relative mb-4">
                            <div className="category-content">
                                <div className="title">
                                    Gesichts- und Hautpflege
                                </div>
                                <div className="content">
                                    Umfassende Gesichtspflege, einschließlich aufhellender, verjüngender und kombinierter Therapien für strahlende Haut.
                                </div>
                                <div className="bottom">
                                    mehr Details
                                    <img width={'16px'} src={ArrowUpRight}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="home-event" style={{ backgroundImage: `url(${Event})` }}></div>
        </section>
        <section className="mb-5">
            <div style={{marginTop: '30px', marginBottom: '72px'}}>
                <div className="section-title text-center">
                    Kundenfavoriten
                </div>
                <div className="section-txt text-center">
                    Entdecken Sie unsere beliebtesten Dienstleistungen für Qualität und Ergebnisse.
                </div>
            </div>
            <div className="container-fluid mb-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="product-lst">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home1} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home2} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home3} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home4} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-lst">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home5} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home6} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home3} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 d-flex">
                                        <div className="product-item">
                                            <img className="product-item-img" src={Home4} />
                                            <div className="product-item-content text-center">
                                                <div className="title">Service title</div>
                                                <div className="txt">200€</div>
                                                <div className="txt">
                                                    <img src={Clock} width={'24'}/>
                                                    45 min
                                                </div>
                                                <div className="button">
                                                    Termin
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
};

export default Home;