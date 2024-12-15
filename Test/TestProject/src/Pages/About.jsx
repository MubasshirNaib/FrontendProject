import React,{useState} from 'react'
import Data from "../dataset/Data.json"
import {Link} from 'react-router-dom'
const About = () => {
  const [datas,setData] = useState(Data);
  console.log(datas);
  const truncateString = (str,num)=>{
    if(str.length > num){
        return str.slice(0,num) + "...";
    }else{
        return str;
    }
  }
  return (
    <div>
      About
      <section>
        {datas.map((data)=>{
            const{Name,Id,About}=data
            return <article key={Id}>
                <h3>{Name}</h3>
                <p>{truncateString(About,5)}</p>
                <Link to ={Name}>Details</Link>
            </article>
        })}
      </section>
    </div>
  )
}

export default About
