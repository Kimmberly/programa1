// const element = document.createElement('h1')
// element.innerText='hola mundo'

// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import reactDom from 'react-dom'
import ReactDom from 'react-dom'

const user ={
  firstname: 'Raul',
  lastname: 'Palacios',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user){
  return `${user.firstname} ${user.lastname}`
}

function getGreeting(user){
  if(user){
    return <h1>Hola {getName(user)}</h1>
  }
  return <h1>hola extraño</h1>
}
const name= 'Raul'
// const element= <div>{getGreeting(user)}</div>
// const element= <img src={user.avatar}/>
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
)
const container= document.getElementById('root')

reactDom.render(element, container)