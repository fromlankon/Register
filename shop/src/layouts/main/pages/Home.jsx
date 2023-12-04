import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { getData } from '../services/products'
import "../components/Main.css"
import Footer from '../components/Footer'

export default function Home() {

    const [product, setProduct] = useState([]);
    const [oldData, setoldData] = useState([])
    const [query, setQuery] = useState("");
    
    useEffect(() => {
      getData().then((res) => {
        setProduct(res);
        setoldData(res)
      });
    }, []);
  
    useEffect(() => {
      setProduct(
        oldData.filter((item) => {
          if (item.title.toLowerCase().includes(query.toLowerCase())) {
            return item;
          }
        })
      );
    }, [query]);

    return (
        <div>
            <div className='headerPosition'>
                <Header />
                <Navbar setQuery={setQuery} />
            </div>
            <div className='cards'>
                <div className='cardsMain'>
                    {product.map((item) => {
                        return <Card key={item.id} item={item} />
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}