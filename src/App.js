import React from 'react'
import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimals() {
    const animals = ['cat' , 'cow', 'bird', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random()*animals.length)]
}
console.log(getRandomAnimals())

export default function App() {
    const [animals, setAnimals] = useState([])

    const handleClick = () =>{
        setAnimals([...animals,getRandomAnimals()])
    }

    const renderAnimals = animals.map((animal,index )=>
        <AnimalShow type={animal} key={index} />
    )

  return (
    <div className='app'>
        <button onClick={handleClick}>Add Animals</button>
        <div className='animals-list'>{renderAnimals}</div>
    </div>
  )
}
