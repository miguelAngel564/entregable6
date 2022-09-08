import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from './productDetail/ProductDescription'
import SimilarPRoducts from './productDetail/SimilarPRoducts'

const ProductDetail = () => {

const [productInfo, setProductInfo] = useState()

const { id } = useParams()

useEffect(() => {
  // id, porque esso es lo que viene del parametroo de arriba
  const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
  axios.get(url)
  .then( res => setProductInfo(res.data.data.product))
  .catch(err => console.log(err))
},[])
console.log(productInfo)
  return (
    <div>
      <ProductDescription 
      productInfo={productInfo}
      />
      <SimilarPRoducts 
      category={productInfo}
      />
    </div>
  )
}

export default ProductDetail