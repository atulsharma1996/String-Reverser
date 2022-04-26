import React, {useState, useEffect} from "react";
import './App.css';

function App() {

  useEffect(()=>{
    document.title = 'String Reverser';
  },[])

  const [data, setData]=useState('');
  function getData(val)
  {
    setData(val.target.value);
  }
  let str1 ='';
  let str = data.split('');
  console.log(str);
  for(let i = str.length - 1; i >= 0; i--)
  {
    str1 = str1 + str[i];
  }

  return (
    <React.Fragment>
    <div className="container">
      <div className="container1">
        <h1><i>String Reverser</i></h1>
      </div>
      <div className="container2">
        <input className="inputBox" placeholder="Your Text Here" type="text" onChange={getData} label="Enter Your Text Here"/>
      </div>
      <div className="resultBox"><i><h3>Your Reversed String</h3></i></div>
      <div className="resultBox1"><i><h2>{str1}</h2></i></div>
    </div>
      </React.Fragment>
  );
}

export default App;

