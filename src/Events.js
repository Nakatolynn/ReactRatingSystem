import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Events() {
  const[index,setIndex]=useState(0);
  const handleClickTest = () => {
    alert("React is beautiful");
    setIndex(index+1);
  };

  return (
    <>
      <Button onClick={handleClickTest}>React Button</Button>
      <Button onClick={() => alert("handling events is my thing")}>
        Upload Image
      </Button>
      <MyButton onSmash={()=>alert('Playing')}>
          Play Series
      </MyButton>
      <MyButton onSmash={()=>alert('Uploading')}>
        Uploading
      </MyButton>
      <Button onClick={()=>{
        alert('This is us')
      }}>
         This is Us 
      </Button>
      <AlertButton message='Prays every thursday'>
        Phaneroo
      </AlertButton>
    </>
  );
}

function MyButton({ onSmash, children }) {
  return <Button onClick={onSmash}>{children}</Button>;
}

function AlertButton({message,children}){
  return(
    <Button onClick={()=>{alert(message)}}>
      {children}
    </Button>
  )
}