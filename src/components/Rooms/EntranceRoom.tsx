/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import EntranceRoomBg from "../Images/Entrance/EntranceRoomBg"
import RibbonImage from "../Images/Entrance/RibbonImage"
import EntranceDoorImage from "../Images/Entrance/EntranceDoorImage"
import { useState, useContext } from "react"
import { SceneContext } from "../../App"

const EntranceRoom: React.FC = () => {
  const [doorOpened, setDoorOpened] = useState(false)
  const sceneContext = useContext(SceneContext)

  const doorOpen = () => {
    setDoorOpened(true)
    console.log("doorOpened", doorOpened)
    setTimeout(() => {
      sceneContext.dispatch({ type: "ENDING" })
    }, 2000)
  }

  return (
    <div>
      <EntranceDoorImage css={doorCss(doorOpened)} onClick={doorOpen} />
      <RibbonImage css={ribbonCss} />
      <EntranceRoomBg css={entranceBg} />
    </div>
  )
}

export default EntranceRoom

const doorCss = (doorOpened: boolean) => css`
  position: absolute;
  width: 45.2%;
  height: auto;
  bottom: 11%;
  right: 13.5%;
  z-index: 3;
  opacity: ${doorOpened ? 0 : 1};
  transition: opacity 1s;
`

const ribbonCss = css`
  position: absolute;
  width: 30%;
  height: auto;
  bottom: 0%;
  left: 8%;
  z-index: 2;
`

const entranceBg = css`
  width: 100%;
  height: 100%;
`
