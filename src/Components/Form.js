import { React, useState, useEffect } from "react";
import "./Form.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const stylee = {
  outerbox: {
    width: "50%",
    padding:"2rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};



const Form = () => {
  const handleSubmit = () => {};

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);


  return (
    <div style={{ height:"100vh" , display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#eee"}} >
    <div style={stylee.outerbox}>
      <form onSubmit={handleSubmit} >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1.5, width: "90%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            required
          />
          <TextField id="standard-basic" label="Last Name" variant="standard" required/>
          <TextField
            id="standard-basic"
            label="Enter Your Address"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="standard"
          />

          <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <label htmlFor="select-image">
            <Button variant="contained" color="primary" component="span">
              Upload Image
            </Button>
          </label>
          {imageUrl && selectedImage && (
            <Box mt={2} textAlign="center">
              <div>Image Preview:</div>
              <img src={imageUrl} alt={selectedImage.name} height="100px" />
            </Box>
          )}



          <TextField
            id="standard-textarea"
            label="Discription"
            placeholder="Enter text here!"
            multiline
            variant="standard"
            rows={3}
          />
        <Button type="submit" variant="contained" color="primary" component="span" style={{width:'90%'}}>Submit Form</Button>

        </Box>
      </form>
    </div>
    </div>
  );
};
export default Form;
