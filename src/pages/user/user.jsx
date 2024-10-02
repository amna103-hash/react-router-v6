import React from 'react'
import { useParams } from 'react-router-dom';
function User() {
  const {id}=useParams()
  return (
    <div>
      <h1 className='text-center my-10 text-4xl text-red-600'>UserID:{id}</h1>

    </div>
  )
}

export default User;