


import { useEffect, useState } from "react";

function Counter(){
const[count, setCount] = useState(0)

const decreaseCounter = ()=> {
    return setCount(count-1)
}


useEffect(()=> {
    console.log("I will run for only one time after component re")
},[])


useEffect(()=> {
     document.title= `you clicked the counter ${count} times`
})

    return  (
        <>
        <div>count: {count}</div>
        <button onClick={()=> {setCount(count+1)}}>Add</button>
        <button onClick = {decreaseCounter}>Sub</button>
        </>
    )

}

export {Counter}