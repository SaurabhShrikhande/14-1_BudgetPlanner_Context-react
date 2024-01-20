import './App.css';
import { UserContext } from "./UserContext"
import BudgetPlanner from './Budgetplanner'
import { useState } from 'react';

function App() {
    
  function checklocalstorage (){
   const data = localStorage.getItem("lastbudget"); 
    if(data){
     return data;
    }
    else {
      return 2000;
    }
  }

   let [budget, setbudget ] = useState(checklocalstorage());  
   let [remaining , setremaining] = useState(0);
   let [spant , setspant] = useState(0);
   let [inputnm , setinputnm] = useState("");
   let [inputcost , setinputcost] = useState(0);
   let [arr , setarr] = useState([]);


  return (
    <div className="">

     <UserContext.Provider value= {{
      budget,
      setbudget,
      inputnm,
      setinputnm,
      inputcost,
      setinputcost,
      arr,
      setarr,
      spant,
      setspant,
      remaining,
      setremaining
     }}>
      
      <BudgetPlanner/>

     </UserContext.Provider>

    </div>
  );
}

export default App;
