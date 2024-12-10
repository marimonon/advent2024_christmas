/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from "react"
import StoveRoom from "./Rooms/StoveRoom"
import Arrows from "./Arrows"
import TreeRoom from "./Rooms/TreeRoom"
import DiningRoom from "./Rooms/DiningRoom"
import EntranceRoom from "./Rooms/EntranceRoom"

const Room: React.FC = () => {
  return (
    <div css={roomCss}>
      <Arrows />
      {/* <StoveRoom /> */}
      {/* <TreeRoom /> */}
      {/* <DiningRoom /> */}
      <EntranceRoom />
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
