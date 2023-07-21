import {Routes , Route ,BrowserRouter} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'


function App() {
  // const Navigate = useNavigate()
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
