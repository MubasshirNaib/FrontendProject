import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Data from "../dataset/Data.json"
const Details = () => {
  const {Name} = useParams();
  const[details,setDetails] = useState("");
  useEffect(()=>{
    const detail=Data.filter((item)=>item.Name === Name) ;
    setDetails(detail[0].About);
  },[])
  return (
    <div>
      <h1>{Name}</h1>
      <p>{details}</p>

    </div>
  )
}

export default Details
