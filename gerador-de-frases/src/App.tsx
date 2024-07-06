import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'

function App() {
  

  return (
    <div className='container'>

      <img
       src={Logo}
        alt="Logo frases"
        className='logo'
        />

      <h2 className='title'>Categoria</h2>

      <section  className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>bem estar</button>
      </section>

      <button className='button-frase'>Gerar frase</button>

      <p className='textoFrase'>Alguma frase vai vir aqui </p>
    </div>
  )
}

export default App
