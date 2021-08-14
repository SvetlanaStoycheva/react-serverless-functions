import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const data = useParams();
  const id = data.productID;

  const fetchData = async () => {
    try {
      const response = await fetch(`api/products?id=${id}`);
      const data = await response.json();
      // console.log(data);
      setProduct(data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <section className='section section-center'>Loading...</section>;
  }
  const { fields } = product;
  const { name, desc, price, image } = fields;

  return (
    <section className='section section-center'>
      <Link to='/' className='link'>
        Back Home
      </Link>
      <div>
        <div className='title'>
          <h2>{name}</h2>
          <div className='title-underline'></div>
        </div>
        <article className='single-product'>
          <img src={image[0].url} className='single-product-img' alt='' />
          <div>
            <h5>{name}</h5>
            <h5 className='price'>${price}</h5>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Product;
