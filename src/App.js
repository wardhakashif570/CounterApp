import React, {useState} from 'react';
import './App.css';
import Message from './Message.js';

function App() {
  
  let [count,setCount] = useState(0);
  let [isMorning,setMorning]=useState(true);
  return (
   <div className={`box ${isMorning?'light':''}`}>
     <h3>Welcome to ={isMorning?'Morning':'Night'}</h3>
     <Message counter={count}/>
     <button onClick={()=>setCount(count + 1)}>
Update counter
     </button>
     <button onClick={()=>setMorning(!isMorning)}>
Update Day
     </button>
   </div>
  );
}

export default App;
