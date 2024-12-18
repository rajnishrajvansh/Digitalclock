import { useEffect, useRef } from "react"
function UseRefHook() {
    const inputRef=useRef(null);

    useEffect(()=>{
        console.log("Document Rendered")
    })
function handleClick(){
    inputRef.current.focus();
}

  return (
    <div>
    Rajnish
      <button onClick={handleClick()}>Click Me</button>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default UseRefHook
