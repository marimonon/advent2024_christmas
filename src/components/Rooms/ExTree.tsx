/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ExTreeBg from "../Images/Tree/ExTreeBg"
import ExTreeSwitchImage from "../Images/Tree/ExTreeSwitchImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { switchTreeLight } = gameStateActions

const ExTree: React.FC = () => {
  const { dispatch } = useGameState()
  return (
    <div>
      <ExTreeSwitchImage
        css={exSwitchCss}
        onClick={() => dispatch(switchTreeLight())}
      />
      <ExTreeBg css={exTreeCss} />
    </div>
  )
}

export default ExTree

const exSwitchCss = css`
  position: absolute;
  top: 68%;
  left: 49%;
  width: 8%;
  height: auto;
  z-index: 2;
`

const exTreeCss = css`
  width: 100%;
  height: 100%;
`
