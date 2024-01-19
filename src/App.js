import './App.css';
import { UserContext } from "./UserContext"
import BudgetPlanner from './Budgetplanner'
import { useState } from 'react';

function App() {
   let [budget, setbudget ] = useState(0);

  return (
    <div className="">

     <UserContext.Provider value= {{
      budget,
      setbudget
     }}>
      
      <BudgetPlanner/>

     </UserContext.Provider>

    </div>
  );
}

export default App;
