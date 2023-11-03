import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './user'
import Friends from './friends'
import Friend from './friend'
 function App() {
  function handleClick(){
    alert('button click')
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

        <button onClick={handleClick}>click</button>
        <button onClick={()=>{alert('click me')}}>click me</button>

    </>
  )
}

export default App
