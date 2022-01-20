
import {useState } from "react"
import '../../App.css';
function Hooks(){

    const[count, setCount] = useState(0)


    return (
        <>
        <div >
            <h1>hello</h1>
        <div>count:{count}</div>
        <button onClick = {()=>{setCount(count+1)}}>+</button>
        <button onClick = {()=>{setCount(count-1)}}>-</button>
        </div>
        </>
    )

}
export {Hooks}