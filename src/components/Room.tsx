/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from "react"
import StoveRoom from "./Rooms/StoveRoom"
import Arrows from "./Arrows"
import TreeRoom from "./Rooms/TreeRoom"
import DiningRoom from "./Rooms/DiningRoom"
import EntranceRoom from "./Rooms/EntranceRoom"
import WindowRoom from "./Rooms/WindowRoom"
import StepRoom from "./Rooms/StepRoom"

const Room: React.FC = () => {
  return (
    <div css={roomCss}>
      <Arrows />
      {/* <StoveRoom /> */}
      {/* <TreeRoom /> */}
      {/* <DiningRoom /> */}
      {/* <EntranceRoom /> */}
      {/* <WindowRoom /> */}
      <StepRoom />
    </div>
  )
}

export default Room

const roomCss = css`
  position: relative;
  width: 100%;
  height: 124vw;
  max-height: 744px;
`
