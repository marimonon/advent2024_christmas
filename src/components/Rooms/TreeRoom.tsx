/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import TreeRoomBg from "../Images/Tree/TreeRoomBg"
import TreeImage from "../Images/Tree/TreeImage"

const TreeRoom: React.FC = () => {
  return (
    <div>
      <TreeImage css={treeCss} />
      <TreeRoomBg css={treeBgCss} />
    </div>
  )
}

export default TreeRoom

const treeCss = css`
  position: absolute;
  width: 90%;
  height: auto;
  right: -10%;
  bottom: 8%;
  z-index: 1;
`

const treeBgCss = css`
  width: 100%;
  height: 100%;
`
