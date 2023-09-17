import React from 'react'
import {useDispatch, useSelector} from 'react-redux'


export default function () {
  const tournamentData = useSelector((state)=>state.tournamentReducer)
  console.log('data tournament ::' , tournamentData)
  return (
    <div>
        <h1>this is tournament page</h1>
      <div>
        <p>{tournamentData.time}</p>    
      </div>       
    </div>
  )
}
