import React,{ useState } from 'react';

import './App.css';
import AddIcon from '@mui/icons-material/Add';


function App() {
  // const [fname,setname] = useState();
  // const [lname,setlname] = useState('');
  const [fullname,setFullname] = useState({
    fname:"",
    lname:"",
  });
  
  function inputevent(event){
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;
    setFullname((prevalue)=>{
      if(name==='fname')
      {
        return{
          fname:value,
          lname:prevalue.lname
        }
      }
      else
      {
        return{
          fname:prevalue.fname,
          lname:value
        }
      }
    }) 
  }

  // function changefname(event
  // {
  //   console.log(event.target.value);
  //   setname(event.target.value);
  // }

  // function changelname(event){
  //   console.log(event.target.value);
  //   setlname(event.target.value);
  // }
  
  function submit(event){
    // let fullName = fname+lname;
    event.preventDefault();
    // setFullname(fullName);

  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        <h1>Hello {fullname.fname} {fullname.lname}</h1>
        <br/>
        <input type='text' placeholder='Enter your first name' name='fname' onChange={inputevent}/><br/>
        <input type='text' placeholder='Enter your last name' name='lname' onChange={inputevent}/><br/>
        <button type='submit'><AddIcon/></button>
      </form>
    </div>
  );
}

export default App;
