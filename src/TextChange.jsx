import React from 'react'
import { useState, useEffect } from 'react'
const TextChange = () => {

    const texts = ["Hi, I'm Vipin", "Hi, I'm Vipin", "Hi, I'm Vipin"]
    const [currentText, setCurrentText] = useState("")
    const [endValue, setendValue] = useState(true)
    const [isForward, setIsForward] = useState(true)
    const [index, setIndex]= useState(0)

    useEffect(() => {
      const intervalid = setInterval(()=>{
        setCurrentText(texts[index].substring(0,endValue));
        if(isForward){
            setendValue((prev)=>prev+1)
        }
        else{
            setendValue((prev)=>prev-1)
        }
        if(endValue>texts[index].length+10){
            setIsForward(false)
        }
        if(endValue<2.1){
            setIsForward(true)
            setIndex((prev)=>prev%texts.length)
        }
      },60)
    
      return ()=>clearInterval(intervalid)
    }, [endValue, isForward, index, texts])
    

  return (
    <div className='transition ease duration-300'>
        {currentText}
    </div>
  )
}

export default TextChange
