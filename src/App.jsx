import React from 'react'
import Card from './components/card'

const App = () => {

  return (
    <div className='parent'>
     <Card user='Lavish' age='20'/>
     <Card user='Saini' age='30'/>
     <Card user='Love ish' age='100'/>
    </div>
  )
}

export default App
