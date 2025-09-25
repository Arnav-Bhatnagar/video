import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home'
import RoomPage from './pages/Room'
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/room/:id' element={<RoomPage/>}/>  //dynamically i get room id
    </Routes>
  )
}

export default App
