// import './app.css';
// import Counter from "./Counter";
// import Dumbo from "./Dumbo";
// import ScoreKeeper from "./ScoreKeeper";
// import EmojiClicker from "./EmojiClicker";
// import Lucky7 from "./Lucky7";
// import Die from "./Die";
// import Dice from "./Dice";
// import LuckyN from "./LuckyN";
// import {sum} from "./utils";

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0]);
// }

// function App() {

//   return (
//     <>
//      {/* <h1>State Demo</h1> */}
//      {/* <Counter/> */}
//      {/* <Dumbo/> */}
//      {/* <ScoreKeeper numPlayers={5} target={5}/> */}
//      {/* <Lucky7/> */}
//      {/* <EmojiClicker/> */}
//      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
//      <LuckyN
//         winCheck={allSameValue}
//         numDice={3}
//         title="Roll the same number"
//       />
//     </>
//   )
// }

// export default App;

import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      <BoxGrid />
      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      /> */}
    </>
  );
}

export default App;
