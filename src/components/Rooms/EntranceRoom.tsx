/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import EntranceRoomBg from "../Images/Entrance/EntranceRoomBg"
import RibbonImage from "../Images/Entrance/RibbonImage"
import EntranceDoorImage from "../Images/Entrance/EntranceDoorImage"

const EntranceRoom: React.FC = () => {
  return (
    <div>
      <EntranceDoorImage css={doorCss} />
      <RibbonImage css={ribbonCss} />
      <EntranceRoomBg css={entranceBg} />
    </div>
  )
}

export default EntranceRoom

const doorCss = css`
  position: absolute;
  width: 45.2%;
  height: auto;
  bottom: 11%;
  right: 13.5%;
  z-index: 3;
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
