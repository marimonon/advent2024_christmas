/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import Btn from "./Btn"
import TitleImage from "./Images/TitleImage"
import SantaImage from "./Images/SantaImage"
import ChimneyImage from "./Images/ChimneyImage"

const Start: React.FC = () => {
  return (
    <div css={startCss}>
      <TitleImage />
      <h1 css={titleCss}>脱出ゲーム</h1>
      <div css={btnBoxCss}>
        <Btn onClick={clickStart}>スタート</Btn>
      </div>
      <div css={santaCss}>
        <SantaImage />
      </div>
      <div css={chimneyCss}>
        <ChimneyImage />
      </div>
    </div>
  )
}

export default Start

const startCss = css`
  position: relative;
  padding-top: 40px;
  text-align: center;
  min-height: 100vh;
`

const titleCss = css`
  font-size: 24px;
  color: #fff;
`

const btnBoxCss = css`
  margin: 20px auto 0;
  width: 200px;
`

const santaFallAnime = keyframes`
  0% {
    bottom: 182px;
  }
  100% {
    bottom: -100px;
  }
`

const santaCss = css`
  position: absolute;
  bottom: 182px;
  left: calc(50% - 150px);
  z-index: 1;
  animation: ${santaFallAnime} 3s forwards;
`

const chimneyCss = css`
  position: absolute;
  bottom: -20px;
  left: calc(50% - 150px);
  z-index: 2;
`

const clickStart = () => {
  console.log("start")
}
