"use client";
import styles from './page.module.css'
import {useState} from 'react';

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

  //Inital call to randomise BG
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

  //Normal Button Logic
  function handleClick(myColor){
    clearInterval(timerId);
    console.log(`Cleared ${timerId}`);
    timerId = 1;
    setColor(myColor);
  }

  //Randomiser Button Logic
  function handleClickTimed(){
    if(timerId == 1){
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
      <div className={styles.randomContainer}>
        <button className={styles.randomButton} onClick={() => handleClickTimed()}></button>
      </div>
    </body>
  )
}
