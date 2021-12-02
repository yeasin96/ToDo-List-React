import { useState } from "react";
import ToDo from './ToDo'


function App() {
  const[input,setinput]=useState("")
  const[item,setitem]=useState([])
  function itemevent(e){
    setinput(e.target.value)

  }
  function listitem(){
      setitem((old)=>{
        // console.log(old);
        return [...old,input ]
      })
      setinput('')
  }
function Del(id){
  
  setitem((old)=>{
     return old.filter((v,i)=>{
      return i !==id
    })
  })
}

  return (
   <>
   <div className='main-div'>
   <div className='center-div'>
     <br/>
     <h1>
       ToDo List
     </h1>
     <input type='text' placeholder="insert item" onChange={itemevent} value={input}/>
     <button onClick={listitem}> + </button>
     <ol>
      { item.map((i, index)=>{
        return <ToDo 
        item={i}
        key={index}
        id={index}
        fun={Del}
        />
      })
        
        }
     </ol>
   </div>

   </div>
   </>
  );
}

export default App;
