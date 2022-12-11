import styled from "styled-components"
import Game from "./components/Game/Game"
import Header from "./components/Header/Header"
import GameContextProvider from "./context/GameContext"
import ThemeProvider from "./context/ThemeContext"
import TimerContextProvider from "./context/TimerContext"

function App() {
    return (
      <div className="App">
        <ThemeProvider>
		<TimerContextProvider>
		<GameContextProvider>
          <Header/>
          <Game/>
		</GameContextProvider>
		  </TimerContextProvider>
        </ThemeProvider>
      </div>
    )
}

export default App
