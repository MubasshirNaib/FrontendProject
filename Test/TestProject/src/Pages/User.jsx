import React,{useState} from 'react';
import { useParams,useSearchParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const User = () => {
    //  const {userid}= useParams();
     const[searchParams,setSearchParams]= useSearchParams();
     console.log(searchParams.get("id"));
     const[name,setName]=useState("");
     const [id,setId] =useState(null);
     const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParams({name:name,id:id});

     }
  return (
    <div>
      User
      <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e)=>{setName(e.target.value);}}
      />
      <TextField
        label="Id"
        variant="outlined"
        fullWidth
        margin="normal"
        value={id}
        onChange={(e)=>{setId(e.target.value);}}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
      {/* <h1>{userid}</h1> */}
      <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("name")}</h1>

    </div>
  )
}

export default User
