import Photo from './Component/work/ProfilePhoto' ;
import './App.css';
import Address from './Component/work/Address';
import Name from './Component/work/name';


function App() {
  return (
    <div className="App">
      <Photo/>
      <div>
      <Name/>
      <Address/>
      </div>
    </div>
    
  );
}

export default App;
