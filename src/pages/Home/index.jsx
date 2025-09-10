import React, { useCallback } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
    const [Value, setValue] = useState('')
    const navigate = useNavigate();

    /*const handleSubmit = ()=>{  
        console.log(Value);
        setValue('');
    }*/

    const handleSubmit = useCallback(()=>{  //same thing can be done by useffect
        navigate(`/room/${Value}`);
    },[navigate,Value])

  return (
    <div>
      <input value={Value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder="Room Code" />
      <button onClick={handleSubmit}>Join Room</button>
    </div>
  )
}

export default HomePage
