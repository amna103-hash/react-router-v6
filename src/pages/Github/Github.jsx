import React, { useEffect, useState } from 'react'

function Github() {
  const[data,setdata]=useState([])
    useEffect(()=>{
fetch('https://api.github.com/users/amna103-hash').
then(response=>response.json())
.then(data=>{
  setdata(data)
  console.log(data,"view data");
  
}
)

        }
        ,[])
  return (
    <div className='w-1/2 flex flex-col justify-center items-center bg-gray-800 text-white mx-auto h-auto'>
<h1>Github followers: {data.login}</h1>
<div><img src={data.avatar_url} alt="git-profile-pic" className='rounded-full my-7 h-1/2 w-1/2' /></div>

    </div>
  )
}

export default Github
export const githubinfoLoder=async()=>{
 const response =await fetch('https://api.github.com/users/amna103-hash')
 return response.json()
}