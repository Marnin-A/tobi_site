import React from 'react'
import ProductList from './ProductList'
import {products} from "../../product.js"
import './product.css'

const Product = () => {
        
  return (
    <div className='product-container'>
        <center>
        <h1>Our Products</h1>
        </center>
        <div className='cards-container'>
            {products.map((item, i) => (
                <ProductList 
                key={i} 
                id= {item.id}
                description={item.description}
                image={item.image}
                price={item.price}
                btnText={item.btnText}
                amount={item.amount}
                title={item.title}
                />
            ))}
        </div>
    </div>
  )
}

export default Product