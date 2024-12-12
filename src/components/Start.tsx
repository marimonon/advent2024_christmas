/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import Btn from "./Btn"
import TitleImage from "./Images/TitleImage"
import SantaImage from "./Images/SantaImage"
import ChimneyImage from "./Images/ChimneyImage"
import { useState, useContext } from "react"
import { SceneContext } from "../App"

const Start: React.FC = () => {
  const [startClicked, setStartClicked] = useState(false)
  const sceneContext = useContext(SceneContext)

  const clickStart = () => {
    setStartClicked(true)
    console.log("startClick", startClicked)
    setTimeout(() => {
      sceneContext.dispatch({ type: "ESCAPE" })
    }, 5000)
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
