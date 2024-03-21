import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/Homepage.css";
import { Link } from 'react-router-dom';
import phones  from '../Products/Phones_List';
import watches from '../Products/Watches_list';

const Homepage = () => {

  return (
    <Layout>
      <h2>Welcome to PRICESNAP</h2>

      <div className='maindiv'>
        <h3>Category:Phones</h3>
      <div className="product-grid">
        {phones.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/Product${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <h3>Category:Watches</h3>
      <div className="product-grid">
        {watches.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/Product${product.id}`}>View Details</Link>
          </div>
          
        ))}
      </div>
      </div>
    </Layout>
  );
};

export default Homepage