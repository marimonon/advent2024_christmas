/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import Btn from "./Btn"
import TitleImage from "./Images/TitleImage"
import SantaImage from "./Images/SantaImage"
import ChimneyImage from "./Images/ChimneyImage"
import { useState } from "react"
import { gameStateActions, useGameState } from "./GameStateProvider"
const { switchScene } = gameStateActions

const Start: React.FC = () => {
  const [startClicked, setStartClicked] = useState(false)

  const { dispatch } = useGameState()

  const clickStart = () => {
    setStartClicked(true)
    setTimeout(() => {
      console.log("startClick", true)
      dispatch(switchScene("escape"))
    }, 2500)
  }

  return (
    <div css={startCss(startClicked)}>
      <TitleImage css={titleImageCss} />
      <h1 css={titleCss}>脱出ゲーム</h1>
      <div css={btnBoxCss}>
        <Btn onClick={clickStart}>スタート</Btn>
      </div>
      <div css={santaCss(startClicked)}>
        <SantaImage css={santaImageCss} />
      </div>
      <p css={textCss(startClicked)}>どどーん</p>
      <div css={chimneyCss}>
        <ChimneyImage css={chimneyImageCss} />
      </div>
    </div>
  )
}

export default Start

const startCss = (startClicked: boolean) => css`
  position: relative;
  padding-top: 40px;
  text-align: center;
  min-height: 100vh;
  opacity: ${startClicked ? 0 : 1};
  transition: opacity 5s;
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
    bottom: 196px;
  }
  100% {
    bottom: -100px;
  }
`

const santaCss = (startClicked: boolean) => css`
  position: absolute;
  bottom: 196px;
  left: calc(50% - 65px);
  z-index: 1;
  ${startClicked &&
  css`
    animation: ${santaFallAnime} 3s forwards;
  `}
`

const textCss = (startClicked: boolean) => css`
  position: absolute;
  bottom: 220px;
  left: calc(50% - 25px);
  color: #fff;
  visibility: ${startClicked ? "visible" : "hidden"};
  transition: visibility 0s ${startClicked ? "1s" : "0s"};
`

const chimneyCss = css`
  position: absolute;
  bottom: -20px;
  left: calc(50% - 75px);
  z-index: 2;
`

// svgのCSS
const titleImageCss = css`
  width: 50%;
  height: auto;
`

const santaImageCss = css`
  width: 140px;
  height: auto;
`

const chimneyImageCss = css`
  width: 160px;
  height: auto;
`
