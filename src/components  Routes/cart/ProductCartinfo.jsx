import axios from 'axios'
import React from 'react'
// import productsSlice from '../../store/slices/products.slice'
// import getConfig from '../../utils/getConfig'

const ProductCartinfo = ({product, getAllProductsCart}) => {

const handleDeleteProduct = () => {
  const URl = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
  axios.delete(URl, getConfig())
  .then(() => getAllProductsCart())
  .cath(err => console.log(err))
}


  return (
    <article className='cart__item'>
    <header className='cart__item-header'>
      <h4 className='cart__category'>{product.brand}</h4>
      <h3 className='cart__name'>Samsung Galaxy S22</h3>
    </header>
    <i onClick={handleDeleteProduct} className="cart__trash fa-regular fa-trash-can"></i>
    <span className='cart__quantity'>{product.productsInCart.quantiy}</span>
    <footer className='cart__item-footer'>
      <span className='cart__total-label'>Total:</span>
      <p className='cart__total-number'>{product.price}</p>
    </footer>
  </article>

  )
}

export default ProductCartinfo