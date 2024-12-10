/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ChildRoomBg from "../Images/Child/ChildRoomBg"
import HomeWorkImage from "../Images/Child/HomeWorkImage"

const ChildRoom: React.FC = () => {
  return (
    <div>
      <HomeWorkImage css={homeWorkCss} />
      <ChildRoomBg css={childBgCss} />
    </div>
  )
}

export default ChildRoom

const homeWorkCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  z-index: 2;
`

const childBgCss = css`
  width: 100%;
  height: 100%;
`
