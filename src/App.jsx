import Game from "./components/Game/Game"
import Header from "./components/Header/Header"
import GameContextProvider from "./context/GameContext"
import TimerContextProvider from "./context/TimerContext"

function App() {
    return (
		<div className="App">
			<TimerContextProvider>
				<GameContextProvider>
					<Header/>
					<Game/>
				</GameContextProvider>
			</TimerContextProvider>
		</div>
    )
}

export default App
