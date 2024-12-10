/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Btn from "../Btn"

const ExHomeWork: React.FC = () => {
  return (
    <div css={deskBgCss}>
      <div css={paperCss}>
        <h2>感想文</h2>
        <select css={paperLineCss}>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <select css={paperLineCss}>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <select css={paperLineCss}>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <select css={paperLineCss}>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <select css={paperLineCss}>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
      <div css={workBtnCss}>
        <Btn onClick={workClick}>これでよし⭐︎</Btn>
      </div>
    </div>
  )
}

export default ExHomeWork

const paperCss = css`
  padding: 8%;
  background-color: #fff;
  text-align: center;
  color: #930606;
`

const paperLineCss = css`
  width: 100%;
  min-height: 32px;
  max-height: 60px;
  height: 20%;
  border: 2px solid #930606;
`

const deskBgCss = css`
  width: 100%;
  height: 100%;
  background-color: #d18c0c;
  padding: 10%;
`

const workBtnCss = css`
  margin-top: 40px;
`

const workClick = () => {
  console.log("workClick")
}
