import React, {useState} from 'react';
import Banana from "./Components/Img/Bananas.png"
import BigWin from "./Components/Img/BigWin.png"
import Casino from './Components/Img/CasinoPokerSlot.png'
import Cherry from './Components/Img/Cherry.png'
import Dollars from './Components/Img/Dollars.png'
import Fail from './Components/Img/Fail.png'
import Grapes from './Components/Img/Grapes.png'
import Lemon from './Components/Img/Lemon.png'
import OneBar from './Components/Img/OneBar.png'
import Orange from './Components/Img/Orange.png'
import Start from './Components/Img/StartButton.png'
import Strawberry from './Components/Img/Strawberry.png'
import ThreeBars from './Components/Img/ThreeBars.png'
import Watermelon from './Components/Img/Watermelon.png'
import './App.css';


function App() {
  const [images, setImages] = useState([
    {
      img: Banana,
      name: "Banana"
    },
    {
      img: Cherry,
      name: "Cherry"
    },
    
    {
      img: Grapes,
      name: "Grapes"
    },
    {
      img: Lemon,
      name: "Lemon"
    },
    {
      img: OneBar,
      name: "One Bar"
    },
    {
      img: Orange,
      name: "Orange"
    },
    {
      img: Strawberry,
      name: "Strawberry"
    },
    {
      img: ThreeBars,
      name: "Three Bars"
    },
    {
      img: Watermelon,
      name: "Watermelon"
    },
    {
      img: Start,
      name: "Start"
    },
    {
      img: BigWin,
      name: "Big Win"
    },
    {
      img: Casino,
      name: "Casino"
    },
    {
      img: Dollars,
      name: "Dollars"
    },
    {
      img: Fail,
      name: "Fail"
    },
  ])

  const [screen, setScreen] = useState([Casino,Casino,Casino]);

  const [winner, setWinner] = useState(false);

  const randomNum = () => {
    return Math.floor(Math.random()*8)
  }

  const setReels = () => {
    if (winner == false) {
        
      let num1 = randomNum();
      let num2 = randomNum();
      let num3 = randomNum();

      let newArray = [images[num1].img, images[num2].img, images[num3].img]
      
      setScreen(
        newArray
      )

      if (num1 == num2 && num2 == num3) {

        setWinner(
          true
        )

        setTimeout(()=>{
          num1 = 10;
        
        newArray = [images[num1].img, images[num1].img, images[num1].img]

        setScreen(
          newArray
        )
        
        }, 2000);
      } 
    } else {
      setTimeout(()=>{
        setWinner(
          false
        )
      },3000)
    }
  }

  return (
    <div className="App">
      <div className="screen">{screen.map((item)=> {
        return <img className="fruit" src={item} />
      })}</div>
      <div className="startAndBalance">
        <div>
          <label>Balance</label>
          <input readOnly></input>
        </div>
        <a className="startBtn" onClick={()=>{setReels()}}><div className="startDiv"><img src={Start} /></div></a>
      </div>
      
    </div>
  );
}

export default App;
