import React, { useContext, useEffect, useState } from 'react';
import { sidebarContext } from '../../../context/SidebarContext';
import "./Sidebar.css";
import SidebarCard from './SidebarCard';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const [data, setData] = useState([]);
    const id = JSON.parse(localStorage.getItem("basket"));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productDetails = await Promise.all(id.map(async (item) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${item.id}`);
                    return res.json();
                }));
                setData(productDetails);
            } catch (err) {
                console.log(err);
            }
        };

        if (id && id.length > 0) {
            fetchData();
        }
    }, [id]);

    const { show, setShow } = useContext(sidebarContext)

    return (
        <div className={`sidebar ${show ? "active" : ""}`}>
            <div className='sidebarHeader'>
                <p> My Cart </p>
                <p> 1 ITEMS </p>
                <i className="fa-solid fa-xmark closeSidebar" onClick={() => setShow(false)}></i>
            </div>
            <div className='sidebarCardMain'>
                {data.map((product) => {
                    return <SidebarCard key={product.id} product={product} />
                })}
            </div>
            <div className='sidebarFooter'>
                <div className='sidebarFooterPrice'>
                    <p className='subtotal'> Subtotal: </p>
                    <p className='subtotalPrice'> 420.99 <span> USD </span> </p>
                </div>
                <Link className='viewCart'> View Cart </Link>
            </div>
        </div>
    );
}
