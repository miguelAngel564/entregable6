import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components  Routes/Home'
import ProductDetail from './components  Routes/ProductDetail'
import Login from './components  Routes/Login'
import Purchase from './components  Routes/Purchase'
import Header from './components  Routes/shared/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './components  Routes/shared/Cart'
import ProtectedRoutes from './components  Routes/shared/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'


function App() {
  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: 'miguel',
  //     lastName: 'angel',
  //     email: 'aubaarsenal9@gmail.com',
  //     password: 'Quique24',
  //     phone: '991388706',
  //     role: 'student'
  //   }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])

// despachar

const [pro, setPro] = useState()

useEffect(() => {
  axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res => console.log(res.data))
}, [])


const dispatch = useDispatch()



useEffect(() => {
    dispatch(getAllProducts())
},[])


  return (
    <div className='app'>
<Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='/product/:id' element={<ProductDetail></ProductDetail>} />
  
  <Route element={<ProtectedRoutes></ProtectedRoutes>}>
      <Route path='/purchase' element={<Purchase />} />
      <Route path='/cart' element={<Cart></Cart>} />
     </Route>
    </Routes>
    </div>
  )
}
export default App

