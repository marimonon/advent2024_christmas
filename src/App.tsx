/** @jsxImportSource @emotion/react */
import "./App.css"
import { css } from "@emotion/react"

function App() {
  return (
    <>
      <h1
        css={css`
          color: red;
        `}
      >
        Hello, World!
      </h1>
    </>
  )
}

export default App
