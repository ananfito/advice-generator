import { useState, useEffect } from 'react'
import './App.css'
import dividerDesktopURL from './assets/pattern-divider-desktop.svg'
import dividerMobileURL from './assets/pattern-divider-mobile.svg'
import diceIconUrl from './assets/icon-dice.svg'

function App() {
  const dividerUrl = window.innerWidth < '600px' ? dividerMobileURL : dividerDesktopURL
  const [adviceData, setAdviceData] = useState({
    advice: "If you don't want something to be public, don't post it on the Internet.",
    number: 85
  })
  const [slipId, setSlipId] = useState(85)

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${slipId}`)
      .then(res => res.json())
      .then(data => {
        setAdviceData(prevAdviceData => ({
          advice: data.slip.advice,
          number: data.slip.id
        }))
      })
  }, [slipId])

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 100)
    setSlipId(randomNumber)
  }
   
  return (
    <div className='container'>
      <div className='advice'>
        <h1 className='advice-number'>Advice #{adviceData.number}</h1>
        <q className='advice-quote' id='advice-quote'>{adviceData.advice}</q>
        <img className='divider' src={dividerUrl} alt="divider with a single horizontal line dvided in half by two vertical lines" />
      
      </div>
      <button className='btn' onClick={handleClick}><img className='dice-icon' src={diceIconUrl} alt="dice icon" /></button>
    </div>
  )
}

export default App
