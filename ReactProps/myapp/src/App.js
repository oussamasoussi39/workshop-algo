
import './App.css';
import Component from './profile/profilecomponent';

import MyImage from './CHADLI.jpg';
function App() {
  const bio ="Hi, I’m Oussama! I’m a web developer with in-depth experience in UI/UX design. In a nutshell, I create websites that help organizations address business challenges and meet their needs. I manage everything from website navigation and layout to a company’s web hosting and security architecture. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS. ";
 const handleFunction = (name) =>   alert('your name is'+ name);
  return (
    <div className="App">
      
      <Component fullName="Oussama Soussi" profession="Web Developer" bio= {bio} handleFunction= {handleFunction}  ><img src={MyImage} alt="horse" style={ {width:'100px',height:'100px',borderRadius:'50%' } }  /> </Component  >
    
    
    </div>
  );
}

export default App;

