import React from 'react'
import { useEffect } from 'react'
import { getAllProducts } from '../store/slices/products.slice'
import {useDispatch, useSelector} from 'react-redux'
import CardHome from './home/CardHome'


const Home = () => {



//useSelector: Para obtener, traer la informacion.
const products = useSelector(state => state.products)

console.log(products)

  return (
    <div className='home'>
      <div className='home__container-card'>
  {
    products?.map(product => (
      <CardHome 
      key={product.id}
      product={product}
      />
    ))
  }
      </div>
    </div>
  )
}

export default Home