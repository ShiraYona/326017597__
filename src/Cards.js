import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {filedset} from 'primeicons/primeicon';


 const {state}= data2

//הפונקציה קיבלה את כל הנתונים מהדף
const Cards = () => {
const navigate = useNavigate();

const [card,setcard]=useState("")
setcard(data2)
  

const withparasha=()=>{
 
  {card && card.title.map(i => {
     while(i>=4 ){//רץ רק על 4 האותיות הראשונות של הכותרת
      const b=i;
      b+=i;
      if(b==="פרשת")
    return <div>
      <div style={{ border: "7px" ,width:"300px",height:"150px"}}>{i.state.title + " | " + i.state.description + "|" + i.state.start} </div>
    </div>
    }})}
}

const all=()=>{
  {card && card.map(i => {
    return <div>
      <div style={{ border: "7px" ,width:"300px",height:"150px"}}>{i.state.title + " | " + i.state.description + "|" + i.state.start} </div>
    </div>
  })}
}




return (
  <>
    <button onClick={() => withparasha()}>הצג פרשות שבוע</button>
    <button  onClick={() => all()}>הצג הכל</button>
    
  </>)
  }
export default Cards;
