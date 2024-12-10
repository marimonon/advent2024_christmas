import Arrows from "./Arrows"
import ItemBox from "./ItemBox"
import StoveRoom from "./Rooms/StoveRoom"

const Escape: React.FC = () => {
  return (
    <>
      <Arrows />
      <StoveRoom />
      <ItemBox />
    </>
  )
}

export default Escape
