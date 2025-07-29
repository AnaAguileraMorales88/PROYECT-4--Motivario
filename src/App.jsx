import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import ShowQuote from './components/quotes/Quotes.jsx'
import Navbar from './components/navbar/NavBar.jsx'
import AddQuote from './components/button/Button.jsx'

function App() {

  return (
    <>
    <header>  <Navbar /> </header>
    <main className='mt-60 md:mt-30 lg:mt-60 flex flex-col items-center gap-4 min-w-[280px] sm:min-w-[320px]'>
      <h1 className='text-center text-4xl font-bold mb-8'> MOTIVA TU DÍA</h1>
    <ShowQuote />
    <AddQuote />
    </main>
         
    </>
  )
}

export default App

