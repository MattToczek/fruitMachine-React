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
  const [images, setIMAGES] = useState([
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
  ]);

  const [screen, setScreen] = useState([Casino,Casino,Casino]);

  const [winner, setWinner] = useState(false);

  const [balance, setBalance] = useState(500);

  const [betAmount, setBetAmount] = useState(1);

  const [factor, setFactor] = useState(2);

  const randomNum = () => {
    return Math.floor(Math.random()*8)
  }

  const findWinnings = (num) => {
    
    switch (num) {
       case 1:
          setFactor(1);
        break;
        case 2:
          setFactor(2);
        break;
        case 3:
          setFactor(3);
        break;
        case 4:
          setFactor(4);
        break;
        case 5:
          setFactor(5);
        break;
        case 6:
          setFactor(6);
        break;
        case 7:
          setFactor(7);
        break;
        case 8:
          setFactor(8);
        break;
        case 9:
          setFactor(9);
        break;
        case 10:
          setFactor(10);
        break;

    
      default:
        break;
    }
    setBalance(
      balance + (betAmount*factor)
    )
    
  }

  const setAmount = (event) => {
    setBetAmount(
      event.target.value
    )
  }

  const setReels = () => {
    if (winner === false) {

      setBalance(
        balance - betAmount
      )
        
      let num1 = randomNum();
      let num2 = randomNum();
      let num3 = randomNum();

      let newArray = [images[num1].img, images[num2].img, images[num3].img]


      
      setScreen(
        newArray
      )

      if (num1 === num2 && num2 === num3) {

        findWinnings(num1);

        

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
      <div className="wrapper">
        <div className="screen">{screen.map((item)=> {
          return <img className="fruit" src={item} />
        })}</div>
        <div className="startAndBalance">
          <div className="inputs">
            <div>
              <label>Balance</label>
              <input value={balance} readOnly></input>
            </div>
            <div>
              <label>Bet Amount</label>
              <input onChange={setAmount}></input>
            </div>
          </div>
          <a href="#" className="startBtn" onClick={()=>setReels()}><div className="startDiv"><img src={Start} /></div></a>
        </div>
      </div>  
    </div>
  );
}

export default App;
