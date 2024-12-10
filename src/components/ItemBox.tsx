/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const ItemBox: React.FC = () => {
  return (
    <div css={itemBoxCss}>
      <p css={itemTextCss}>アイテムを選択できるよ</p>
      <ul css={itemListCss}>
        <li css={itemCss}></li>
        <li css={itemCss}></li>
        <li css={itemCss}></li>
      </ul>
    </div>
  )
}

export default ItemBox

const itemBoxCss = css`
  width: 100%;
  background-color: #fff;
  padding-bottom: 12px;
  bor1der-radius: 10px;
  border: 4px solid #930606;
  text-align: center;
`
const itemTextCss = css`
  font-size: 14px;
  color: #fff;
  background-color: #930606;
`

const itemListCss = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
`

const itemCss = css`
  width: 50px;
  height: 50px;
  background-color: #0ff;
`
