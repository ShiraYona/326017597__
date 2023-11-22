import { useState } from "react";
import { useNavigate } from "react-router-dom";
 const navigate = useNavigate();

const Dates = () => {
  const [yearstart,setyearstart]=useState("");
  const [monthstart,setmonthstart]=useState("");
  const [daystart,setdaystart]=useState("");
  const [yearend,setyearend]=useState("");
  const [monthend,setmonthend]=useState("");
  const [dayend,setdayend]=useState("");



 
  
  const b = () => {
    if (!yearstart || !daystart||!monthstart || !yearend||!monthend || !dayend) {
     alert("א למלא את כל השדות!!!!");}
    else
     a()
    }

  const a = async () => {
    try {
      const data = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx==on&mf=on&ss=on&mod=on&lg=he&s=on&start=${setyearstart}-${setmonthstart}-${setdaystart}&end=${setyearend}-${setmonthend}-${setdayend}`)
      const data2 = data.json()
      Create(
      navigate("/Cards",{state: data2}))

      
    }
    catch {
      console.log("Error in feach")
    }}
  return (
    
    <div>
      <p>מתאריך</p>
      <p>הכנס שנה, חודש, ויום</p>
    <input placeholder="year start" onBlur={(e) => setyearstart(e.target.value)} />
    <input placeholder="month start" onBlur={(e) => setmonthstart(e.target.value)} />
    <input placeholder="day start" onBlur={(e) => setdaystart(e.target.value)} />
    <br/>
    <br/>
    <p>עד תאריך</p>
      <p>הכנס שנה, חודש, ויום</p>
    <input placeholder="year start" onBlur={(e) => setyearend(e.target.value)} />
    <input placeholder="month start" onBlur={(e) => setmonthend(e.target.value)} />
    <input placeholder="day start" onBlur={(e) => setdayend(e.target.value)} />

    <br/>
    <br/>
    <button onClick={()=>b()}> הצג תאריכים</button>
    </div>
    
  );
  };

export default Dates;
