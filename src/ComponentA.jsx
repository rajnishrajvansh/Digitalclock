import { useState } from "react"
import ComponentB from "./ComponentB"
import { createContext } from "react"
export const UserContext=createContext();

function ComponentA() {
    const [user,setuser]=useState("Rajnish")
  return (
    <div className="box-container">
    <h1>Component A</h1>
    <h2>{`Hello ${user}`}</h2>
    <UserContext.Provider value={user}>
      <ComponentB/>
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
