import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className="cards">
        <img src='https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
        <h1>{props.user},{props.age}</h1>
        <p>Ich bin ein und zwanzig jahre alt,Ich komme aus Indien</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
