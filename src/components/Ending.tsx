/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import EndTextImage from "./Images/Ending/EndTextImage"
import SantasImage from "./Images/Ending/SantasImage"
import NightImage from "./Images/Ending/NightImage"
import LightImage from "./Images/Ending/LightImage"
import WhiteLightImage from "./Images/Ending/WhiteLightImage"
import RollSantaImage from "./Images/Ending/RollSantaImage"
import RollBallImage from "./Images/Ending/RollBallImage"
import RollCakeImage from "./Images/Ending/RollCakeImage"
import RollCatImage from "./Images/Ending/RollCatImage"
import RollBearImage from "./Images/Ending/RollBearImage"
import RollDeerImage from "./Images/Ending/RollDeerImage"
import RollDogImage from "./Images/Ending/RollDogImage"
import RollWreathImage from "./Images/Ending/RollWreathImage"

const Ending: React.FC = () => {
  return (
    <div css={endBgCss}>
      <EndTextImage css={endTextCss} />
      <SantasImage css={santasCss} />
      <WhiteLightImage css={whiteCss} />
      <LightImage css={lightCss} />
      <NightImage css={nightCss} />
      <div css={rollBox}>
        <ul css={rollCss}>
          <li css={rollItemCss}>
            <RollSantaImage css={rollImageCss} />
            <p>
              制作・イラスト・企画
              <br />
              マッピー
            </p>
          </li>
          <li css={rollItemCss}>
            <RollBallImage css={rollImageCss} />
            <p>
              制作・イラスト・企画
              <br />
              マッピー
            </p>
          </li>
          <li css={rollItemCss}>
            <RollCakeImage css={rollImageCss} />
            <p>
              制作・イラスト・企画
              <br />
              マッピー
            </p>
          </li>
          <li css={rollItemCss}>
            <RollCatImage css={rollImageCss} />
            <p>
              制作・イラスト・企画
              <br />
              マッピー
            </p>
          </li>
          <li css={rollItemCss}>
            <RollBearImage css={rollImageCss} />
            <p>
              制作・イラスト・企画
              <br />
              マッピー
            </p>
          </li>
          <li css={rollItemCss}>
            <RollDeerImage css={rollImageCss} />
            <p>
              制作・イラスト・企画
              <br />
              マッピー
            </p>
          </li>
          <li css={rollItemCss}>
            <RollDogImage css={rollImageCss} />
            <p>
              制作・イラスト・企画
              <br />
              マッピー
            </p>
          </li>
          <li css={rollItemCss}>
            <RollWreathImage css={rollImageCss} />
            <p>
              カレンダー：
              <br />
              フィヨルドブートキャンプ
              <br />
              Advent Calendar 2024
            </p>
          </li>
          <li>
            <a>https://adventar.org/calendars/10807</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Ending

const endBgCss = css`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #045662, #fff);
`

const endTextCss = css`
  position: absolute;
  top: 2%;
  left: 10%;
  width: 80%;
  height: auto;
  z-index: 5;
`

const santasAnime = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`
const santasCss = css`
  position: absolute;
  top: 10%;
  left: -10%;
  width: 100%;
  height: auto;
  z-index: 5;
  animation: ${santasAnime} 5s infinite linear;
`

const whiteAnime = keyframes`
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

const whiteCss = css`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 4;
  animation: ${whiteAnime} 3s infinite;
`
const lightAnime = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.5;
  }
`

const lightCss = css`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 3;
  animation: ${lightAnime} 3s infinite;
`

const nightCss = css`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 0;
`

const rollBox = css`
  position: relative;
  top: 60%;
  width: 100%;
  height: 40%;
  z-index: 10;
  overflow: hidden;
`

const rollAnime = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-90%);
  }
`

const rollCss = css`
  padding: 10%;
  animation: ${rollAnime} 3s forwards;
`

const rollItemCss = css`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
`

const rollImageCss = css`
  width: 20%;
  height: auto;
`
