import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom';
import Data from "../dataset/Data.json"
const Details = () => {
  const {Name} = useParams();
  const location = useLocation();
  console.log(location);
//   const[details,setDetails] = useState("");
//   useEffect(()=>{
//     const detail=Data.filter((item)=>item.Name === Name) ;
//     setDetails(detail[0].About);
//   },[])
  return (
    <div>
      <h1>{location.state.Name}</h1>
      <p>{location.state.Id}</p>
      <p>{location.state.About}</p>

    </div>
  )
}

export default Details
