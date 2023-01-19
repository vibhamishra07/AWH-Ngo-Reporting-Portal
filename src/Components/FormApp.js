import { React, useState, useEffect } from "react";
import "./Form.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";





const FormApp = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  
  const [formDetails, setFormDetails]=useState({
        firstName:"",
        lastName:"",
        address:"",
        contact:"",
        discription:"",
  });
  const onChangeInForm=(e)=>{
    setFormDetails({
      ...formDetails , [e.target.name]:e.target.value
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("hello");
    // console.log(formDetails);
    setFormDetails({
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      discription: "",
    });
    setSelectedImage(null);
    setImageUrl(null);
  };

  return (
    <div className="form-component">
      <div className="outerbox">
        <form  onSubmit={submitHandler}>
          <Box
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
              name="firstName"
              value={formDetails.firstName}
              onChange={onChangeInForm}
              required
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              name="lastName"
              value={formDetails.lastName}
              onChange={onChangeInForm}
              required
            />
            <TextField
              id="standard-basic"
              label="Enter Your Address"
              variant="standard"
              name="address"
              value={formDetails.address}
              onChange={onChangeInForm}
              required
            />
            <TextField
              id="standard-basic"
              label="Contact Number"
              variant="standard"
              name="contact"
              value={formDetails.contact}
              onChange={onChangeInForm}
              required
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
              <>
                <div>Image Preview:</div>
                <img src={imageUrl} alt={selectedImage.name} height="100px" />
              </>
            )}

            <TextField
              id="standard-textarea"
              label="Discription"
              placeholder="Enter text here!"
              multiline
              variant="standard"
              name="discription"
              value={formDetails.discription}
              onChange={onChangeInForm}
              rows={3}
              required
            />
            <button
              type='submit'
              variant="contained"
              color="primary"
              component="span"
              label="submit"
              className="submit-btn"
              style={{ width: "90%" }}
            >
              Submit Form
            </button>
          </Box>
        </form>
      </div>
    </div>
  );
};
export default FormApp;
