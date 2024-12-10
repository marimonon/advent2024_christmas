/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import TreeRoomBg from "../Images/Tree/TreeRoomBg"
import TreeImage from "../Images/Tree/TreeImage"
import TreeLightImage from "../Images/Tree/TreeLightImage"
import TreeWhiteImage from "../Images/Tree/TreeWhiteImage"

const TreeRoom: React.FC = () => {
  return (
    <div>
      <TreeWhiteImage css={treeWhiteCss} />
      <TreeLightImage css={treeLightCss} />
      <TreeImage css={treeCss} />
      <TreeRoomBg css={treeBgCss} />
    </div>
  )
}

export default TreeRoom

const treeWhiteCss = css`
  position: absolute;
  width: 60%;
  height: auto;
  right: 8%;
  bottom: 20%;
  z-index: 3;
`

const treeLightCss = css`
  position: absolute;
  width: 64%;
  height: auto;
  right: 4%;
  bottom: 16%;
  z-index: 2;
`

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
