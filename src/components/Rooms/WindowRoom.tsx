/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import WindowRoomBg from "../Images/Window/WindowRoomBg"
import HungryDogImage from "../Images/Window/HungryDogImage"
import WindowDeerImage from "../Images/Window/WindowDeerImage"

const WindowRoom: React.FC = () => {
  return (
    <div>
      <HungryDogImage css={hungryCss} />
      <WindowDeerImage css={windowDeerCss} />
      <WindowRoomBg css={windowBgCss} />
    </div>
  )
}

export default WindowRoom

const hungryCss = css`
  position: absolute;
  top: 28%;
  left: 24%;
  width: 40%;
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
