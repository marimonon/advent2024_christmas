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
          <option>アジャイルサムライの本は</option>
          <option>コード・コンプリートの本は</option>
          <option>マスタリングTCP/IPの本は</option>
          <option>Good Code, Bad Codeの本は</option>
        </select>
        <select css={paperLineCss}>
          <option></option>
          <option>図表が多く、補足説明も多く、</option>
          <option>イラストが面白く、</option>
          <option>値段が高く極めて難解だが、</option>
          <option>書く理由を詳しく述べてあり、</option>
        </select>
        <select css={paperLineCss}>
          <option></option>
          <option>合った事例を考えたり</option>
          <option>身近で意外な発見もあり、</option>
          <option>リアリティのある事例が多く</option>
          <option>具体的に実践しやすい内容で</option>
        </select>
        <select css={paperLineCss}>
          <option>設計の細かい会話ができて</option>
          <option>みんなでワイワイ話し合えて</option>
          <option>すぐに実務に生かすことが出来</option>
          <option>考えてなかったことを知れるので</option>
        </select>
        <select css={paperLineCss}>
          <option>すごく勉強になります</option>
          <option>大変おすすめな本です。</option>
          <option>とてもためになります。</option>
          <option>とても楽しいです。</option>
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
