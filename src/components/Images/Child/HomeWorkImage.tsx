type Props = {
  className?: string
}
const HomeWorkImage: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="396"
      height="136"
      viewBox="0 0 396 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 0.515625H287.764L396 135.354H77.5L0 0.515625Z" fill="white" />
      <line x1="31" y1="13.5" x2="274" y2="13.5" stroke="#930606" />
      <line x1="43" y1="27.5" x2="286" y2="27.5" stroke="#930606" />
      <line x1="55" y1="41.5" x2="298" y2="41.5" stroke="#930606" />
      <line x1="67" y1="55.5" x2="310" y2="55.5" stroke="#930606" />
      <line x1="79" y1="69.5" x2="322" y2="69.5" stroke="#930606" />
      <line x1="91" y1="83.5" x2="334" y2="83.5" stroke="#930606" />
      <line x1="103" y1="97.5" x2="346" y2="97.5" stroke="#930606" />
      <line x1="115" y1="111.5" x2="358" y2="111.5" stroke="#930606" />
    </svg>
  )
}

export default HomeWorkImage
