"use client";
//import styles from './page.module.css'
import {useState} from 'react';

function Button({myColor, onButtonClick}) {
  return (
    <button style={{background:`${myColor}`}} onClick={onButtonClick}>

  </button>
  )
}

export default function Home() {
  const RED = "#DB4437";
  const YELLOW = "#F4B400";
  const GREEN = "#0F9D58";
  const [color, setColor] = useState("white");

  function handleClick(myColor){
    setColor(myColor);
  }

  return (
    <body style={{background:`${color}`}}>
      <Button myColor={RED}     onButtonClick={() => handleClick(RED)}/>
      <Button myColor={YELLOW}  onButtonClick={() => handleClick(YELLOW)}/>
      <Button myColor={GREEN}   onButtonClick={() => handleClick(GREEN)}/>
    </body>
  )
}
