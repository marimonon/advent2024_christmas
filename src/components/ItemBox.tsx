/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ItemBerry from "./Images/Item/ItemBerry"
import ItemCookie from "./Images/Item/ItemCookie"
import ItemCandle from "./Images/Item/ItemCandle"
import ItemRibbon from "./Images/Item/ItemRibbon"
import ItemBag from "./Images/Item/ItemBag"
import ItemMaster from "./Images/Item/ItemMaster"
import { useGameState } from "./GameStateProvider"

const ItemBox: React.FC = () => {
  const {
    gameState: { items },
  } = useGameState()

  return (
    <div css={itemBoxCss}>
      <p css={itemTextCss}>アイテムを選択できるよ</p>
      <ul css={itemListCss}>
        {items.berry === "get" && (
          <li css={itemCss}>
            <ItemBerry />
          </li>
        )}
        {items.cookie === "get" && (
          <li css={itemCss}>
            <ItemCookie />
          </li>
        )}
        {items.candle === "get" && (
          <li css={itemCss}>
            <ItemCandle />
          </li>
        )}
        {items.ribbon === "get" && (
          <li css={itemCss}>
            <ItemRibbon />
          </li>
        )}
        {items.bag === "get" && (
          <li css={itemCss}>
            <ItemBag />
          </li>
        )}
        {items.master === "get" && (
          <li css={itemCss}>
            <ItemMaster />
          </li>
        )}
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
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #0ff;
  }
`
