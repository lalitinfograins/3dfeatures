import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/common/Footer';
import Header from '../components/common/Header'
import Home from '../components/landing/Home';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default Index
