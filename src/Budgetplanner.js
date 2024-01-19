import { useContext } from "react";
import { UserContext } from "./UserContext";
import './App.css';

export default function BudgetPlanner(){
    
 const contxt = useContext(UserContext);

    return(<div style={{margin:"5vh 5vw"}}>
        <h1>Saurabh Shrikhande Budget Planner</h1>
         <label style={{fontSize:"20px"}}>Your Budget</label> 
         <input style={{margin:"5px" , fontSize:"20px"}} type="number" required/>
        

        <div style={{display:"flex", justifyContent:"space-between", width:""}}>
        <h3 className="btn">Budget: Rs {contxt.budget}</h3>
        <h3 className="btn" style={{color:"green"}}>Remaining Rs. - </h3>
        <h3 className="btn" style={{color:"green" , backgroundColor:"#CFF4FC"}}>Spant far: </h3>
        </div>

        <h3>Expenses</h3>

        {
            true && <h3>Add Data To List....</h3>
        }

        <div className="btn" style={{display:"flex" , justifyContent:"space-between" , padding:"0px 20px"}}>
            <h4>Nm</h4>
            <h4>Cost</h4>
        </div>

        <h3>Add Expenses</h3>
       
      <div style={{display:"flex", gap:"25px"}}>
        <h4 style={{width:"40vw"}}>Name</h4>
        <h4>Cost</h4>
      </div>
      <div  style={{display:"flex", gap:"25px"}}>
        <input style={{fontSize:"15px" , width:"40vw"}} type="text"/>
        <input style={{fontSize:"15px" , width:"40vw"}} type="number"/>
      </div>

      <button style={{margin:"20px 0" , padding:"5px 10px", backgroundColor:"#0D6EFD", color:"white", borderRadius:"5px", borderColor:"1px solid white"}}>Save</button>

     </div> )
}