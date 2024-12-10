/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import EntranceRoomBg from "../Images/Entrance/EntranceRoomBg"
import RibbonImage from "../Images/Entrance/RibbonImage"

const EntranceRoom: React.FC = () => {
  return (
    <div>
      <RibbonImage css={ribbonCss} />
      <EntranceRoomBg css={entranceBg} />
    </div>
  )
}

export default EntranceRoom

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
