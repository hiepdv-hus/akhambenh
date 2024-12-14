import SortAscending from "../images/SortAscending.png"
import Clock from "../images/Clock.png"
import Home1 from "../images/home-1.png"
import Home2 from "../images/home-2.png"
import Home3 from "../images/home-3.png"
import Home4 from "../images/home-4.png"
import Home5 from "../images/home-5.png"
import Home6 from "../images/home-6.png"
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const dataProduct = [
        {
            id: 1,
            img: Home1
        },
        {
            id: 2,
            img: Home2
        },
        {
            id: 3,
            img: Home3
        },
        {
            id: 4,
            img: Home4
        },
        {
            id: 5,
            img: Home5
        },
        {
            id: 6,
            img: Home6
        },
        {
            id: 7,
            img: Home1
        },
        {
            id: 8,
            img: Home1
        },
        {
            id: 9,
            img: Home1
        },
    ]

    const handleNavigate = (id) => {
        navigate(`/product-detail`);
    }

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
                <div div className="product-container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="product-text">
                            Startseite / Dienstleistungen / <span style={{color: '#626664'}}>Alle Produkte</span>
                        </div>
                        <div className="product-sort">
                            Sort by
                            <img className="ms-2" src={SortAscending} width={'20px'}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="product-menu">
                                <div className="product-title">
                                    Alle Produkte (20)
                                </div>
                                <div className="product-text mt-4">
                                    Bestseller (20)
                                </div>
                                <div className="product-border"></div>
                                
                                <div className="product-title" style={{color: '#1F2421', fontSize: '20px'}}>
                                    KATEGORIEN
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <input type="checkbox"/>
                                    <div className="product-text ms-2">
                                        Gesichts- und Hautpflege (20)
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <input type="checkbox"/>
                                    <div className="product-text ms-2">
                                        Wimpern & Augenbrauen (20)
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <input type="checkbox"/>
                                    <div className="product-text ms-2">
                                        Massagen (20)
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <input type="checkbox"/>
                                    <div className="product-text ms-2">
                                        Gesichts- und Hautpflege (20)
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <input type="checkbox"/>
                                    <div className="product-text ms-2">
                                        Haarentfernung (20)
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <input type="checkbox"/>
                                    <div className="product-text ms-2">
                                        Pediküre (20)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <div className="row">
                                {dataProduct.length > 0 && dataProduct.map((product, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-md-6 d-flex mb-4">
                                            <div className="product-item cursor-pointer w-100" onClick={handleNavigate}>
                                                <img className="product-item-img w-100" src={product.img} />
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
                                    );
                                })}
                            </div>
                            <div className=" d-flex justify-content-center mt-5">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a className="page-link" >{'<'} Zurück</a></li>
                                        <li class="page-item"><a className="page-link active" >1</a></li>
                                        <li class="page-item"><a className="page-link" >2</a></li>
                                        <li class="page-item"><a className="page-link" >3</a></li>
                                        <li class="page-item"><a className="page-link" >Weiter {'>'}</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product;