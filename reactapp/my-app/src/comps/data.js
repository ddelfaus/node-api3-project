import React, {useState, useEffect} from "react"
import axios from "axios"
import DataCard from "../comps/dataCard"



function Data(props) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://davtest2.herokuapp.com/api/user`)
        .then(res => {
            console.log(res, "apistuff")
           setPeople(res.data)
           console.log(people)
            
        })
        .catch(err => {
            console.log("There was an error, ", err)
        })
    },[])

    return (
        <>
            <h1> Ello!</h1>

            {people.map(item => (
                <DataCard key={item.id} character ={item}/>
            ))}
        </>

    )
}


export default Data