import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductPurchase from './ProductPurchase'

const PurchaseCard = ({purchase}) => {

console.log(purchase)

  return (
    <article className='card-purchase'>
        <h3 className="card-purchase__date">{purchase.createdAt}</h3>
    <div className="card-purchase__body">
        {
            purchase.cart.products.map(product => (
                <ProductPurchase 
                key={product.id}
                product={product}
                />
            ))
        }
    </div>
    </article>
  )
}

export default PurchaseCard