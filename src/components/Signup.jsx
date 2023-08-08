import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/Signup.css';
import '../css/Submit.css'
const baseUrl = import.meta.env.VITE_BASE_URL



export default function Signup() {
  const [formData, setFormData] = useState({ email: '', name: '', password: '', role: '', teamName: '', phone: '' })
  const navigate = useNavigate()

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/auth/user/signup`, formData)
      // console.log('response : ', response.data)
      navigate('/home')
    } catch (error) {
      console.log('error : ', error)
    }

  }

  return (
    <div >
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} >
        <input type='name' name='name' autoComplete='off' placeholder='Enter Username' value={formData.name} onChange={handleFormChange} />
        <br></br>
        <input type='email' name='email' autoComplete='off' placeholder='Enter Email' value={formData.email} onChange={handleFormChange} />
        <br></br>

        <input type='password' name='password' autoComplete='off' placeholder='Enter Password' value={formData.password} onChange={handleFormChange} />
        <br></br>

        <input type="text" name="phone" autoComplete='off' placeholder='Enter your Phone number' value={formData.phone} onChange={handleFormChange} /> <br></br>

        <input type='text' name="teamName" autoComplete='off' placeholder='Enter Team name' value={formData.teamName} onChange={handleFormChange} /><br></br>

        {/* <input type="text" name="role" autoComplete='off' placeholder='Enter your role' value={formData.role} onChange={handleFormChange} /><br></br> */}

        {/* <label for="player-role">Your Role</label> */}
        <select name="role" id='player-role' value={formData.role} onChange={handleFormChange}>
        <option value="" selected disabled>Pick A Role</option>
          <option value="Sniper">Sniper</option>
          <option value="Captian">Captian</option>
          <option value="Assualter">Assualter</option>
          <option value="Medician">Medician</option>
        </select>
        <button type='submit' className='submitButton'>Signup</button>

        <p>If you have already an account please <a href='/login'><span className="submitButton">login</span> </a></p>
      </form>

    </div>

  )
}
