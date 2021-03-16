import React, { createContext, useState } from "react"

export const GridContext = createContext()

export const GridProvider = (props) => {
  const [grids, setGrids] = useState([])

  const getGrids = () => {
    return fetch("http://localhost:8088/grids")
    .then(res => res.json())
    .then(setGrids)
  }

  const saveGrid = async (obj) => {
    return await fetch("http://localhost:8088/grids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(getGrids)
  }

  return (
    <GridContext.Provider value={{
      grids, getGrids, saveGrid
    }}>
      {props.children}
    </GridContext.Provider>
  )
}