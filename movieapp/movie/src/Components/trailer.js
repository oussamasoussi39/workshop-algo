import React from "react";
import { useParams,useNavigate} from "react-router-dom";

const Trailer = ({ movies }) => {
  const { title} = useParams();
//   const ID = Number(id);
  const movieE = movies.find((ele) => ele.title === title);
  console.log(movieE);
  ;
  const Navigate=useNavigate()

  return <div style={{ color: "white" }}>
     {movieE.description}
     <div>
   <iframe width="420" height="315"
  src={movieE.trailer}>
  </iframe>
  </div>
  <button onClick={()=> {Navigate("/")}}>back to home page</button>
 
  </div>;
 
};

export default Trailer;
