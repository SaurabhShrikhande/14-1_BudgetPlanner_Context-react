import { useContext } from "react";
import { UserContext } from "./UserContext";
import './App.css';
import { useEffect } from 'react';

export default function BudgetPlanner(){
   const contxt = useContext(UserContext);
   useEffect(() => {
    if (localStorage.length !== 0){
      const data = JSON.parse(localStorage.getItem("localarr"));
      contxt.setarr(data);

    }
   //  const data = JSON.parse(localStorage.getItem("localarr")); 
    // if(data){
    //  contxt.setarr(data);
    // }
}, [])

    function addarr (){
          if (contxt.inputnm === ""){
           return alert("please Enter Name");
          }
          else{
                contxt.setarr([...contxt.arr, {nm:contxt.inputnm, cost:contxt.inputcost }]);
                contxt.setinputnm("");
                contxt.setinputcost(0);
          }      
    }
     
    function trim(idx){
        const filterarr = contxt.arr.filter((item) =>
         item.nm !== contxt.arr[idx].nm );
       // const filterarr = contxt.arr.filter((item,id)=>id!=idx)
        contxt.setarr(filterarr);
        localStorage.setItem("localarr" , JSON.stringify(filterarr));
    }

    useEffect(() => {
    if(contxt.arr.length !== 0)  localStorage.setItem("localarr" , JSON.stringify(contxt.arr));
  }, [contxt.arr])

    return(<div style={{margin:"5vh 5vw"}}>
        <h1>Saurabh Shrikhande Budget Planner</h1>
         <label style={{fontSize:"20px"}}>Your Budget</label> 
         <input style={{margin:"5px" , fontSize:"20px"}} type="number" onChange ={(e) => contxt.setbudget(e.target.value)} value={contxt.budget} required/>
        

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

        {
          contxt.arr.map((item, idx)=>{
          return  (<div key={idx} className="btn" style={{display:"flex" , justifyContent:"space-between" , padding:"0px 20px", margin:"10px"}}>
            <h4>{item.nm}</h4>
            <div style={{display:"flex"}}>
            <h4>{item.cost}</h4>
            <button style={{borderRadius:"20px", backgroundColor:"#6C757D", margin:"15px 5px" , color:"white"}} onClick={() => trim(idx)}>X</button>
            </div>
        </div>)    
          })
        }

        <h3>Add Expenses</h3>
       
      <div style={{display:"flex", gap:"25px"}}>
        <h4 style={{width:"40vw"}}>Name</h4>
        <h4>Cost</h4>
      </div>
      <div  style={{display:"flex", gap:"25px"}}>
        <input style={{fontSize:"18px" , width:"40vw"}}
        onChange={e => contxt.setinputnm(e.target.value)} type="text"
        value={contxt.inputnm}/> 
        <input style={{fontSize:"18px" , width:"40vw"}} type="number"  onChange={e => contxt.setinputcost(e.target.value)} value={contxt.inputcost} />

      </div>

      <button style={{margin:"20px 0" , padding:"5px 10px", backgroundColor:"#0D6EFD", color:"white", borderRadius:"5px", borderColor:"1px solid white"}} onClick={addarr}>Save</button>

     </div> )
}