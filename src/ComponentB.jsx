import ComponentC from "./ComponentC"

function ComponentB() {
  return (
    <div className="box-container">
    <h1>Component B</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB
