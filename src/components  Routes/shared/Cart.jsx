import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCartinfo from '../cart/ProductCartinfo'
import getConfig from '../../utils/getConfig'
import { getAllProducts } from '../../store/slices/products.slice'
import './styles/cart.css'

const Cart = () => {

const [cartProducts, setCartProducts] = useState()
const [totalprice, setTotalprice] = useState()


    // getConfig

    // const config = {
    //     // hay varias propiedades de header, en este caso Authorization, siempre es de la miusma manera para ingresasr a los elemntos protegidos
    //     headers: {
    //        Authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    // }

//localStorage es parte de window del navegador

const getAllProductsCart = () => {
    const URl = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URl, getConfig())
    .then(res => {
        const products = res.data.data.cart.products
        setCartProducts(products)
        const total = products.reduce((acc, cv) => {
            return Number(cv.price) * cv.productsInCar.quantity + acc
        }, 0)
        setTotalprice(total)
    })
    .catch(err => console.log(err))
}

useEffect(() => {
    getAllProductsCart()
},[])

const handelCheckout = () => {
    const URl = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"
      }  
    axios.post(URl, obj, getConfig())
    .then(res => {
        console.log(res.data)
        getAllProductsCart()
        setTotalprice(0)
    })
    .catch(err => console.log(err))
}

console.log(cartProducts)
  return (
   <article className='cart'>
    <h2 className='cart__title'>Cart</h2>
 {
    cartProducts?.map(product => (
        <ProductCartinfo 
        key={product.id}
        product={product}
        // llamamos a esa funcion para el delete
        getAllProductsCart={getAllProductsCart}
        />
    ))
 }
    <hr className='cart__hr'/>
    <footer className='cart__footer'>
        <span className='cart__total-global-label'>Totqal:</span>
        <p className="cart__total-global-label">1350</p>
        <button onClick={handelCheckout} className='cart__btn'>Checkout</button>
    </footer>
   </article>
  )
}

export default Cart