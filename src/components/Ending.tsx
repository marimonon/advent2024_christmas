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
import FinImage from "./Images/Ending/FinImage"

const Ending: React.FC = () => {
  return (
    <div css={endBgCss}>
      <EndTextImage css={endTextCss} />
      <div css={expandCss}>
        <SantasImage css={santasCss} />
      </div>
      <WhiteLightImage css={whiteCss} />
      <WhiteLightImage css={whiteLightCss} />
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
              手取り足取りフォロー
              <br />
              Yuto(だんな)
            </p>
          </li>
          <li css={rollItemCss}>
            <RollCakeImage css={rollImageCss} />
            <p>
              Special Thanks
              <br />
              マスタリングTCP/IP輪読会の方々
              <br />
              コード・コンプリート輪読会の方々
            </p>
          </li>
          <li css={rollItemCss}>
            <RollCatImage css={rollImageCss} />
            <p>
              火付役
              <br />
              きたろうさん　しばいぬろうさん
            </p>
          </li>
          <li css={rollItemCss}>
            <RollDeerImage css={rollImageCss} />
            <p>
              テストや応援
              <br />
              いねたぬさん
            </p>
          </li>
          <li css={rollItemCss}>
            <RollBearImage css={rollImageCss} />
            <p>
              テストや応援
              <br />
              よこまるさん　うつぼさん
            </p>
          </li>
          <li css={rollItemCss}>
            <RollDogImage css={rollImageCss} />
            <p>
              モデル？
              <br />
              タロさん（大家さんの犬）
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
            <a href="https://adventar.org/calendars/10807">
              https://adventar.org/calendars/10807
            </a>
          </li>
          <li css={finCss}>
            <FinImage />
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

const testExpandAnime = keyframes`
  0% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
  }
`

const endTextCss = css`
  position: absolute;
  top: 2%;
  left: 10%;
  width: 80%;
  height: auto;
  z-index: 5;
  animation: ${testExpandAnime} 2s forwards;
`

const santasExpandAnime = keyframes`
  0% {
    transform: scale(4);
  }
  100% {
    transform: scale(1);
  }
`
const santasAnime = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`

const expandCss = css`
  position: relative;
  top: 10%;
  animation: ${santasExpandAnime} 3s forwards;
  z-index: 5;
`
const santasCss = css`
  position: absolute;
  top: 10%;
  left: -10%;
  width: 100%;
  height: auto;
  animation: ${santasAnime} 5s infinite linear;
`

const whiteAnime = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translateY(-30%);
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
`
const whiteCss = css`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 4;
  animation: ${whiteAnime} 8s infinite linear;
`

const whiteLightCss = css`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 4;
  animation: ${whiteAnime} 8s infinite linear;
  animation-delay: -2s;
`
const lightAnime = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
    transform: translateX(-2%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
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
  top: 50%;
  width: 100%;
  height: 50%;
  z-index: 10;
  overflow: hidden;
`

const rollAnime = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-76%);
  }
`

const rollCss = css`
  padding: 10%;
  animation: ${rollAnime} 45s forwards;
`

const rollItemCss = css`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20%;
  color: #045662;
`

const rollImageCss = css`
  width: 20%;
  height: auto;
`

const finCss = css`
  margin-top: 20%;
  text-align: center;
`
