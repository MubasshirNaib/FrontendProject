import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, TextField } from '@mui/material';


const Api_Url="https://jsonplaceholder.typicode.com/posts";


const CrudPractice = () => {
  const [data,SetData] = useState([]);
  const [searchQuery,setSearchQuery]=useState("");
  const [newData,setNewData]= useState({title:"",body:""});

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response= await axios.get(Api_Url);
        SetData(response.data);
      }catch(err){
        console.log(err.message);
      }
    }
    fetchData();
  },[]);
  // add
   const adddata = async ()=>{
    try{
      const response = await axios.post(Api_Url,{
        title: newData.title,
        body: newData.body,
        userId:1,
      });
      SetData([response.data, ...data]);
      setNewData({title:"",body:""});

    }catch(err){
      console.log(err.message);
    }
   }
   //edit
   const updateData= async(id)=>{
    try{
      const response= await axios.put(`${Api_Url}/${id}`,{
        title:newData.title,
        body:newData.body,
      });
      
      // SetData(data.map((item) => (item.id === id ? response.data : item)));

      setNewData({title:"",body:""});
    }catch(err){
      console.log(err);
    }
   };
  const filterData = data.filter((item)=>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.body.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      All ok;
      <div>
        <h1>Add New Data</h1>
       <div><TextField id="standard-basic" label="title" variant="standard" value={newData.title} onChange={(e)=>{setNewData({...newData,title:e.target.value})}}/></div> 
       <div><TextField id="standard-basic" label="body" variant="standard" value={newData.body} onChange={(e)=>{setNewData({...newData,body:e.target.value})}}/></div> 
       <Button variant="outlined" onClick={adddata}>Add</Button>
        
      </div>
      <div>
      {/* {searchQuery} */}
      </div>
      <TextField id="standard-basic" label="input" variant="standard" onChange={(e)=>{setSearchQuery(e.target.value)}}/>
      {filterData && filterData.map((item)=><div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        <Button variant="outlined" onClick={updateData(item.id)}>Update</Button>
      </div>)}
    </div>
  )
}

export default CrudPractice
