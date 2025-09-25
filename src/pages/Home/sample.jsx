/*import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [roomValue, setRoomValue] = useState('')
  const [roleValue, setRoleValue] = useState('')
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    // send both room and role in URL
    navigate(`/room/${roomValue}?role=${roleValue}`);
  }, [navigate, roomValue, roleValue]);

  return (
    <div>
      <input 
        value={roomValue} 
        onChange={(e) => setRoomValue(e.target.value)} 
        type="text" 
        placeholder="Room Code" 
      />
      <input 
        value={roleValue} 
        onChange={(e) => setRoleValue(e.target.value)} 
        type="text" 
        placeholder="Role (host/guest)" 
      />
      <button onClick={handleSubmit}>Join Room</button>
    </div>
  )
}

export default HomePage;*/
