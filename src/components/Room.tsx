/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from "react"
import Arrows from "./Arrows"
import StoveRoom from "./Rooms/StoveRoom"
import TreeRoom from "./Rooms/TreeRoom"
import DiningRoom from "./Rooms/DiningRoom"
import EntranceRoom from "./Rooms/EntranceRoom"
import WindowRoom from "./Rooms/WindowRoom"
import StepRoom from "./Rooms/StepRoom"
import ChildRoom from "./Rooms/ChildRoom"
import ExTree from "./Rooms/ExTree"
import ExCake from "./Rooms/ExCake"
import ExHomeWork from "./Rooms/ExHomeWork"

const Room: React.FC = () => {
  return (
    <div css={roomCss}>
      <Arrows />
      {/* <StoveRoom /> */}
      {/* <TreeRoom /> */}
      {/* <DiningRoom /> */}
      <EntranceRoom />
      {/* <WindowRoom /> */}
      {/* <StepRoom /> */}
      {/* <ChildRoom /> */}
      {/* <ExTree /> */}
      {/* <ExCake /> */}
      {/* <ExHomeWork /> */}
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
