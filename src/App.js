
import './App.css';
import {useState} from 'react';
import Password from './Password';

function App() {
const [pass, setPass]= useState("")
const [disable, setdisable]= useState(true)

function handlepass(e){
  setPass(String(e.target.value))
}

  return (
    <div className="App">
      <p>please input your password:</p>
      <input type= "password" value={pass}  onChange={handlepass}/>
      <button disabled = {disable}>Submit</button>
      <Password pass={pass} check={handlepass} setPass={setPass} setdisable={setdisable}/>
    </div>
  );
}

export default App;
