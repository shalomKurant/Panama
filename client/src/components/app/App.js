import { siteState, siteTypes } from "../..";
import BaseBoard from "../../memoryGame/components/baseBoard/BaseBoard.component";
import MainPage from "../mainPage/MainPage";
import './App.css';

function App() {
  return (
    <div className="App">
      { siteState === siteTypes.Regular ?
      <MainPage></MainPage>
      : <BaseBoard></BaseBoard>}
    </div>
  );
}

export default App;
