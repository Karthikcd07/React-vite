// App.jsx parent is main.jsx
// A function can return only one value at a time(So we use Fragements)
import React from 'react'

const App = () => {
  return (
    <>
    <div id='dad'>
      <h1 id='child1'>Hello</h1>
      <h2 id='child2'>Hello</h2>
    </div>
    <div id='Grandpa'>
      <h3>Hello everyone</h3>
    </div>
    </>
  )
}

export default App

