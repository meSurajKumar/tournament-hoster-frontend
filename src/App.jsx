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
        <Route path='/home' element={<Home/>}  />
        <Route path='/' element={<Signup/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/> 
       {/* <Route path='/' element={<Navigate to='/home' />} />  */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
