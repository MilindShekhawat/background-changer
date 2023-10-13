"use client";
import styles from './page.module.css'
import {useState} from 'react';

//Make timerid global
let timerId;

//Button Component
function Button({myColor, onButtonClick}) {
  return (
    <button style={{background:`${myColor}`}} onClick={onButtonClick}>
  </button>
  )
}

export default function Home() {
  const COLORS = ["#DB4437", "#F4B400" ,"#0F9D58"]; //RED, YELLOW, GREEN
  const [color, setColor] = useState("white");
  const interval = 2000;
  let randomColor = 0;

  //Inital call to randomise BG: timer id is undefined initially so it will run only once and not on every state created
  //It will assign a numerical id to timerId
  if(!timerId){
    timerId = setInterval(randomizeBG, interval);
    console.log(`Started ${timerId}`);
  }

  //Cycle through Colors
  function randomizeBG() {
    console.log(`COLOR set to ${randomColor}`);
    setColor(COLORS[randomColor++]);

    if(randomColor == COLORS.length){
      randomColor = 0;
    }
  }

  //Normal Button Click function
  function handleClick(myColor){
    //Clear the setInterval 
    clearInterval(timerId);
    console.log(`Cleared ${timerId}`);
    //Put timerId to non number: this is important 
    timerId = "break";
    setColor(myColor);
  }

  //Randomiser Button Click function
  function handleClickTimed(){
    //Check if timerId is break, if it not then it will not start another interval

    if(timerId == "break"){
      timerId = setInterval(randomizeBG, interval);
      console.log(`Started ${timerId}`);
    }
  }

  return (
    <body style={{background:`${color}`}}>
      <div className={styles.buttonContainer}>
        <Button myColor={COLORS[0]}  onButtonClick={() => handleClick(COLORS[0])}/>
        <Button myColor={COLORS[1]}  onButtonClick={() => handleClick(COLORS[1])}/>
        <Button myColor={COLORS[2]}  onButtonClick={() => handleClick(COLORS[2])}/>
      </div>
      <div className={styles.bottomContainer}>
        <div style={{background:`${color}`, boxShadow:`10px -10px black`}}></div>
        <div className={styles.randomContainer}>
          <button className={styles.randomButton} onClick={() => handleClickTimed()}></button>
        </div>  
        <div style={{background:`${color}`, boxShadow:`-10px -10px black`}}></div>
      </div>
    </body>
  )
}
