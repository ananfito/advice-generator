import { useState, useEffect } from 'react'
import './App.css'
import dividerDesktopURL from './assets/pattern-divider-desktop.svg'
import dividerMobileURL from './assets/pattern-divider-mobile.svg'
import diceIconUrl from './assets/icon-dice.svg'

function App() {

  return (
    <div>
      <main className='advice'>
        <h1 className='advice-number'>Advice #117</h1>
        <q className='advice-quote' id='advice-quote'>It is easy to sit up and take notice, what's difficult is getting up and taking action.</q>
        <img className='divider' src={dividerMobileURL} alt="divider with a single horizontal line dvided in half by two vertical lines" />
      
      </main>
      <button className='btn'><img className='dice-icon' src={diceIconUrl} alt="dice icon" /></button>
    </div>
  )
}

export default App
