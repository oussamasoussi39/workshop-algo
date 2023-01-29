import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";


export default function MovieCard({ movie }) {
  
  return (
    
    <Card sx={{ maxWidth:300}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={movie.posterUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>

      <Rating name="" value={movie.rating} />
    </Card>
    
  );
}
