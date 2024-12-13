/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import Btn from "../Btn"
import { gameStateActions, useGameState } from "../GameStateProvider"
import Comment from "../Comment"
const { finishWork } = gameStateActions

const ExHomeWork: React.FC = () => {
  const {
    gameState: { workdone },
    dispatch,
  } = useGameState()

  const handleClick = () => {
    const selects = document.querySelectorAll("select")
    const values = Array.from(selects).map((select) => select.value)
    if (values.join(",") === "3,1,2,2,4") {
      dispatch(finishWork())
      setComment("子供「完成！おわったー！！」")
    } else {
      setComment("子供「...書き直そう。」")
    }
  }

  const [comment, setComment] = useState("")

  return (
    <div css={deskBgCss}>
      {comment && <Comment setComment={setComment}>{comment}</Comment>}
      <div css={paperCss}>
        <h2>感想文</h2>
        <select css={paperLineCss} defaultValue={workdone ? "3" : "0"}>
          <option value="0"></option>
          <option value="1">アジャイルサムライの本は</option>
          <option value="2">コード・コンプリートの本は</option>
          <option value="3">マスタリングTCP/IPの本は</option>
          <option value="4">Good Code, Bad Codeの本は</option>
        </select>
        <select css={paperLineCss} defaultValue={workdone ? "1" : "0"}>
          <option value="0"></option>
          <option value="1">図表が多く、補足説明も多く、</option>
          <option value="2">イラストが面白く、</option>
          <option value="3">値段が高く極めて難解だが、</option>
          <option value="4">書く理由を詳しく述べてあり、</option>
        </select>
        <select css={paperLineCss} defaultValue={workdone ? "2" : "0"}>
          <option value="0"></option>
          <option value="1">合った事例を考えたり</option>
          <option value="2">身近で意外な発見もあり、</option>
          <option value="3">リアリティのある事例が多く</option>
          <option value="4">具体的に実践しやすい内容で</option>
        </select>
        <select css={paperLineCss} defaultValue={workdone ? "2" : "0"}>
          <option value="0"></option>
          <option value="1">設計の細かい会話ができて</option>
          <option value="2">みんなでワイワイ話し合えて</option>
          <option value="3">すぐに実務に生かすことが出来</option>
          <option value="4">考えてなかったことを知れるので</option>
        </select>
        <select css={paperLineCss} defaultValue={workdone ? "4" : "0"}>
          <option value="0"></option>
          <option value="1">すごく勉強になります</option>
          <option value="2">大変おすすめな本です。</option>
          <option value="3">とてもためになります。</option>
          <option value="4">とても楽しいです。</option>
        </select>
      </div>
      <div css={workBtnCss}>
        <Btn onClick={handleClick}>これでよし⭐︎</Btn>
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
