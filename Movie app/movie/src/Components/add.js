import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField,Rating } from "@mui/material";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddMovie({setMovies,movies}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addTitle, setAddTitle] = React.useState("");
  const [addDescription, setAddDescription] = React.useState("");
  const [addPosterUrl, setAddPosterUrl] = React.useState("");
  const [addRating,setRating]=React.useState(0)
  const addMovie=(e)=>{e.preventDefault(); setMovies([...movies,{id:Math.random(),title:addTitle,description:addDescription,posterUrl:addPosterUrl,rating:addRating} ]); handleClose();  }
  return (
    <div>
      <Button onClick={handleOpen} style={{color:'white',fontWeight:'bold',fontSize:'1rem' }}>Add new movie</Button>
      <Modal open={open} onClose={handleClose}    aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ color: "black", fontWeight:'bold',textAlign:'center',marginBottom:'20px' }}
          >
            Add New Movie
          </Typography>
          <TextField
            id="outlined-basic"
            label="Movie Title"
            variant="outlined"
            onChange={(e) => setAddTitle(e.target.value)}
            fullWidth
            style={{marginBottom:'10px'}}
          />
          <TextField
            id="outlined-basic"
            label=" Movie Description"
            variant="outlined"
            onChange={(e) => setAddDescription(e.target.value)}
            fullWidth
            style={{marginBottom:'10px'}}
          />
          <TextField
            id="outlined-basic"
            label="Movie Poster Url"
            variant="outlined"
            onChange={(e) => setAddPosterUrl(e.target.value)}
            fullWidth
            style={{marginBottom:'10px',outlineColor:'red',}}
          />
          
          <Rating
            name="simple-controlled"
            value={addRating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            style={{marginBottom:'10px',textAlign:"center"}}
          />
          <div style={{textAlign:"center"}}>
          <Button variant="contained" onClick={addMovie}  style={{marginBottom:'10px',width:'20%',backgroundColor:'red'}}>Add </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
