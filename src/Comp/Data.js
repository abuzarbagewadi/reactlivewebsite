import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Data() {

    const [varb, setVar] = useState({})
    const [num, setNum] = useState(1)
    const [buttonClickid, setbuttonClickid] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickid}`)
        .then(result => {
            setVar(result.data)
        })
        .catch(ex => {
            alert(ex)
        })
    },[buttonClickid])

    return (
        <div>
            <h2>Enter any integer </h2>
            <div><input value={num} onChange={e => setNum(e.target.value)} className="in"/></div>
            <button className='center' onClick={() => setbuttonClickid(num)}>Get Text</button>

            <h3>The corresponding string is:</h3>
            <p className='block'>"{varb.title}"</p>            
        </div>
    )
}

export default Data