import React, { useEffect, useState } from 'react';

const url = 'https://sweta-serverless-functions.netlify.app/api/2-basic-api';

const Basic = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>basic-api setup</h2>
        <div className='title-underline'></div>
      </div>
      <div className='products'>
        {products.map((product) => {
          //   console.log(product);
          const {
            id,
            fields: { name, price, image },
          } = product;
          const { url } = image[0];
          return (
            <article className='product' key={id}>
              <img src={url} alt={name} />
              <div className='info'>
                <h5>{name}</h5>
                <h5 className='price'>{price}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Basic;
