/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Btn from "./Btn"
import TitleImage from "./Images/TitleImage"
import SantaImage from "./Images/SantaImage"
import ChimneyImage from "./Images/ChimneyImage"

const Start: React.FC = () => {
  return (
    <div css={start}>
      <TitleImage />
      <h1 css={title}>脱出ゲーム</h1>
      <div css={btnBox}>
        <Btn onClick={clickStart}>スタート</Btn>
      </div>
      <div css={santa}>
        <SantaImage />
      </div>
      <div css={chimney}>
        <ChimneyImage />
      </div>
    </div>
  )
}

export default Start

const start = css`
  position: relative;
  padding-top: 40px;
  text-align: center;
  min-height: 100vh;
`

const title = css`
  font-size: 24px;
  color: #fff;
`

const btnBox = css`
  margin: 20px auto 0;
  width: 200px;
`

const santa = css`
const santaFallAnime = keyframes`
  0% {
    bottom: 182px;
  }
  100% {
    bottom: -100px;
  }
`

  position: absolute;
  bottom: 182px;
  left: calc(50% - 150px);
  z-index: 1;
`

const chimney = css`
  position: absolute;
  bottom: -20px;
  left: calc(50% - 150px);
  z-index: 2;
`

const clickStart = () => {
  console.log("start")
}
