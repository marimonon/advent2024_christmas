import Container from "./components/Container"
import Ending from "./components/Ending"
import Escape from "./components/Escape"
import Start from "./components/Start"

function App() {
  return (
    <>
      <Container>
        {/* StartとEscapeとEndingの３シーンはだし分ける */}
        <Start />
        <Escape />
        <Ending />
      </Container>
    </>
  )
}

export default App
