
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SubCom1 = () => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { mt: 3, mb: 6, width: "45ch" } }}
      noValidate
      autoComplete="off"
    > 
      <TextField
        id="standard-basic"
        label="Applicant Name"
        variant="standard"
        style={{
            marginBottom:"0px"
        }}
      />
      <br/>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        // style={{backgroundColor:"blue", marginTop:"0px "}}
      />
    </Box>
  );
};

export default SubCom1;
