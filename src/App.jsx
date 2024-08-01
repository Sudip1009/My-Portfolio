import { useState } from 'react'
import AppRouter from './router/AppRouter';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {


  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
    <Navbar />
    <AppRouter />
    <Footer />
  </div>
  )
}

export default App
