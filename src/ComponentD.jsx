import { useContext } from "react"
import { UserContext } from "./ComponentA"

function ComponentD() {
  const user=useContext(UserContext)
  return (
    <div className="box-container">
      <h1>Comopnet D</h1>
      Bye {user}
    </div>
  )
}

export default ComponentD
