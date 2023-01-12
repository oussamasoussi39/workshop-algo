import React from 'react';
import Image from 'profile/src/image/CHADLI.jpg';

const Photo=()=> {
    return(
       <div>
        <img src={Image} alt="" style={{width:'200px', height:'200px', borderRadius:'50%'}} />
        </div>
    )
    
}
export default Photo;
