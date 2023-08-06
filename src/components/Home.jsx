import React,{useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import '../css/Home.css'
import '../css/Tournament.css'
const baseUrl = import.meta.env.VITE_BASE_URL



export default function Home() {

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



  // useEffect(async()=>{
  //   await axios.get(`${baseUrl}/api/v1/admin/get-tournaments`)
  //   .then(response=>response.data.data)
  //   .then(data=>setData(data))
  //   .catch(err=>console.log(`Error in api fetch ${err}`))
  //   // .then(data=>{console.log('data :: ' , data)})
  // } , [])


  return (
    <>
    <NavBar />
    <center>
        <div className='container'>
            {data.map((dataObj, index) => (
                <p className='tileBody' key={index}>
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

  //   <>
  //   <NavBar />
  //   {data.length > 0 ? (
  //     data.map((item) => <p key={item.id}>{item.name}</p>)
  //   ) : (
  //     <p>Loading data...</p>
  //   )}
  // </>



  )
}
