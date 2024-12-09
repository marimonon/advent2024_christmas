/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Btn from "./Btn"

const Start: React.FC = () => {
  return (
    <div css={start}>
      <h1 css={title}>脱出ゲーム</h1>
      <Btn onClick={clickStart}>スタート</Btn>
    </div>
  )
}

export default Start

const start = css`
  text-align: center;
`
const title = css`
  font-size: 24px;
  color: #fff;
`
const clickStart = () => {
  console.log("start")
}
