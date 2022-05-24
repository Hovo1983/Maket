import {useState} from 'react'


const useToggle = (initialState=true)=>{
    const [toggle,setToggle]=useState(initialState);
    const hide=()=>setToggle(prev=>!prev)
   
    return  [toggle,hide] ;
}

export default useToggle;