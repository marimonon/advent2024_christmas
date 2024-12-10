/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ChildRoomBg from "../Images/Child/ChildRoomBg"
import HomeWorkImage from "../Images/Child/HomeWorkImage"
import ChildSleepImage from "../Images/Child/ChildSleepImage"
import BootImage from "../Images/Child/BootImage"
import BootEmptyImage from "../Images/Child/BootEmptyImage"
import ChildImage from "../Images/Child/ChildImage"
import MasterKeyImage from "../Images/Child/MasterKeyImage"

const ChildRoom: React.FC = () => {
  return (
    <div>
      <MasterKeyImage css={masterKeyCss} />
      <ChildImage css={childCss} />
      <BootEmptyImage css={bootEmptyCss} />
      <BootImage css={bootCss} />
      <ChildSleepImage css={childSleepCss} />
      <HomeWorkImage css={homeWorkCss} />
      <ChildRoomBg css={childBgCss} />
    </div>
  )
}

export default ChildRoom

const masterKeyCss = css`
  position: absolute;
  top: 39%;
  left: 14%;
  width: 14%;
  height: auto;
  z-index: 4;
`

const childCss = css`
  position: absolute;
  top: 16%;
  left: 32%;
  width: 32%;
  height: auto;
  z-index: 3;
`

const bootEmptyCss = css`
  position: absolute;
  top: 18%;
  left: 47%;
  width: 13%;
  height: auto;
  z-index: 2;
`

const bootCss = css`
  position: absolute;
  top: 15%;
  left: 47%;
  width: 13%;
  height: auto;
  z-index: 1;
`

const childSleepCss = css`
  position: absolute;
  top: 26%;
  left: 28%;
  width: 76%;
  height: auto;
  z-index: 1;
`

const homeWorkCss = css`
  position: absolute;
  top: 80%;
  left: 36%;
  width: 40%;
  height: auto;
  z-index: 2;
`

const childBgCss = css`
  width: 100%;
  height: 100%;
`
