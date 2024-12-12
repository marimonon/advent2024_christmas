/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import TreeRoomBg from "../Images/Tree/TreeRoomBg"
import TreeImage from "../Images/Tree/TreeImage"
import TreeLightImage from "../Images/Tree/TreeLightImage"
import TreeWhiteImage from "../Images/Tree/TreeWhiteImage"
import TreeSwitchImage from "../Images/Tree/TreeSwitchImage"
import DeerballImage from "../Images/Tree/DeerballImage"
import SwitchImage from "../Images/Tree/SwitchImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { toExTree } = gameStateActions

const TreeRoom: React.FC = () => {
  const { dispatch } = useGameState()

  return (
    <div>
      <SwitchImage css={switchCss} />
      <DeerballImage css={deerCss} />
      <TreeSwitchImage
        css={treeSwitchCss}
        onClick={() => dispatch(toExTree())}
      />
      <TreeWhiteImage css={treeWhiteCss} />
      <TreeLightImage css={treeLightCss} />
      <TreeImage css={treeCss} />
      <TreeRoomBg css={treeBgCss} />
    </div>
  )
}

export default TreeRoom

const switchCss = css`
  position: absolute;
  width: 10%;
  height: auto;
  left: 20%;
  top: 40%;
  z-index: 5;
`
const deerCss = css`
  position: absolute;
  width: 9%;
  height: auto;
  top: 56%;
  left: 46%;
  z-index: 4;
`

const treeSwitchCss = css`
  position: absolute;
  width: 10%;
  height: auto;
  right: 22%;
  bottom: 8.5%;
  z-index: 4;
`

const lightWhiteAnime = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const treeWhiteCss = css`
  position: absolute;
  width: 60%;
  height: auto;
  right: 8%;
  bottom: 20%;
  z-index: 3;
  animation: ${lightWhiteAnime} 3s infinite;
`

const lightAnime = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`

const treeLightCss = css`
  position: absolute;
  width: 64%;
  height: auto;
  right: 4%;
  bottom: 16%;
  z-index: 2;
  animation: ${lightAnime} 2s infinite;
`

const treeCss = css`
  position: absolute;
  width: 90%;
  height: auto;
  right: -10%;
  bottom: 8%;
  z-index: 1;
  filter: drop-shadow(0 0 80px #ff0);
`

const treeBgCss = css`
  width: 100%;
  height: 100%;
`
