import FirstRoundOutline from "./Components/FirstRoundOutline";


function App() {
  return (
    <>
      <div className = "bracket-container">
        <FirstRoundOutline numGames = {4} numTeams = {8} confType={"west"}/>
      </div>
    </>
  );
}

export default App
