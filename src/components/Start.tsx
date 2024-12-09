/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Btn from "./Btn"
import TitleImage from "./Images/TitleImage"

const Start: React.FC = () => {
  return (
    <div css={start}>
      <TitleImage />
      <h1 css={title}>脱出ゲーム</h1>
      <div css={btnBox}>
        <Btn onClick={clickStart}>スタート</Btn>
      </div>
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

const btnBox = css`
  margin: 20px auto 0;
  width: 200px;
`

const clickStart = () => {
  console.log("start")
}
