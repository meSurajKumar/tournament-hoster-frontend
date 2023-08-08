import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import '../css/Home.css'
import '../css/Tournament.css'
const baseUrl = import.meta.env.VITE_BASE_URL



export default function Home() {
  const navigate = useNavigate()
  const [data , setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get(`${baseUrl}/api/v1/admin/get-tournaments`)
        setData(response.data.data)
      } catch (error) {
        console.log('failed to get data : ' , error)
      }
    }
    fetchData();
  },[])

  const handleItemClick = async(itemId)=>{
    try {
      const itemResponse = await axios.get((`${baseUrl}/api/v1/admin/get-tournament/${itemId}`)).then((response)=>{
        navigate('/tournament')
      }).catch((error)=>{
        console.log('Error Data :: ' , error)
      })
      // const itemData = itemResponse.data.data
      // console.log('itemData : ' , itemData)
    } catch (error) {
      console.log('failed to get item data : ' , error)
    }
  }

  return (
    <>
    <NavBar />
    <center>
        <div className='container'>
            {data.map((dataObj, index) => (
                <p className='tileBody' key={index} onClick={() => handleItemClick(dataObj._id)}>
                    <span className='neonText'>
                        {dataObj.name}
                        <br />
                        {dataObj.tournamentType}
                    </span>
                </p>
            ))}
        </div>
    </center>
</>
  )
}
