import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user='Karthik' age={21}/>
      <Card user='Anvika' age={3}/>
      
    </div>
  )
}

export default App
