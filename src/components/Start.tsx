/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import Btn from "./Btn"
import TitleImage from "./Images/TitleImage"
import SantaImage from "./Images/SantaImage"
import ChimneyImage from "./Images/ChimneyImage"
import { useState } from "react"

const Start: React.FC = () => {
  const [startClicked, setStartClicked] = useState(false)

  const clickStart = () => {
    setStartClicked(true)
    console.log("startClick", startClicked)
  }

  return (
    <div css={startCss}>
      <TitleImage css={titleImageCss} />
      <h1 css={titleCss}>脱出ゲーム</h1>
      <div css={btnBoxCss}>
        <Btn onClick={clickStart}>スタート</Btn>
      </div>
      <div css={santaCss(startClicked)}>
        <SantaImage css={santaImageCss} />
      </div>
      <div css={chimneyCss}>
        <ChimneyImage css={chimneyImageCss} />
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

const santaCss = (startClicked: boolean) => css`
  position: absolute;
  bottom: 182px;
  left: calc(50% - 150px);
  z-index: 1;
  ${startClicked &&
  css`
    animation: ${santaFallAnime} 3s forwards;
  `}
`

const chimneyCss = css`
  position: absolute;
  bottom: -20px;
  left: calc(50% - 150px);
  z-index: 2;
`

// svgのCSS
const titleImageCss = css`
  width: 300px;
  height: 100px;
`

const santaImageCss = css`
  width: 300px;
  height: 300px;
`

const chimneyImageCss = css`
  width: 300px;
  height: 300px;
`
