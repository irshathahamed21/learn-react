


import {useState, useEffect} from "react"

import "../App.css"
function ProductsData(){
 
    const[data, setData] = useState([])
    const[price, setPrice] = useState(0)
    const[sorting, setSorting] = useState("none")

    async function getData(){
        await fetch("https://fakestoreapi.com/products")
        .then(
            (res) => (res.json())
        )
        .then(re => {console.log(data); setData(re) })
    }

    useEffect(() => {
    
        getData()
     
    }, [] )



    return (
        <>
        <div>Products page </div>
        <button onClick={() => {setPrice(0)}}>price- any</button>
        <button onClick={() => {setPrice(100)}}>price {">"} 100</button>


        <button onClick={() => {setSorting("lowtohigh")}}>lowtohigh</button>
        <button onClick={() => {setSorting("hightolow")}}>hightolow</button>
       
       
        <div className = "restaurant-data">
        {data.filter(e => e.price >= price)
        .sort(
            function(a,b) {
                if(sorting ==="lowtohigh"){
                    return a.price - b.price
                }
                if(sorting === "hightolow"){
                    return b.price-a.price
                }
            }
        ) 
            
        
        .map((e) => (
            <div key = {e.id}>
                <div>
                    {e.title}
                </div>
                <img src = {e.image}/>
                <div>{e.price}</div>

            </div>
        ))}
        </div>
       


        </>
    )





}
export {ProductsData}