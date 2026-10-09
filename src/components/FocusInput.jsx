import { useRef, useState } from 'react'

const FocusInput = () => {
    const [text, setText]=useState("")


    const reference=useRef(null)
    
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleFocus=()=>{
        reference.current.focus()
    }

    const handleClear=()=>{
        setText("")
    }


    // useEffect(()=>{
    //     reference.current.focus()
    // },[])
  return (
    <>
      <input type="text" ref={reference} value={text} onChange={handleChange} placeholder="Enter text" />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleClear}>Clear</button>
    </>
  )
}

export default FocusInput