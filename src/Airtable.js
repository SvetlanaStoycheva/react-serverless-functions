import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = 'api/products';

const Airtable = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>Airtable</h2>
        <div className='title-underline'></div>
      </div>
      <div className='products'>
        {products.map((product) => {
          const { id, name, url, price } = product;
          return (
            <Link to={`/${id}`} className='product' key={id}>
              <img src={url} alt={name} />
              <div className='info'>
                <h5>{name}</h5>
                <h5 className='price'>${price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Airtable;
