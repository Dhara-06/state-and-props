import { useRef, useEffect, useState } from "react";

const PreviousValue = () => {

    const [count, setCount] = useState(0)

    const previousCount = useRef(null)

    useEffect(() => {
        previousCount.current = count

    }, [count])

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h4>Currect Count: {count}</h4>
            <h4>
                Previous: {previousCount.current === null ? "No Value" : previousCount.current}
            </h4>
            <button onClick={handleIncrement}>Increment</button><br/>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default PreviousValue