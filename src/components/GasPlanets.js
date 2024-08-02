import React from 'react'

export default function GasPlanets() {

    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
      ]
    
  return (
    <div>
      
{/* 
    {planets.filter((planet)=>{
        return planet.isGasPlanet === true
    }).map((val)=>{
        return <>{val.name}</>
    })} */}

{/* 
    {planets.map((planet)=>{
        return <>{planet.isGasPlanet && <h1>{planet.name}</h1> } </>
    })} */}






    {planets.map((planet, key)=>{
      return planet.isGasPlanet && <h1>{planet.name}</h1>
    })}


    </div>
  )
}
