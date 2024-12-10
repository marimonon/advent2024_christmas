/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import WindowRoomBg from "../Images/Window/WindowRoomBg"

const WindowRoom: React.FC = () => {
  return (
    <div>
      <WindowRoomBg css={windowBgCss} />
    </div>
  )
}

export default WindowRoom

const windowBgCss = css`
  width: 100%;
  height: 100%;
`
