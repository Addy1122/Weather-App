
import "./index.css"
import { useState } from "react"
import axios from "axios"

function App()
{
const [city,setcity]= useState("")
const [weather,setweather]=useState("")
const [temperature,settemperature]=useState("")
const [description,setdescription]=useState("")

function handlecity(evt)
{
    setcity(evt.target.value)
}

function getweather(){
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09d1817fc74c1cd276699078ae11066d`)
    weatherdata.then(function(success){
        console.log(success.data)
        setweather (success.data.weather[0].main)
        setdescription (success.data.weather[0].description)
        settemperature(success.data.main.temp)
    })
}

    return(
        <div className="bg-[#ffffff] p-20 text-center"> 
        <div className="bg-[#8db4c4] p-20  rounded-md">
        <h1 className="font-medium text-2xl">Weather Report </h1>
        <p>I can give you a weather report about your city !</p>
        <input onChange={handlecity}className="mt-4 border rounded-md p-1" placeholder=" Enter City Name"></input> <br/>
        <button onClick={getweather}className="mt-4 bg-black text-white p-1 rounded-md">Get Report</button>
        
        <h1 className="font-medium mt-4" >Weather : {weather}</h1>
        <h1 className="font-medium" >Temperature : {temperature}</h1>
        <h1 className="font-medium" >Description : {description}</h1>
        </div>
        </div>
    )
}
export default App
