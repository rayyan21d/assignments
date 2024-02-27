import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCrad'

function App() {

  return (


    <>
      <div className='grid grid-cols-3'>
        
      <RevenueCard title="Total Orders" orderCount={100} amount={1000} />

      </div>

    </>


  )
}

export default App
