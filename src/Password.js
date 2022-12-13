import {useState, useEffect} from "react";


function message(props){
    const{pass, check, setdisable}=props
    const[message, setMessage]= useState()
   
    
    useEffect(()=>{
        if(pass.length>6){
            setMessage("Strong password")
            setdisable(false)
        }
        else if(pass.length>2){
            setMessage("Medium password")
            setdisable(false)
        }
        else{
            setMessage("Weak password")
            setdisable(true)
        }
    },[check,pass,setdisable])


return(
    <div>
        {message}
    </div>
)
}
export default Password;