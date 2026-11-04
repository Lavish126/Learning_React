import React from 'react'


const Card = (props) => {
  return (
    <div className="card">
      <h1>Hello from {props.user}</h1>
      <h4>Age is {props.age}</h4>
      <br />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro?</p>
      <br />
      <button id='button'>View Profile</button>
    </div>
  )
}

export default Card