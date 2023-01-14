import React from 'react';
import PropTypes from "prop-types";



const Component=(props)=> {
  return (
    <div> 
    {props.children}
    <h1 style={ { fontSize:'1.5rem', fontWeight:'700'}}> {props.fullName} </h1>
    <div>  
    <button onClick= {() => props.handleFunction(props.fullName) } style= {{backgroundColor:"grey" , border:"none", color:"white", padding: '5px', cursor:'pointer' }} > Name</button>
    </div>
    

  
    <div style={{ padding:'15px', fontWeight:'500' } }> {props.profession} </div>
     
    <div style={ {fontSize:'0.5em', padding:'10px' }} > {props.bio} </div>
   
   
    </div>
  )
   
   
  
}
Component.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children:PropTypes.array,
  handleFunction:PropTypes.func
    
  }

 
export default  Component;