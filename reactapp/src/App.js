import Home from './pages/Home'

import Shop from './pages/Shop'
import Collection from '../src/Amy/pages/Collection'
import Bar from './Amy/components/Bar/index'
import Promotion from './Amy/components/Promotion/index'
import AppDrawer from './Amy/components/Drawer/index'
import { UIProvider } from './Amy/context/UI/index'
import Cart from '../src/Amy/components/Cart/index'

import Hotel from './pages/Hotel'
import Mainphoto from './Elena/components/mainphoto/Mainphoto'
import HotelDetail from './Elena/pages/hotelDetail/HotelDetail'
import HotelList from './Elena/pages/hotelList/HotelList'

import Activity from './pages/Activity'
import ActivityDetail from './Natalie/pages/ActivityDetail'

import Members from './pages/Members'
import Edit from './Abby/pages/Edit'
import Register from './Abby/pages/Register'
import NewPwd from './Abby/pages/NewPwd'
import Order from './Abby/pages/Order'
import MemberInfo from './Abby/pages/MemberInfo'

import React from 'react'
import Header from './components/headers/Headers'
import Footer from './components/Footer/index'
import { Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'

function App() {
  useEffect(() => {
    document.title = 'PawPaws - 寵物生活網'
  }, [])

  return (
    <>
      {/* React Material UI*/}
      <ThemeProvider theme={theme}>
        <Container
          // padding="0"
          disableGutters={true}
          maxWidth={false}
          sx={{ background: '#fff5ea', margin: '0' }}
        >
          <UIProvider>
            <Promotion sx={{ position: 'fixed' }} />
            <Bar sx={{ position: 'fixed' }} />

            <main style={{ minHeight: 600 }}>
              <Routes>
                {/* 設定路由 */}
                {/* http://localhost:3000/home */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* ** Amy ** */}
                {/* http://localhost:3000/shop */}
                <Route path="/shop" element={<Shop />} />
                <Route path="/collection" element={<Collection />} />
                {/* http:localhost:3001/cart */}
                {/* <Route path="/cart" element={<Cart/>} /> */}
                {/* http:localhost:3001/collection */}

                {/* ** Elena ** */}
                {/* http://localhost:3000/hotel */}
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/hotel/hotellist" element={<HotelList />} />
                <Route
                  path="/hotel/hoteldetail/:id?"
                  element={<HotelDetail />}
                />

                {/* ** Natalie ** */}
                {/* http://localhost:3000/activity */}
                <Route path="/activity" element={<Activity />} />
                <Route path="/activity/detail" element={<ActivityDetail />} />

                {/* ** Abby ** */}
                {/* http://localhost:3000/members */}
                <Route path="/members" element={<Members />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Memberinfo" element={<MemberInfo />} />
                <Route path="/NewPwd" element={<NewPwd />} />
                <Route path="/Order" element={<Order />} />

                {/* http://localhost:3000/shopcart */}
                {/* <Route path="/shopcart" element={<shopcart />} /> */}
              </Routes>
            </main>
            <Footer />
            <AppDrawer />
            <Cart />
          </UIProvider>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
