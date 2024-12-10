/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import EntranceRoomBg from "../Images/Entrance/EntranceRoomBg"

const EntranceRoom: React.FC = () => {
  return (
    <div>
      <EntranceRoomBg css={entranceBg} />
    </div>
  )
}

export default EntranceRoom

const entranceBg = css`
  width: 100%;
  height: 100%;
`
