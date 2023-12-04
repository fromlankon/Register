import React, { useState, useEffect } from 'react'
import "../components/Details.css"
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { detailsData } from '../services/products'

export default function Details() {

    const [item, setItem] = useState({})
    let { id } = useParams();

    useEffect(() => {
        detailsData(id)
            .then((res) => {
                setItem(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Header />
            <Navbar />
            <div id='details'>
                <div className="detailsMain">
                    <div className="leftSide">
                        <div className='detailsImage'>
                            <img src={item.image} />
                        </div>
                        <div className="moreImages">
                            <div>
                                <img src="https://kontakt.az/media/catalog/product/cache/b34559cb8eb520f2bea0d3245ba154fd/t/m/tm-dg-sbp-1105-sm-2487-2_1.png" />
                            </div>
                            <div>
                                <img src="https://kontakt.az/media/catalog/product/cache/b34559cb8eb520f2bea0d3245ba154fd/t/m/tm-dg-sbp-1105-sm-2487-3_1.png" />
                            </div>
                            <div>
                                <img src="https://kontakt.az/media/catalog/product/cache/b34559cb8eb520f2bea0d3245ba154fd/t/m/tm-dg-sbp-1105-sm-2487-5.png" />
                            </div>
                            <div>
                                <img src="https://kontakt.az/media/catalog/product/cache/b34559cb8eb520f2bea0d3245ba154fd/t/m/tm-dg-sbp-1105-sm-2487-6.png" />
                            </div>
                        </div>
                    </div>
                    <div className="rightSide">
                        <p className='brandName'> BRAND NAME </p>
                        <p className='brandTitle'> {item.title} </p>
                        <div className='ratingSection'>
                            <div className='rate'>
                                <div className="stars">
                                    <i className="bi bi-star-fill yellowStar"></i>
                                    <i className="bi bi-star-fill yellowStar"></i>
                                    <i className="bi bi-star-fill yellowStar"></i>
                                    <i className="bi bi-star-fill yellowStar"></i>
                                    <i className="bi bi-star-fill grayStar"></i>
                                </div>
                                <div className="rating"> 4.0 </div>
                            </div>
                            <div className='socialIcons'>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <p className='brandDescription'> {item.description} </p>
                        <div className='options'>
                            <div className='colorOptions'>
                                <p className='setColor'> Color </p>
                                <div className='brandColor'>
                                    <div className='colorWhite'></div>
                                    <div className='colorDark'></div>
                                    <div className='colorRed'></div>
                                </div>
                            </div>
                            <div className='size'>
                                <p className='setColor'> Size </p>
                                <select>
                                    <option> 64 GB </option>
                                    <option> 128 GB </option>
                                    <option> 256 GB </option>
                                    <option> 512 GB </option>
                                </select>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='brandPrice'> ${item.price} </div>
                            <div className='addTo'>
                                <div className='addToWishList'>
                                    <i className="bi bi-heart-fill"></i>
                                </div>
                                <button className='addToCart'> <i className="bi bi-cart3"></i> Add to cart </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
