import Container from "./components/Container"
import Ending from "./components/Ending"
import Escape from "./components/Escape"
import Start from "./components/Start"

function App() {
  return (
    <>
      <Container>
        <Start />
        <Escape />
        <Ending />
        <h1>脱出ゲーム</h1>
        <button>スタート</button>
      </Container>
    </>
  )
}

export default App
