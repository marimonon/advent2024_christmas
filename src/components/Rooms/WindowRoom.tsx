/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import WindowRoomBg from "../Images/Window/WindowRoomBg"
import HungryDogImage from "../Images/Window/HungryDogImage"
import WindowDeerImage from "../Images/Window/WindowDeerImage"
import SweatDeerImage from "../Images/Window/SweatDeerImage"
import EatingDogImage from "../Images/Window/EatingDogImage"

const WindowRoom: React.FC = () => {
  return (
    <div>
      <EatingDogImage css={eatingCss} />
      <SweatDeerImage css={sweatCss} />
      <HungryDogImage css={hungryCss} />
      <WindowDeerImage css={windowDeerCss} />
      <WindowRoomBg css={windowBgCss} />
    </div>
  )
}

export default WindowRoom

const eatingCss = css`
  position: absolute;
  top: 20%;
  left: 62%;
  width: 12%;
  height: auto;
  z-index: 4;
`

const sweatCss = css`
  position: absolute;
  top: 20%;
  left: 62%;
  width: 12%;
  height: auto;
  z-index: 1;
`

const hungryCss = css`
  position: absolute;
  top: 28%;
  left: 24%;
  width: 41%;
  height: auto;
  z-index: 3;
`

const windowDeerCss = css`
  position: absolute;
  top: 30%;
  left: 24%;
  width: 33%;
  height: auto;
  z-index: 2;
`
const windowBgCss = css`
  width: 100%;
  height: 100%;
`
