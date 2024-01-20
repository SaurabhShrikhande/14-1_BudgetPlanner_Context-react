import './App.css';
import { UserContext } from "./UserContext"
import BudgetPlanner from './Budgetplanner'
import { useState } from 'react';

function App() {
   let [budget, setbudget ] = useState(2000);  
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
