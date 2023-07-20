import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const baseUrl = import.meta.env.VITE_BASE_URL
import '../css/Submit.css'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make API request
      axios.post(`${baseUrl}/api/v1/auth/user/login`, { email, password })
        .then((response) => {
          // Handle successful login
          navigate("/home")
          console.log(response.data);
          // Store authentication tokens or redirect the user
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
          // Show error message to the user
        })
    }
  return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required /><br></br>
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required /><br></br>
      <button type="submit" className='submitButton'>Login</button>
    </form>
  </div>
  )
}
