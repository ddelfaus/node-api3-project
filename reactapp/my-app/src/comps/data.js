import React, {useState, useEffect} from "react"
import axios from "axios"




function Data() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/users/`)
        .then(res => {
            console.log(res, "apistuff")
           setUsers(res)
            
        })
        .catch(err => {
            console.log("There was an error, ", err)
        })
    },[])

    return (
        <>
            <h1> Ello!</h1>
        </>

    )
}


export default Data