/*import React, { useCallback } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
    const [Value, setValue] = useState('')
    const navigate = useNavigate();

    /*const handleSubmit = ()=>{  
        console.log(Value);
        setValue('');
    }

    const handleSubmit = useCallback(()=>{  //same thing can be done by useffect
        navigate(`/room/${Value}`);
    },[navigate,Value])

  return (
    <div>
      <input value={Value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder="Room Code" />
      <button onClick={handleSubmit}>Join Room</button>
    </div>
  )
} */


import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import nabhalogo1 from './nabhalogo1.jpg'

const HomePage = () => {
  const [roomValue, setRoomValue] = useState('')
  const [roleValue, setRoleValue] = useState('')
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    // send both room and role in URL
    navigate(`/room/${roomValue}?role=${roleValue}`);
  }, [navigate, roomValue, roleValue]);

  return (
    <div style={styles.container}>


      <div style={styles.formContainer}>

        <img src={nabhalogo1} alt="Nabha logo" style={{ width: '30vh',height:"10vh" }} />
        <input
          value={roomValue}
          onChange={(e) => setRoomValue(e.target.value)}
          type="text"
          placeholder="Room No."
          style={styles.input}
        />
        <input
          value={roleValue}
          onChange={(e) => setRoleValue(e.target.value)}
          type="text"
          placeholder="Doctor ID/Ptient ID"
          style={styles.input}
        />
        <button onClick={handleSubmit} style={styles.button}>
          Join Call
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#d2dab5ff',
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
  },
  title: {
    margin: '0 0 20px 0',
    color: '#333',
    fontSize: '24px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
}

// Add hover effects
const inputHover = {
  borderColor: '#007bff',
}

const buttonHover = {
  backgroundColor: '#0056b3',
}

// You can add these hover effects using CSS or a CSS-in-JS solution
// For simplicity, I'll show how to add them with inline styles on hover
// But for better practice, consider using CSS classes or a styling library

export default HomePage