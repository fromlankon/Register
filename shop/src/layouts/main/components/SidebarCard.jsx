import React, { useEffect, useState } from 'react'

export default function SidebarCard({product}) {

    const [value, setValue] = useState(1)
    useEffect(() => {
        const basket = JSON.parse(localStorage.getItem("basket"))
        basket.map((item) => {
            setValue(item.quantity)
        })
    }, [])
    
    const handleChange = (e) => {
        setValue(value)
    }

    return (
        <div className='sidebarCard'>
            <i className="fa-regular fa-trash-can deleteItem"></i>
            <div className='sidebarCardImage'>
                <img src={product.image} />
            </div>
            <div className='sidebarCardData'>
                <p className='sidebarCardTitle'> {product.title.split(" ").slice(0, 5).join(' ')} </p>
                <div className='incDec'>
                    <div className='increase'>
                        <i className='fa-solid fa-minus'></i>
                    </div>
                    <div>
                        <input type="text" value={value} onChange={handleChange} />
                    </div>
                    <div className='decrease'>
                        <i className='fa-solid fa-plus'></i>
                    </div>
                </div>
                <p className='sidebarCardPrice'> {product.price} <span> USD </span> </p>
            </div>
        </div>
    )
}
