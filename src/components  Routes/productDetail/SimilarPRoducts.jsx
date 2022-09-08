import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import CardHome from '../home/CardHome'

const SimilarPRoducts = ({productInfo}) => {


const [filterProducts, setFilterProducts] = useState()

const products = useSelector(state => state.products)

console.log(products)

useEffect(() => {
    if(productInfo){
      const filter = products.filter(e => e.category.name === productInfo.category)
      setFilterProducts(filter)
    }
  }, [productInfo])

  console.log(filterProducts)

  return (
    <div className='container-similar-products'>
        {
            filterProducts?.map(product => {
                if(producInfo.title !== producInfo.title){
                    return <CardHome 
                    key={product.id}
                    product={product}

                    />
                }
            })
        }
    </div>
  )
}

export default SimilarPRoducts