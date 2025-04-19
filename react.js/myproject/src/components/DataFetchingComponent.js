import React, { useEffect, useState } from 'react'

export default function DataFetchingComponent() {

     const [data,setData]= useState([]);

     useEffect( () => {
        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((jsonRes) => setData(jsonRes.results))
        .catch((err) => console.log("error"+err))
     },[])

  return (
    <div>
      Fetching Data:
      {data.map((result,index) => (
        <p key={index}>
          {result.name.first} {result.name.last} - {result.email}
        </p>
      ))}
    </div>
  )
}
